const request = require("request");
const {numberFormatter} = require("./utils");
const consumption=function(name,deviceID,fromDate,toDate,type,params="D"){
   // console.log(name,name,deviceID,fromDate,toDate,type,params); // forTest purpose
    const url= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=EACTIVE&resolution=${params}&operation=DELTA`;
    //console.log(name,url);
    const options={
        url : url,
        headers: {
            'x-dexcell-token' :"c0fd279531e5ab806330",
            "Accept": "application/json"
        }
    };
    request(options, function(error, response, body) {
        let sum=0;
        const data = JSON.parse(body);
        const resultArr=data.values;
        resultArr !== undefined ? resultArr.map((row)=>{
            //console.log(row.v); // values
            sum+=row.v;
        }): "no Data round!";
        console.log(name,numberFormatter(sum),type);
        return sum;
    });
};
module.exports.consumption = consumption;