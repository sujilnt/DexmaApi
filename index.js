var request = require("request");

var options={
 url : `https://api.dexcell.com/v3/locations/`,
 headers: {
     'x-dexcell-token' :"c0fd279531e5ab806330",
     "Accept": "application/json"
   }
}
request(options, function(error, response, body) {
    console.log(body);
    console.log(error);
});
// Working of Dexma APi
