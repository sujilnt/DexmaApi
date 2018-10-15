const numberFormatter = (number)=>{
    return (Math.round(number*100)/100).toFixed(2);
};
module.exports.numberFormatter=numberFormatter;

// console.log(numberFormatter("48109.09999999999")); // 48109.10