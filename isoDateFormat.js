const convertDate= (dateInput)=>{
    const dateInISO = new Date(dateInput).toISOString().replace(/[(:)]/g ,"%3A").split(".")[0];
    return dateInISO;
};
module.exports.convertDate= convertDate;