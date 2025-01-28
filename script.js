function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                alert("Leap year.");
            }else{
                alert("Not leap year.");
            }
        }else{
           alert("Leap year."); 
        }
    }else{
        alert("Not leap year.");
    }
}

document.getElementById('result').addEventListener('click', () =>{
    const year = parseFloat(document.getElementById('year').value);

    leapYear(year);
});


/*function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return "Leap year.";
    }else{
        return "Not leap year.";
    }
}
*/