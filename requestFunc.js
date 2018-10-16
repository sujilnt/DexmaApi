const request = require("request");
const requestFunc= (url,fromDate,toDate,callback)=>{
    const _url = url;
    const options={
        url : _url,
        headers: {
            'x-dexcell-token' :"c0fd279531e5ab806330",
            "Accept": "application/json"
        }
    };
    request(options, function(error, response, body) {
        const data = JSON.parse(body);
        callback(data,fromDate,toDate);
    });
};
module.exports.requestFunc = requestFunc;