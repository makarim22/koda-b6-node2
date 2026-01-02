var moment = require('moment'); // require

var day = moment()

console.log(day);

function convertDate(date) {
    let dateConverted = "";
    const dateNew = date.split('-').map(Number);
    // console.log(dateNew);

    if (dateNew.length !== 3) {
        console.log('format tanggal tidak valid');
        return
    } else if (dateNew[0] > 31 || dateNew[1] > 12 || dateNew[2] > 2026) {
        console.log('format tanggal tidak valid');
        return
    } else{
       dateConverted = new moment(date).format('DD/MM/yyyy')
       console.log("Tanggal baru: ", dateConverted);
       return
    }
    
}


date1 = '01-01-2026';
console.log(convertDate(date1));

date2 = '2027-01-01';
console.log(convertDate(date2));

date3 = '01';
console.log(convertDate(date3));

date4 = 1;
console.log(convertDate(date4));

date5 = '01-01-2027';
console.log(convertDate(date5));

