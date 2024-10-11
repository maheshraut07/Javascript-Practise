// Immediately Invoked Function Expressions (IIFE)

// to minimize the global scope 

(function chai(){
    console.log("database connected")   // named IIFe
})();  // semicolon is need to end the function 

//syntax ()()


( () => {
    console.log("hii mahesh here")
})();

( (name) => {
    console.log(` hII ${name} here`)
}) ("mahesh");
