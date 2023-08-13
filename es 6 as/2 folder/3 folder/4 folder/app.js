////////////hoisting//////////////////
function printVariableValue() {
    var myVar = "Hello, world!";
    console.log(myVar);
  }
  
  printVariableValue();
  
  console.log(myVar); 
  //////////////////////
  function printVariableValue() {
    const myConstVar = "Hello, world!";
    console.log(myConstVar);
  }
  
  printVariableValue(); 
  
  console.log(myConstVar); 
  ///////////////////////////////
  sayHello();

function sayHello() {
  console.log("Hello!");
}

  
  