// function to get day of the week born
var DOB = "January 25, 2002";
function dayOfTheWeek(birthday){
    d = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD) %7
    console.log(d);
}

dayOfTheWeek();


