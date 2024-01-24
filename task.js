


// //TURNARY OPERATION

// let grade = parseInt(prompt("ENTER YOUR GRADE"))
// let per = parseFloat(prompt("ENTER YOUR PER"))
// let resullt =  grade === "A" && per === 90 || grade === "B" && per === 80 || grade === "C" && per == 70 || grade === "D" && per === 60 ? "PASS" : "FAIL";
// console.log(resullt);
// function hello (){
//     console.log("abc");
// }
// hello()
// hello()




// function person (name , age ,grade){
//     return name + "" + age + "" +grade ;

// }
// let myValues = person ("abc", "15", "b");


// function sum (a,b){
//     console.log(`THE SUM OF A + b ${a+b}`);
// }
// sum(50,25)



let gameNum = 85;
let userNum = prompt("Enter Your Number")
while(userNum!= gameNum){
    userNum = prompt("You Guess the wrong number : GUESS AGAIN PLZ")
}
swal({
    title: "CONGRATULATIONS!",
    text: "WIN GAMES.",
    imageUrl: "images/thumbs-up.jpg"
  });


