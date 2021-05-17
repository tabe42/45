const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.nextTick.PORT || 5000 ;
console.log("Starting Server")
app.listen(PORT,()=>{console.log('Server started on port : ${PORT}')});

console.log("COnnecting to mongo")
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true},(error)=>{
    if (error) return console.error(error);
    console.log("Connection with mongo done");
}
);