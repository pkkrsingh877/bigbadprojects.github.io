//create needed constants

const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

//Stop form from being submitted when the submit button is pressed

form.addEventListener('submit', function(e){
    e.preventDefault();
});

// run function when say hello button is clicked

submitBtn.addEventListener('click', function(){
    localStorage.setItem('name',nameInput.value);

    nameDisplayCheck();
});

// forget the user if the forget button is clicked

forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('name');

    nameDisplayCheck();
});


// now we define nameDisplayCheck() function 

function nameDisplayCheck(){
    if(localStorage.getItem('name')){
        let name = localStorage.getItem('name');
        h1.textContent = "Welcome, " + name;

        personalGreeting.textContent = "Welcome to our website " + name + "! We hope you have fun while you are here.";

        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';

    }else{
        h1.textContent = 'Welcome to our website';
        personalGreeting.textContent = 'Welcome to our website. We hope you\'re having a blast.';

        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}


// to make name persist

document.body.onload = nameDisplayCheck();
