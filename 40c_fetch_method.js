fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return  response.json()
})
.then((data) => {              //when parent then have return statement then child then have to define 
    console.log(data)
})
.catch((error) => console.log("Error: ", error))