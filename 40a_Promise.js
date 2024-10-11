 let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:"mahesh",password:"123"})
        }
        else{
            reject("ERROR: Something went wrong!!")  //it will make connection to catch section
        }
    },1000)
 })

 promiseFour.then((user) => {
    console.log(user);
    return user.userName   // it will return the userName to the next then 
 })
 .then((userName)=>{
    console.log(userName)
 })
 .catch((error) => {
    console.log(error)     // it will handle the all errors   
 }).finally(()=>{
    console.log("the promise is resolved or rejected ")  
 })              // it is the code which runs for sure 

 