const request = require("request");
const consumption=function(name,deviceID,fromDate,toDate,type,params="D"){
    console.log(name,name,deviceID,fromDate,toDate,type,params="D");
     url_api = `http://api.dexcell.com/v3/cost/electrical/consumption?device_id=${deviceID}&from=${fromDate}to=${toDate}=${params}`;
    let ur1= "http://api.dexcell.com/v3/cost/electrical/consumption?device_id=424947&from=2018-10-01T00:00:00&to=2018-10-14T23:59:59&resolution=M";
    let ur2="http://api.dexcell.com/v3/readings?device_id=423158&operation=DELTA&parameter_key=EACTIVE&resolution=D&from=2018-10-01T00:00:00&to=2018-10-14T23:59:59​";
    const urlll= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=EACTIVE&resolution=D&operation=DELTA`;
     let t1="http://api.dexcell.com/v3/readings?from=2018-10-07T00%3A00%3A00&to=2018-10-15T00%3A00%3A00&device_id=423158&parameter_key=EACTIVE&resolution=D&operation=DELTA";
     let t2= "http://api.dexcell.com/v3/readings?from=2018-10-06T23%3A00%3A00&to=2018-10-14T00%3A00%3A00&device_id=433267&parameter_key=EACTIVE&resolution=D&operation=DELTA";
    console.log(urlll);
    const options={
        url : urlll,
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
            console.log(row.v);
            sum+=row.v;
        }): "";
        console.log(data);
        console.log(name,sum,type);
    });
};
module.exports.consumption = consumption;