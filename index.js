const fetch =require("node-fetch");
const token="8f0015f3e2df912582c8";
const AppId="9760a8b42968dc9790e1";
const permenanent_token= "cff216bbcfc55e1d5820";
const AppSecret="ed3d5f61298bc31f31f7";
const url = `https://api.dexcell.com/v3/oauth/access-token?temp_token=${token}&secret=${AppSecret}&app_id=${AppId}` ;

  const fetchdata={
   credentials: 'include',
   mode: 'cors',
  method: 'POST', // or 'PUT',
  headers:{
    'x-dexcell-token': 'cff216bbcfc55e1d5820',
  }
    };
fetch("https://optimisedbuildings.dexcell.com/devices?start=50&limit=200",fetchdata).then(function (data){
  console.log("data",data);
});

console.log(fetch);