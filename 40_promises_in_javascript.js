// promises means the javascript code that whould not run now but will run in future

//promise is an object that represents the eventual completion or failure of an asynchronous operation 

// how to prepare promise rather than consume 

const promiseOne = new Promise(function(resolve,reject){     // it take two arguments resolve and reject 
    // do an async task
    // DB calls , cryptography, network 

    setTimeout(function () {
        console.log('Async taks is complete')
        resolve()               // this is the method used to resolve .then and resolve
    }, 1000);
})

// .then method is directly connected to resolve method 
//new resolve method passes the value to the .then function 

promiseOne.then(function(){                 // it takes one callback function 
    console.log("Promsie consumed")
})




//let create a new promise 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
        resolve()
    },10000)
}).then(function(){
    console.log("Async task 2 is resolved")
})


// let create a new promise 

new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("promise 3 completed")
        resolve({username: "mahesh raut ", userEmail: "rautmahesh213@gmail.com"})
    }, 1000);
}).then(function(user){
    console.log(user);
})


// let create 4th promise 

