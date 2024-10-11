function chai (){
    let username = "mahesh"
    console.log(this.username)  //we cant print the username inside this function by using this keyword 
}

// chai()  // it will return something because it is in the function 

const chai2 = function (){  //another method to declare the function 
    let username = "mahesh"
    console.log(this.username);
}

const chai1= () => {                // this is the arrow function 
    let username = "mahesh"
    console.log(username);
}

// chai1()
// console.log(chai1)

//syntax for arrow function = () => {}

const addTwo = (num1 , num2) => {      // explicit return 
    return num1 + num2;
}

const addTwo1 = (num1, num2) => (num1 + num2) // implicit return   

console.log(addTwo(1,2))
console.log(addTwo1(3,4))

