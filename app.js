const express = require("express");
const app = express();


const ejs =  require("ejs");
const {cert} = require('firebase-admin/app');
const admin = require('firebase-admin');
const http = require('http');
const socket = require('socket.io');
const {google} = require("google-charts");

const net = http.Server(app); //create server
const io = socket(net); //create socket using server


//set up io connection
io.on('connection', function(socket){
    socket.on("updateChart", function(chartData){
        console.log(chartData);
        io.emit("chartUpdated", chartData);
    });
});

const serviceAccount = require("/Users/janith/PycharmProjects/PAB-WebApp/patient-assisting-bed-app.json");

admin.initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://patient-assisting-bed-app-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.firestore()




app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.get("/", function(req, res){
    res.render("home", {current:"Home"});
});


//async function to get data from firebase
async function getData(collectionName){
    let data = [];
    const snapshot = await db.collection(collectionName).orderBy('timestamp', 'asc').limit(20).get();
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
    //create array for Google charts data
    let bpmData = [];
    let bodyTempData = [];
    let roomTempData = [];
    bpmData.push(['Time', 'Heart Rate']);
    bodyTempData.push(['Time', 'Body Temperature']);
    roomTempData.push(['Time', 'Room Temperature']);




    documents.forEach((doc) => {
        bpmData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['bpm']]);
        bodyTempData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['body temp']]);
        roomTempData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['room temp']]);
    }
    );
    return [bpmData, bodyTempData, roomTempData];

}
io.on('connection', (socket) => {
socket.on('requestChartData', async (collectionName) => {
        console.log(collectionName);
        let chartData = await getData(collectionName);
        console.log(chartData);
        io.emit('chartData', chartData);
    });
});

app.get("/patient/:pname",async (req, res)=>{
    const collectionName = req.params.pname;
    db.collection(collectionName)
        .orderBy('timestamp', 'asc')
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
        console.log(documents);
        //create array for Google charts data
        let bpmData = [];
        let bodyTempData = [];
        let roomTempData = [];
        bpmData.push(['Time', 'Heart Rate']);
        bodyTempData.push(['Time', 'Body Temperature']);
        roomTempData.push(['Time', 'Room Temperature']);




        documents.forEach((doc) => {
            bpmData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['bpm']]);
            bodyTempData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['body temp']]);
            roomTempData.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['room temp']]);
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





//get request to alerts each patient
// app.get("/:pname/alert",function(req, res){
//     console.log(req.params.pname);
//
//     //code for get patient data from collection name Alerts from firestore fiels= [h-bpm, h-temp, l-temp, l-bpm] documents are names by each patient name
//     db.collection("Alerts").doc(req.params.pname).get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//             res.render("alert", {data:doc.data(), current:req.params.pname});
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//             res.render("alert", {data: {}, current: req.params.pname});
//         }
//     }
//     ).catch((error) => {
//         console.log("Error getting document:", error);
//         res.render("alert", {data:{}, current:req.params.pname});
//     });
//     res.render("alert", {current:req.params.pname});
// });



// app.listen(3000, function(){
//     console.log("sever successfully running on port 3000");
// });

net.listen(3000, function(){
    console.log("sever successfully running on port 3000");
});