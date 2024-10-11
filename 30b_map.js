const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((nums) => {   //modifies the existing array
    return nums + 10
})

console.log(newNums)

const newNum = myNumbers.map((num) => num * 10)                //chaining 
                          .map((num) => num +1)
                          .filter((num) => num > 40)

console.log(newNum)


