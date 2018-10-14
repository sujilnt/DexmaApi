var request = require("request");
//var json = require("./1.json");
const {dateISOConversion} = require("isodate");
date = new Date("2018-10-7");
const fromDate = new Date("2018-10-7").toISOString();
const toDate= new Date("2018-10-14").toISOString();

const {parsingObj} = require("./parsingObjects.js");
const deviceArr=[];
var options={
  url : `https://api.dexcell.com/v3/locations/?limit=1`,
 headers: {
     'x-dexcell-token' :"c0fd279531e5ab806330",
     "Accept": "application/json"
   }
}
request(options, function(error, response, body) {
    //const data = JSON.parse(body);
    //console.log(parsingObj(data,fromDate,toDate));
});
// Working of -Dexma APi
