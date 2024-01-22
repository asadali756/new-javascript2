let username = prompt ("ENTER YOU'RE NAME")
console.log(username);

let math = parseInt(prompt("ENTER YOUR MATH NUMBER"))
let physics = parseInt(prompt("ENTER YOUR PHYSICS NUMBER"))
let english = parseInt(prompt("ENTER YOUR ENGLISH NUMBER"))
let islamiat =parseInt( prompt("ENTER YOUR ISLAMIAT NUMBER"))
let urdu = parseInt(prompt("ENTER YOUR URDU NUMBER"))

let obtainemarks = math + physics + english + islamiat +urdu;
let percentage = obtainemarks/500*100;
console.log(percentage);


if (percentage>=90 && percentage<=100){
    console.log("YOU ARE GRADE IS A + 1");
} 
else if (percentage>=80 && percentage<=90){
    console.log("YOU ARE GRADE IS A ");
} 
else if (percentage>=70 && percentage<=80){
    console.log("YOU ARE GRADE IS B");
} 
else if (percentage>=60 && percentage<=70){
    console.log("YOU ARE GRADE IS C");
} 
else if (percentage>=50 && percentage<=60){
    console.log("YOU ARE GRADE IS D ");
} 
else if (percentage>=40 && percentage<=50){
    console.log("YOU ARE FAIL ");
} 