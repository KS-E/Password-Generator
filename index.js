let array =
  "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*abcdefghijklmnopqrstuvwxyz"; //character list
// let set = []; // array to store 4 random passwords
const lengthEl = document.getElementById("span"); //variable for obtaining input tag
const first = document.getElementById("pass1");
const second = document.getElementById("pass2");
const third = document.getElementById("pass3");
const fourth = document.getElementById("pass4");
// let j = 0; // to keep track of the set of passwords to be displayed (4)
//function for genarating 4 passwords
const gen = document.getElementById("generation");

gen.addEventListener("click", function () {
  generatePass();
});

function generatePass() {
    console.log("Entry")
     let j=0; 
     let set=[];
     const lp = lengthEl.value; //storing inputted password length    
    console.log(lp);
     while (j < 4 && lp != 0) {
    // console.log(j);      
    let password = []; //one random password
    for (let i = 0; i < lp; i++) {
      let k = Math.floor(Math.random() * array.length);
      password += array.substring(k, k + 1);
    }
    set.push(password); 
    j++; //1,2,3,4
   console.log(set);
  }
 
  first.innerHTML = set[0];
  second.innerHTML = set[1];    
 third.innerHTML = set[2];    
 fourth.innerHTML = set[3]; 
   lengthEl.value = " ";
}


