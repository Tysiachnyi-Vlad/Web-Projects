var express = require("express");
var path = require("path");
const cors = require('cors');
var bodyParser = require('body-parser');
var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}



var json = getConfig('trading-hours.json');
/////////////////////////////////////////////////
var app = express();

 app.listen(30001, function(){
    console.log("serever")
 })

app.use(cors());
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send(JSON.stringify(json));
})






