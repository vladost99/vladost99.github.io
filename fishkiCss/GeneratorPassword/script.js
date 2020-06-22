let password = document.querySelector('#Password'),
    btnGenerate = document.querySelector('#btn');

 function generatePassword() {
     let passwcollect = "";
     let collectSymbol = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()<>][{}|:?.,";
     for(let i = 0; i < 10; i++) {
        passwcollect += collectSymbol[Math.floor(Math.random()* collectSymbol.length)];
     }
     password.value = passwcollect;
 }
 btnGenerate.addEventListener("click",generatePassword);





