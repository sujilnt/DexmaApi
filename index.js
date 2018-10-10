const fetch =require("node-fetch");

  const fetchdata={
  headers:{
    'Content-Type': 'application/json;charset=UTF-8',
    'x-dexcell-token': 'cff216bbcfc55e1d5820',
  }
    };
fetch("http://api.dexcell.com/v3/locations/#4/tags",fetchdata).then(function (data){
  console.log("data",data);
});
