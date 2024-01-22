// let grade = parseInt(prompt("ENTER YOUR GRADE"))



//TURNARY OPERATION

let resullt = grade === "A" && per === 90 || grade === "B" && per === 80 || grade === "C" && per == 70 || grade === "D" && per === 60 ? "PASS" : "FAIL";
console.log(resullt);
function hello (){
    console.log("abc");
}
hello()
hello()




function person (name , age ,grade){
    return name + "" + age + "" +grade ;

}
let myValues = person ("abc", "15", "b");


function sum (a,b){
    console.log(`THE SUM OF A + b ${a+b}`);
}
sum(50,25)


let gameNum = 85;
let userNum =prompt("ENTER YOUR NUMBER")
while(userNum!= gameNum){
    userNum = prompt("YOUR GUESS THE WRONG NO: GUESS AGAIN!")
}

Swal.fire({
    title: "gAME aLERT!",
    text: "you win the game",
    timer: "5000"
  });


