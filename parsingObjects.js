var {ObjectCreation}= require("./ObjectCreation");
const parsingObj=function(body,fromDate,toDate){
    const arrayOfDevices=[];
    console.log(body,fromDate,toDate);
    body.length? body.forEach((row)=>{
        arrayOfDevices.push(ObjectCreation(row,fromDate,toDate));
    }): "nothing" ;
    return arrayOfDevices;
};
module.exports.parsingObj=parsingObj;