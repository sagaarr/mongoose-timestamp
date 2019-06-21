const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const timestamps = require('mongoose-timestamp');

require('./models/user');
let User = mongoose.model("User");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/timeStamp', {useNewUrlParser: true})
        .then(() => {console.log("Connected to DB")})
        .catch((err)=> {
            console.log(err)
        });




app.post("/", (req,res) =>{
    let user = new User({
        username:req.body.username, 
        email: req.body.email,
        lastName:req.body.lastName,
        number:req.body.number
    })
    user.save()
    .then((user)=>{
        console.log(user);
    })
    .catch((err) => {console.log(err)});
})



app.get("/sort", (req,res) =>{

    User.find({}, null, {sort: 'createdAt'}, function(err, docs) { 
        console.log(docs)
     });

})



app.listen(3000, ()=>{
    console.log("server started");
})