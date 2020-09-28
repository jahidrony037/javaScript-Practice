function leapYear(year){
    
    const remainder = (year %4 ===0 && year %100 != 0 || year % 400 ===0 );
    console.log(remainder);

    if(remainder == true){
       console.log("This year is leap Year");
    }
    else{
       console.log("This year is not leap Year");
    }

}

let checkYear = leapYear(2020);