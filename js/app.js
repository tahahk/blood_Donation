var userEmail = document.getElementById('inputEmail');
var userPass = document.getElementById('inputPassword');
var userFirstName = document.getElementById('inputFirstName');
var userLastName = document.getElementById('inputLastName');
var usercell = document.getElementById('inputCellNumber');
var userCity = document.getElementById('inputCity');

document.getElementById("defaultRes").addEventListener("submit", function (event) {
var genderBtn = document.getElementsByName('gender')
    for(var i=0; i < genderBtn.length; i++){
        if(genderBtn[i].checked === 'male'){
            console.log(genderBtn[i].value)
        }
            if(genderBtn[i].checked === 'female'){
            console.log(genderBtn[i].value)
        }
    }
})
