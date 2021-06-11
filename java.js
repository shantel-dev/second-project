var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var akanMale = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
 
var month = parseInt(document.getElementById("month").nodeValue);
var year = parseInt(document.getElementById("year").nodeValue);
var day = parseInt(document.getElementById("day").nodeValue);
var dateOfBirth = new Date(year + "/" + month + "/" + day);
var results = dateOfBirth.getDay();
var output = document.getElementById("output");
var male = document.getElementById("male")
var female = document.getElementById("female")

if (month =="" && year =="" && day =="") {
    alert("PLease Fill The Form")
    return false;
}













