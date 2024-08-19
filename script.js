let FirstName = document.getElementById('a1')
let LastName = document.getElementById('a2')
let Country = document.getElementById('a3')
let State = document.getElementById('a4')
let City = document.getElementById('a5')
let Village = document.getElementById('a6')
let PhoneNo = document.getElementById('a7')
            
let allAns= false;
window.onload = function() {
    if(!allAns){
        let userResponse = prompt("What's your First name?");

        localStorage.setItem("FirstName",`${userResponse}`);
    
        let userResponse2 = prompt("What's your Last name?");
    
        localStorage.setItem("LastName",`${userResponse2}`);
    
        let userResponse3 = prompt("What's your Country?");
    
        localStorage.setItem("Country",`${userResponse3}`);
    
        let userResponse4 = prompt("What's your State?");
    
        localStorage.setItem("State",`${userResponse4}`);
    
        let userResponse5 = prompt("What's your City?");
    
        localStorage.setItem("City",`${userResponse5}`);
    
        let userResponse6 = prompt("What's your Village?");
    
        localStorage.setItem("Village",`${userResponse6}`);
    
        let userResponse7 = prompt("What's your Phone no.?");
    
        localStorage.setItem("Phone",`${userResponse7}`);
        allAns= true;
    }
    updateCard();
};

function updateCard(){
    FirstName.textContent = `${localStorage.getItem('FirstName')}`;
    LastName.textContent = `${localStorage.getItem('LastName')}`;
    Country.textContent = `${localStorage.getItem('Country')}`;
    State.textContent = `${localStorage.getItem('State')}`;
    City.textContent = `${localStorage.getItem('City')}`;
    Village.textContent = `${localStorage.getItem('Village')}`;
    PhoneNo.textContent = `${localStorage.getItem('Phone')}`;
}