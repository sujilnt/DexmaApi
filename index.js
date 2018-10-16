const {parsingObj} = require("./parsingObjects.js");
const {convertDate} = require("./utils.js");
const {requestFunc}= require("./requestFunc.js");
// convert date into ISO Format
const fromDate = convertDate("2018-10-07");
const toDate = convertDate("2018-10-14");

// url format
const _url= `https://api.dexcell.com/v3/locations/?limit=500`;
requestFunc(_url,fromDate,toDate,parsingObj);

