const form = document.querySelector('form')

// in html the form is submitted by get or post and the inputted values goes to the server
// in this case we are not using any server 
// so we have to stop it from going to the server  
// stop the input action 

// add the eventlistener submit 

form.addEventListener('submit', function(e){
    e.preventDefault()  // it will prevent  the form going to the server after clicking the submit button 

    const height = parseInt(document.querySelector('#height').value)  // cause value will be in string initially 
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}` 
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}` 
    }

    else {                // calculate the BMI
        const BMI = (weight / ((height * height) /10000)).toFixed(2);

        //show the results 
        
        results.innerHTML = `<span> ${BMI} </span>`
    }
})