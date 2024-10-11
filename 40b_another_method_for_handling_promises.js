// this is the method for handling the promises

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"mahesh",password:"123"})
        }

        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    // it is the syntax for reutrning the result for our promise 
    const response = await promiseFive
    console.log(response)
}

consumePromiseFive()

 console.log("\n")

//another function for handling the same function using try and catch block

async function consumePromiseFiveN(){
    try{
        const response = await promiseFive
        console.log(response);
    }

    catch(error){
        console.log(error)
    }
}

consumePromiseFiveN()

