const user = {
    name : "mahesh",
    age : 22,
    message : function welcomeMessage (){
        console.log(`hii ${this.name}, how are you doing !!!`)
        console.log(this)
    }
}

console.log(this)

user.message() // this refers to the current context 
user.name = "sam"
user.message() // now this code will print the name sam instead of mahesh becaue of this keyword 



// window is the gloabal object in the browser, so it will return the whole object list if we run "console.log(this)" on the browser 
// if nothing is defined previously and we print the value of this it will return the empty object 
