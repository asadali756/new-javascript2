//ARRAYS

let cricket = ["BABARAZAM", "MAXWELL", "SMITH", "HALES", "RIZWAN"]
console.log(cricket);
console.log(cricket.length);



console.log(cricket.push("KHOLI"));
console.log(cricket);


console.log(cricket.pop());
console.log(cricket);


console.log(cricket.unshift("FAKHAR ZAMAN"));
console.log(cricket);


console.log(cricket.shift());
console.log(cricket);


//HIDEN SELECT VALUE

console.log(cricket.slice(1,4));


//TABLE FOR LOOP


let number = prompt("ENTER YOUR NUMBER");
for(let i=1; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`);
}

let userNum = prompt("enter nmber");
for(let m=0; m<=userNum; m++){
    if(m%2== 0){
        console.log(`${m} is even`);
    }else{
        console.log(`${m} is Odd`);
    }
}