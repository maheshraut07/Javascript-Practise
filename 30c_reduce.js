const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
}, 0)                                    //starting value of acuumulator is 0

console.log(myTotal)