<<<<<<< HEAD
let a = 20;
let b = 140;
let c = 100;

if (a > b && a > c) {
    console.log("a is the greatest: " + a);
} else if (b > a && b > c) {
    console.log("b is the greatest: " + b);
} else {
    console.log("c is the greatest: " + c);
}






let max = Math.max(a, b, c); // Find the greatest value

switch (max) {
    case a:
        console.log("a is the greatest: " + a);
        break;
    case b:
        console.log("b is the greatest: " + b);
        break;
    case c:
        console.log("c is the greatest: " + c);
        break;
    default:
        console.log("Error in comparison.");
}
=======
// if(true){
//     console.log("If block executing");
// }
// if(false){
//     console.log("If block executing");
// }

// let age = 17;
// if(age >=18){
//     console.log("eligible for voting");
// }else{
//     console.log("Not eligible for voting");
// }

// age >= 18 ? console.log("Major"):console.log("Minor");

// let day = prompt("Enter a day here");

// if(day == 1){
//     console.log("Sun");
// }
// else if(day == 2){
//     console.log("Mon");
// }
// else if(day == 3)
// {
//     console.log("Tue");
// }
// else if(day == 4)
// {
//     console.log("Wed");
// }else if(day == 5)
// {
//     console.log("Thu");
// }
// else if(day == 6)
// {
//     console.log("Fri");
// }else if(day == 7){
//     console.log("Sat");
// }
// else{
//     console.log("Invalid Day");
// }

// let day = Number(prompt("Enter a day here"));
// console.log(day , typeof(day));

// switch (day) {
//         case 1:
//         console.log("Sun");
//         break;
//         case 2:
//         console.log("Mon");
//         break;
//         case 3:
//         console.log("Tue");
//         break;
//         case 4:
//         console.log("Wed");
//         break;
//         case 5:
//         console.log("Thu");
//         break;
//         case 6:
//         console.log("Fri");
//         break;
//         case 7:
//         console.log("Sat");
//         break;
//     default:console.log("Invalid day");
//         break;
// }

//!take 3 values and print which value is gretaer among the three values.
//! let a =20;
//! let b=140;
//! let c= 100;

//! do this with both if-else ladder and switch condition
let a = 20;
let b = 140;
let c = 100;

if (a > b && a > c) {
    console.log("a is the greatest: " + a);
} else if (b > a && b > c) {
    console.log("b is the greatest: " + b);
} else {
    console.log("c is the greatest: " + c);
}






let max = Math.max(a, b, c); // Find the greatest value

switch (max) {
    case a:
        console.log("a is the greatest: " + a);
        break;
    case b:
        console.log("b is the greatest: " + b);
        break;
    case c:
        console.log("c is the greatest: " + c);
        break;
    default:
        console.log("Error in comparison.");
}
>>>>>>> b147d387f62c94229485a7132e300150bf0e11b3
