const request = require("request");
const {parsingObj} = require("./parsingObjects.js");
const {convertDate} = require("./utils.js");

const fromDate = convertDate("2018-10-07");
const toDate = convertDate("2018-10-14");

const deviceArr=[];
var options={
    url : `https://api.dexcell.com/v3/locations/?limit=500`,
    headers: {
        'x-dexcell-token' :"c0fd279531e5ab806330",
        "Accept": "application/json"
    }
}
request(options, function(error, response, body) {
    const data = JSON.parse(body);
    parsingObj(data,fromDate,toDate);
});

