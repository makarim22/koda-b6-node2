var moment = require('moment'); 

function convertDate(date) {
    let dateConverted = "";

    if (typeof date !== 'string') {
        console.log('Harus berupa string'); 
        return; 
    }

    const dateNew = date.split('-').map(Number); 

    if (dateNew.length !== 3 || isNaN(dateNew[0]) || isNaN(dateNew[1]) || isNaN(dateNew[2])) {
        console.log('Format tanggal tidak valid');
        return;
    }
    
    const [day, month, year] = dateNew; 


    if (day < 1 || day > 31 || month < 1 || month > 12 ) {
        console.log('Format tanggal tidak valid');
        return;
    }
    
    dateConverted = moment(date).format('DD/MM/YYYY');
    // console.log("Tanggal baru: ", dateConverted);
    return dateConverted; 
}


// const date1 = '01-01-2026';
// console.log(convertDate(date1)); 

// const date3 = '01';
// console.log(convertDate(date3)); 

// const date4 = 1; 
// console.log(convertDate(date4)); 

const date4 = true; 
console.log(convertDate(date4)); 

// const date5 = '01-01-2027';
// console.log(convertDate(date5)); 
