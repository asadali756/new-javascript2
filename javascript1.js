let myfirstnumber = 10;
console.log(myfirstnumber);
let mysecondnumber = 20;
console.log(mysecondnumber)


//ADD TWO VALUES

let a = 10;
let b = 20;
let c = 30;
let d = a + b + c;
console.log(d);

//OBJECTS

let place = {
    "FIRST": "APTECH",
    "SECOND": "LUCKYONEMALL",
    "THIRD": "STADIUM",
}
console.log(place);

//ARRAYS

let cricket = ["SHUBMANGILL", "VIRATKHOLI", "BABARAZAM", "MAXWELL"];
console.log(cricket)

//VALUE KO LAST MEIN ADD KRDEYGA!

console.log(cricket.push("ROHITSHARMA"))
console.log(cricket)


//LAST INDEX SY VALUE KO REMOVE KRDEYGA!

console.log(cricket.pop())
console.log(cricket)

//FIRST INDEX MEIN VALUE KO ADD KRDEYGA!


console.log(cricket.unshift("RIZWAN"));
console.log(cricket);

//FIRST INDEX SY VALUE KO REMOVE KRDEYGA!

console.log(cricket.shift());
console.log(cricket);

console.log(cricket[2])
console.log(cricket[3]);
console.log(cricket.length)

let q = 70;
let r = 2;
console.log("THE SUM OF Q & R", q + r);
console.log("THE SUB OF Q& R", q - r);
console.log("THE DIVIDE OF Q & R", q / r);
console.log("THE MULTIPLY OF Q & R", q * r);

//LOGICAL OPERATORS
// console.log(true && true); //TRUE
// console.log(true && false); //FALSE
// console.log(false && true); //FALSE
// console.log(false && false); //FALSE
// console.log(true && true); //TRUE


//LOGICAL OPERATORS OR CASE

// console.log(true || true); //TRUE
// console.log(true || false); //TRUE
// console.log(false || true); //TRUE
// console.log(false || false); //FALSE
// console.log(true || true); //TRUE

//COMPARISON OPERATOR!

// let x = 10;
// let y = 20;
// console.log(a==b); //FALSE
// console.log(a>=b); //FALSE
// console.log(a<=b); // TRUE
// console.log(a>b); //FALSE
// console.log(a<b); //TRUE

//FOR LOOP!
for (q = 0; q <= 100; q++) {
    console.log("SORRY", q);
}

//WHILE LOOP

let s = 45;
while (s <= 55) {
    console.log("this is while loop", s);
    s++;
}

//DO WHILE LOOP!

let m = 28;
do {
    console.log("OKAY!", m);
    m++;
} while (m <= 35);


//TABLE!

// for (w=1; w<=10; w++){
//     console.log("10 x", w,"=", 10 * w);
// }

function happy() {
    console.log("This is a Happy!");

}
happy();
happy();

//FUNCTION WITH PARAMETERS

function sum(a, b) {
    return a + b;
}
let getsum = sum(18, 20);
console.log(getsum);

function match(firstname, lastname, age) {
    return firstname + " " + lastname + "" +
        age;
}
let tree = match("BABAR", "AZAM", "19");
console.log(tree);

//CONDITIONAL STATEMENT

// let age = 20;
// if(age>=20){
//     console.log("You can drive a car");
// }else{
//     console.log("You can not drive a car");

// }

// let getvalue = prompt ("ENTER YOU'R VALUE!");
// if (getvalue>=25){
//     console.log("You can go for shopping");

// }else if(getvalue>=15){
//     console.log("You can go for shopping with mother");
// }else{
//     console.log("YOU can not go for shopping with mother");
// }

// let percentage = prompt ("ENTER YOUR MARKS");

// if (percentage >= 90 && percentage <= 100) {
//     document.write("Your Grade is A+1");
// }

// else if (percentage >= 80 && percentage <= 90) {
//     document.write("Your Grade is A");
// }

// else if (percentage >= 70 && percentage <= 80) {
//     document.write("Your Grade is B");
// }

// else if (percentage >= 60 && percentage <= 70) {
//     document.write("Your Grade is C");
// }
// else if (percentage >= 50 && percentage <= 60) {
//     document.write("Your Grade is D");
// }
// else if (percentage >= 40 && percentage <= 50 ) {
//     document.write("YOU ARE FAIL");
// }


//NESTED IF!


let age = prompt("ENTER YOU'RE AGE!");
let cnic =true;
if(age>=18){
    document.write("YOU ARE NOT ELIGIBLE FOR VOTING!");
    if(cnic==true){
        document.write("<h2>YOU CAN CASTE YOU VOTE</h2>")
    }
}else{
    document.write("YOU ARE NOT ELIGLIBLE FOR SYSTEM!");
}


//NESTED LOOP!

for (z=1; z<=15; z++){
    for(y=1; y<=z; y++){
        document.write(y);
    }
    document.write("</br>")

}
document.write("* </br>")
document.write("**</br>")
document.write("*** </br>")
document.write("**** </br>")
document.write("***** </br>")
