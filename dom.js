// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText = "Hello"


// let x = [...ele];
// console.log(x, Array.isArray(x))
// x.map(element=>{
//     element.style.backgroundColor="violet"
// })


// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// })

// const divs = document.querySelectorAll('div');


// divs.forEach(div => {

//     div.addEventListener('mouseover', () => {
//         div.style.backgroundColor = div.textContent;
//     });
//     div.addEventListener('mouseleave', () => {
//         div.style.backgroundColor = ''; 
//     });
// });


// let ele = document.createElement("h1");
// ele.innerText = "Dynamic";
// // ele.setAttribute("id", "demo");
// ele.id = "demo";
// // console.log(ele);

// let image = document.createElement("img");
// image.src = "https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image);

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log("form submitted");
//     let uname = username.value;
//     let uemail = mail.value;
//     let upass = psw.value;
//     let userDetails={
//         uname, uemail, upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))

// })

// let video = document.createElement("video");
// video.setAttribute("src", "")
// console.log(video);

let mainEle = document.createElement("div");
mainEle.setAttribute("id", "mainBlock");
mainEle.style.border="2px solid black";
mainEle.style.width="1000px";
mainEle.style.height="1000px";

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");
// console.log(topEle);

let image = document.createElement("img");
image.src = "https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP";
image.style.width="1000px"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class", "bottomBlock");


let h1 = document.createElement("h1");
h1.innerText = "MAGIC";
h1.style.textAlign= "center";

let btn = document.createElement("button");
btn.innerText="View More";
btn.style.border="none";
btn.style.padding="20px";
btn.style.backgroundColor="dodgerblue";
btn.style.color="white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);

