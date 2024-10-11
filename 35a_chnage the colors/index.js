const buttons = document.querySelectorAll(".button")
console.log(buttons);

const body = document.querySelector("body");
console.log(body);

// buttons is node list so we can apply for each loop on node list

buttons.forEach(function(button){   // it will take each item as buttons from the node list buttons and will display on the console
    console.log(button)

    button.addEventListener('click',function(e){ // it will listen the event click on each of the buttton and will display on the screen
        console.log(e);
        console.log(e.target);   // it will tell from where event is listened 

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }1
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
        
        
    })
});