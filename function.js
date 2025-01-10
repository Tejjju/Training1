// //function demo(a,b){
//     return a+b;
// };
// let x = demo(5,5);
// console.log(x);


// let y =(a,b)=> a+b;
// let a = y(10,20);
// console.log(a);

// let z =(a,b)=>{return a+b};
// let b = z(10,100);
// console.log(b);



// function hof(a){
//     return a;
// }
// let c = hof(function(){return "Hello I am a callback function"});
// console.log(c);



// function parent(callback){
//     return callback;
// }
// let d=parent(add(5,5));
// console.log(d);
// function add(a,b){
//     return a+b
// }
// console.log(add(5,5));



for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        
        document.writeln("*")
        
    }
    document.write("<br>")
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>=j){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j == 6 ){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;&nbsp;&nbsp")

        }
    }
    document.write("<br>")
}