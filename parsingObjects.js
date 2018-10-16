var {ObjectCreation}= require("./ObjectCreation");
const parsingObj=function(body,obj){
    const {fromDate,toDate}=obj;
    const arrayOfDevices=[];
    body.length ? body.forEach((row)=>{
        arrayOfDevices.push(ObjectCreation(row,fromDate,toDate));
    }): "nothing" ;
    return arrayOfDevices;
};
module.exports.parsingObj=parsingObj;