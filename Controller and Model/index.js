//use Mysql Module
const mysql = require('mysql');
//use experess Module
const express = require('express');
//use body-parser Module
const bodyparser = require('body-parser');
//use cors module to listen from other port
var cors = require('cors');
//use multer to handle files
var multer = require('multer');
//use http for prtocol
const https = require('https');
//use csvjson to convert CSV file to JSON
const csvjson = require('csvjson');
//use file System for read and write files
const readFile = require('fs').readFile;
//use date to get cuurent date and time
const date = require('date-and-time');

//intialize
var app = express();

//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
 	host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Locusnine'
});

//database connection
mysqlConnection.connect((err)=> {
	if(!err)
	console.log('Connection Established Successfully');
	else
	console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

app.use(cors())

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Create a multer instance and set the destination folder. The code below uses C2C/Controller and Model folder.
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'C2C/Controller and Model')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})

//Create an upload instance and receive a single file
var upload = multer({ storage: storage }).single('file')

//Set up the post route
app.post('/upload',function(req, res) {     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
    })
});

//create an object for date and time
const now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');

//once file get upload convert it into JSON
readFile('./Test_currency.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log('Fail to convert into JSON' + err); 
        throw new Error(err.status(500));
    }
    const jsonObj = csvjson.toObject(fileContent);
    //used an external API to fetch JSON value for todays's INR to USD conversion rate
    let req = https.get("https://free.currconv.com/api/v7/convert?q=INR_USD&compact=ultra&apiKey=18936862cff4fc21990f", function(res) {
    let data = '',
      json_data;

    res.on('data', function(stream) {
      data += stream;
    });
    res.on('end', function() {
      json_data = JSON.parse(data);
      //logic for our JSON file and fetched JSON file to calculate INR to USD value
      for(i in jsonObj){
        var INRS =  jsonObj[i].INR;
        var USDs = INRS * json_data.INR_USD;
        jsonObj[i].USD = USDs; 
        jsonObj[i].CR =  json_data.INR_USD;
        jsonObj[i].Datetime = now;   
      }
      
      app.get('/result' , (req, res) => {
          res.send(jsonObj);
      });
      
    });
  });

  req.on('error', function(e) {
      console.log(e.message);
  });
});





