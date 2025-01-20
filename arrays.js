let users = ["Tej", "Siddhu", "Vaishali", "Sathwika", "Preeth", "NTR"]
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])
// console.log(users[4])
// console.log(users[5])
// for(let i =0 ; i<users.length; i++){
//     console.log(users[i]);
// }
// let x = users.map((user)=>{
//     // console.log(user);
//     // return user;
// });
// console.log(x);

//  let x = users.forEach((user)=>{
//      // console.log(user);
//      return user;
//  });
//  console.log(x);

//  let userDetails= {
//     name: "Teju",
//     age: "19",
//     company: "Google",
//     salary: "234561789",
//     details:function(){
//         return `My name is ${this.name} and I am working in ${this.company}`
//     }
//  }
//  console.log(userDetails);

//  let userDetails = [
//     {
//         name: "Teju",
//         city: "Guntur"
//     },
//     {
//         name: "Siddhu",
//         city: "Ramachandrapuram"
//     },
//     {
//         name: "Vaishali",
//         city: "Armoor"
//     },
//     {
//         name: "Sathwika",
//         city: "Warangal"
//     }
//  ]
//  console.log(userDetails)
//  console.log(userDetails[3].city)
let userDetails ={
    name: "Tej",
    age: "19",
    city:"Hyd"
};
console.log(userDetails);

let x =JSON.stringify(userDetails);
console.log("JSON object "+x);

let y = JSON.parse(x);
console.log(y);