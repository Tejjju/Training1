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
