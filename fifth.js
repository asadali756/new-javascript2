// let num =15;
// while(num<=20){
//     console.log("THIS IS WHILE LOOP!", num);
//     num++
// }


// let a =50;
// do{
//     console.log("THIS IS DO WHILE LOOP", a);
//     a++
// } while (a<49)


let heroes =["Super Man" , "Bat Man" , "Hulk" , "Spider Man" , "Iron Man" , "Falcon"];
console.log(heroes);
// ARRAYS ARE MUTABLE
heroes[5] = "AQUA MAN";
console.log(heroes);
//  SPLICE METHOD first index ko target krky ussy pehly likhta h
console.log(heroes.splice(2,1,"WHY MAN" , "ACHA MAN"));
console.log(heroes);


let bbq = ["Tikka" , "Chargha" , "Malai Boti" , "Seekh Kabab" , "Chapli Kabab"];
let seaFood = ["Fish" , "Prawns" , "Lobster"];
let sweetDish = ["Custard" , "Gulab Jamun" , "Jelly" , "Ice Cream"]

let menu = bbq.concat(seaFood , sweetDish);
console.log(menu);
