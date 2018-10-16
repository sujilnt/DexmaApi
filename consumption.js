const request = require("request");
const {numberFormatter} = require("./utils");
const {requestFunc}= require("./requestFunc.js");
const consumption=function(name,deviceID,fromDate,toDate,type,params="D"){
   // console.log(name,name,deviceID,fromDate,toDate,type,params); // forTest purpose
    const url= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=EACTIVE&resolution=${params}&operation=DELTA`;
    const requestObj={name,type};
    requestFunc(url,requestObj,totalKWH)
};

const totalKWH = (data,obj)=>{
    const {name,type}=obj;
    const resultArr=data.values;
    let sum=0;
    resultArr !== undefined ? resultArr.map((row)=>{
        sum+=row.v;
    }): "no Data round!";
    console.log(name,numberFormatter(sum),type);
    return sum;
};

module.exports.consumption = consumption;
