function userDetails(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
}
userDetails("Tejaswini",20,"Guntur");


(function(){
    console.log("IIFE");
})();


let x =_=>console.log("Arrow function");
x();

let y =()=>console.log("Hello") 
           console.log("How are you ?");
y();

let u =()=>{console.log("Hello") 
           console.log("How are you ?");};
u();

let z =(a,b)=>console.log(a+b);
z(5,4);

let n =(a,b)=>console.log(a+b);
n(5);



  
  
 
  function printCustomPattern(rows, cols) {
      let pattern = "";
      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              pattern += "*  ";
          }
          pattern += "\n";
      }
      console.log(pattern);
  }
  printCustomPattern(5,5);
  

  function printTrianglePattern(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) { 
      for (let j = 1; j <= i; j++) { 
        pattern += "* ";
      }
      pattern += "\n"; 
    }
    console.log(pattern);
  }
  
  printTrianglePattern(5);


  function printDiagonalPattern(size) {
    let pattern = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === j || i + j === size - 1) {
          pattern += "* ";
        } else {
          pattern += "  "; 
        }
      }
      pattern += "\n";
    }
    console.log(pattern);
  }
  

  printDiagonalPattern(5); 
   
