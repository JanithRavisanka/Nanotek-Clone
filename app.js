const express = require("express");
const mongoose = require("mongoose");
const ejs =  require("ejs");
const { collection, getDocs } = require("firebase/firestore");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
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


app.get("/:pname",function(req, res){
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
        //create arry for google charts data
        var data = [];
        data.push(['Time', 'Heart Rate']);
        documents.forEach((doc) => {
            data.push([doc.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}), doc['bpm']]);
        }
        );
        console.log(data);
        res.render("items", {data:data, current:collectionName});
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });




});




app.listen(3000, function(){
    console.log("sever successfully running on port 3000");
});
