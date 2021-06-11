var submission = function (){

    event.preventDefault();

    

  var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var akanMale = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
 
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var dateOfBirth = new Date(year + "/" + month + "/" + day);
  document.getElementById("para").innerHTML = dateOfBirth

  var results = dateOfBirth.getDay();
  var output = document.getElementById("output");
  var male = document.getElementById("male")
  var female = document.getElementById("female")

 if (month =="" && year =="" && day =="") {
     alert("PLease Fill The Form")
     return false;
}
 if (year < 0) {
     output.style.background ="blue"
     output.style.color= "white"
     output.innerHTML = " please enter a valid year! "
}

    
 else if ((month < 1) || (month > 31)) {
     output.style.background ="blue"
     output.style.background ="white"
     output.innerHTML = "please enter a valid month!"
 }

 else if ((day < 0 ) || (day > 31)) {
    output.style.background ="blue"
    output.style.background ="white"
    output.innerHTML = "please enter a valid day!"

 }
 if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    output.style.background ="yellowgreen"
      output.innerHTML = "You were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
   
      
  }
  else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    output.style.background ="yellowgreen"
    output.innerHTML = " You were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
}

}













