const express = require("express");
const app = express();


 //message sending
const { Vonage } = require('@vonage/server-sdk')
//authenticating
const vonage = new Vonage({
    apiKey: "444126f4",
    apiSecret: "jo4IKWkkc1A0GLBf"
})
var collectionName = "Janith";




const ejs =  require("ejs");
const {cert} = require('firebase-admin/app');
const admin = require('firebase-admin');


const serviceAccount = require("/Users/janith/PycharmProjects/PAB-WebApp/patient-assisting-bed-app.json");

admin.initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://patient-assisting-bed-app-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.firestore()

//create a function to check patient last hr value every 1 min and send message
function checkPatientLastHr(){
    db.collection(collectionName)
        .orderBy('timestamp', 'desc')
        .limit(1)
        .get()
        .then((snapshot) => {
            if (snapshot.empty) {
                console.log('No documents found in the collection.');
                return;
            }

            const documents = [];
            snapshot.forEach((doc) => {
                documents.push(doc.data());
            });

            console.log('Retrieved documents:');
            console.log(documents);

            //get last hr value
            let lastHr = 0;
            let lastBt = 0;
            documents.forEach((doc) => {
                lastHr = doc['bpm'];
                lastBt = doc['body temp'];
            }
            );
            console.log(lastHr);
            //send message if last hr value is less than 60
            if(lastHr < 60 || lastHr > 120 || lastBt < 35 || lastBt > 40){
                const from = "PAB";
                const to = "94703487817";
                let text;
                if(lastHr < 60 && lastBt < 35){
                    text = 'Patient ' + collectionName +' heart rate is less than 60 and body temperature is less than 35. Please check the patient.';
                }else if(lastHr < 60 && lastBt > 40){
                    text = 'Patient ' + collectionName +' heart rate is less than 60 and body temperature is more than 40. Please check the patient.';
                }else if(lastHr > 120 && lastBt < 35){
                    text = 'Patient ' + collectionName +' heart rate is more than 120 and body temperature is less than 35. Please check the patient.';
                }else if(lastHr > 120 && lastBt > 40){
                    text = 'Patient ' + collectionName +' heart rate is more than 120 and body temperature is more than 40. Please check the patient.';
                }else if(lastHr < 60 && lastBt < 35){
                    text = 'Patient ' + collectionName +' heart rate is less than 60 and body temperature is less than 35. Please check the patient.';
                }else if(lastHr < 60){
                    text = 'Patient ' + collectionName +' heart rate is less than 60. Please check the patient.';
                }else if(lastHr > 120){
                    text = 'Patient ' + collectionName +' heart rate is more than 120. Please check the patient.';
                }else if(lastBt < 35){
                    text = 'Patient ' + collectionName +' body temperature is less than 35. Please check the patient.';
                }else if(lastBt > 40){
                    text = 'Patient ' + collectionName +' body temperature is more than 40. Please check the patient.';
                }
            else{
                console.log('Patient ' + collectionName +' is healthy.');
            }
                async function sendSMS() {
                    await vonage.sms.send({to, from, text})
                        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
                }

                sendSMS();
            }
        })
        .catch((error) => {
            console.error('Error getting documents:', error);
        });
}

const interval = 60000; // Time interval in milliseconds to check hr value (60000ms = 1 minute)
async function startInterval() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, interval));
        checkPatientLastHr();
    }
}
startInterval().then(r => console.log(r)).catch(e => console.log(e));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.get("/", function(req, res){
    res.render("home", {current:"Home"});
});



app.get("/patient/:pname",(req, res)=>{
    collectionName = req.params.pname;
    db.collection(collectionName)
        .orderBy('timestamp', 'desc')
        .limit(20)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No documents found in the collection.');
          return;
        }

        const documents = [];
        snapshot.forEach((doc) => {
          documents.push(doc.data());
        });

        console.log('Retrieved documents:');

        documents.reverse(); // reverse the array to get the latest data first
        console.log(documents);
        //create array for Google charts data
        let bpmData = [];
        let bodyTempData = [];
        let roomTempData = [];
        bpmData.push(['Time', 'Heart Rate']);
        bodyTempData.push(['Time', 'Body Temperature']);
        roomTempData.push(['Time', 'Room Temperature']);




        documents.forEach((doc) => {
            bpmData.push([doc.timestamp.toDate().toLocaleTimeString() , doc['bpm']]);
            bodyTempData.push([doc.timestamp.toDate().toLocaleTimeString(), doc['body temp']]);
            roomTempData.push([doc.timestamp.toDate().toLocaleTimeString(), doc['room temp']]);
        }
        );
        //get all avarage values
        let bpmAvg = 0;
        let bodyTempAvg = 0;
        let roomTempAvg = 0;
        documents.forEach((doc) => {
            bpmAvg += doc['bpm'];
            bodyTempAvg += doc['body temp'];
            roomTempAvg += doc['room temp'];
        }

        );
        bpmAvg = bpmAvg/documents.length;
        bodyTempAvg = bodyTempAvg/documents.length;
        roomTempAvg = roomTempAvg/documents.length;

        console.log(bpmData);
        res.render("items", {data:[bpmData, bodyTempData, roomTempData] ,current:collectionName, bpmAvg, bodyTempAvg, roomTempAvg});
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });

});



app.listen(3000, function(){
    console.log("sever successfully running on port 3000");
});