const {consumption} = require("./consumption");
const ObjectCreation=(obj, fromDate,toDate)=>{
   const {name,id,reference_devices}=obj;
   const referenceVal=[];
    const Obj = {};
    Obj.name= name;
    Obj.id=id;
    Obj.reference_devices=reference_devices;
    reference_devices !== undefined ? reference_devices.map((row)=>{
        let obj={};
        if(row.type==="MAINSUPPLY" ){
            obj.type= row.type;
            consumption(name,row.device.id,fromDate,toDate,row.type);
        }
    }): "";
    return Obj;

};
module.exports.ObjectCreation= ObjectCreation;


