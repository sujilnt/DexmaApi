var {ObjectCreation}= require("./ObjectCreation");
const parsingObj=function(body,fromDate,toDate){
    const arrayOfDevices=[];
    body.length? body.forEach((row)=>{
        arrayOfDevices.push(ObjectCreation(row,fromDate,toDate));
    }): "nothing" ;
    return arrayOfDevices;
};
module.exports.parsingObj=parsingObj;