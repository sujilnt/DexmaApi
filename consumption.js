const electricityConsumption=function(deviceID,fromDate,toDate,params){
     url = `http://api.dexcell.com/v3/cost/electrical/consumption?device_id=${deviceID}&from=${fromDate}to=${toDate}=${params}`;
    console.log(url, "url");
    const options={
        url : `https://api.dexcell.com/v3/locations/?limit=500`,
        headers: {
            'x-dexcell-token' :"c0fd279531e5ab806330",
            "Accept": "application/json"
        }
    }
    request(options, function(error, response, body) {
        const data = JSON.parse(body);
        console.log(parsingObj(data));
    });
    return url;
};
module.exports.electricityConsumption = electricityConsumption;
