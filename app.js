const express = require("express");
const ejs =  require("ejs");
const {cert} = require('firebase-admin/app');
const admin = require('firebase-admin');



const serviceAccount = require("/Users/janith/PycharmProjects/PAB-WebApp/patient-assisting-bed-app.json");

admin.initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://patient-assisting-bed-app-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.firestore()



const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.get("/", function(req, res){
    res.render("home", {current:"Home"});
});


app.get("/patient/:pname",function(req, res){
    const collectionName = req.params.pname;
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
        console.log(bpmData);
        res.render("items", {data:[bpmData, bodyTempData, roomTempData] ,current:collectionName});
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });

});





//get request to alerts each patient
app.get("/:pname/alert",function(req, res){
    console.log(req.params.pname);

    //code for get patient data from collection name Alerts from firestore fiels= [h-bpm, h-temp, l-temp, l-bpm] documents are names by each patient name
    db.collection("Alerts").doc(req.params.pname).get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            res.render("alert", {data:doc.data(), current:req.params.pname});
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            res.render("alert", {data: {}, current: req.params.pname});
        }
    }
    ).catch((error) => {
        console.log("Error getting document:", error);
        res.render("alert", {data:{}, current:req.params.pname});
    });
    res.render("alert", {current:req.params.pname});
});


app.listen(3000, function(){
    console.log("sever successfully running on port 3000");
});
