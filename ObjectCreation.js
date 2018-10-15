const {consumption} = require("./consumption");
const ObjectCreation=(obj, fromDate,toDate)=>{
   const {name,id,reference_devices}=obj;
    const Obj = {};
    Obj.name= name;
    Obj.id=id;
    Obj.reference_devices=reference_devices;
    reference_devices.length ? reference_devices.map((row)=>{
        console.log("inside console",row);
        consumption(row.id,fromDate,toDate);
    }): "";
    return Obj;

};
module.exports.ObjectCreation= ObjectCreation;


