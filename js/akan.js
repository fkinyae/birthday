let CC, YY, MM, DD, d, dayValue;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw",  "Kofi",  "Kwame"];
let females = ["Akosua",  "Adwoa",  "Abenaa",  "Akua", "Yaa", "Afua", "Ama"];

function getValidation() {
    let genders = document.getElementsByName("gender");
    if (document.myForm.date.value == "" || isNaN(document.myForm.date.value) || document.myForm.date.value.length !=2 || document.myForm.date.value >31 || document.myForm.date.value <= 0) {
        alert("please provide a valid date!");
        document.myForm.date.focus();
        return false;
    } 
    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || document.myForm.month.value.length !=2 || document.myForm.month.value > 12 || document.myForm.month.value <= 0) {
        alert("please provide a valid month of birth");
        document.myForm.month.focus();
        return false;
    }
    else if (document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >3000 || document.myForm.year.value <=1700) {
        alert("please enter a valid year of birth eg.2003");
        document.myForm.year.focus();
        return false;
    }
    else if (genders[0].checked==false && genders[1].checked==false) {
        alert("You must choose atleast one gender");
    } 
    else {
        return true;
    }
    
}

function getDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (d.toFixed());
  }


function getGender() {
    let genders = document.getElementsByName("gender");
    let dayValue = getDayValue();

    if (genders[0].checked==true && males[dayValue] && days[dayValue]) {
        let gender_value = "male";
        alert("Your Akan Name is " + males[dayValue] + " & You were Born On a " + days[dayValue])
    } else if (genders[1].checked==true && females[dayValue] && days[dayValue]) {
        let gender_value = "female";
        alert("Your Akan Name is " + females[dayValue] + " & You were Born On a " + days[dayValue])
    }
    else {   
        return false;
    }   
}


