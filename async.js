// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // },5000)

// setInterval(()=>{
//     // document.writeln("MRU");
//     console.log(30);
// },1500)
// console.log(40);
// console.log(50);

// let p1 = new Promise((resolve, reject)=>{});
// console.log(p1);

let p2 = new Promise((resolve, reject)=>{
    resolve("success");
})
// console.log(p2);
p2
.then((response)=>console.log(response))
p2.
catch((error)=>console.log(error))
p2.
finally(()=>console.log("finally for both"))


let p3 = new Promise((resolve, reject)=>{
    reject("failure");
})
console.log(p3);
p3
.then((response)=>console.log(response))
p3
.catch((error)=>console.log(error))
p3
.finally(()=>console.log("finally for both"))
