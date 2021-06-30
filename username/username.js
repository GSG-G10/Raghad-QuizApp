document.querySelector('#ok-button').addEventListener('click', addUserToLocalStorage)

// create function to add username to local storage
function addUserToLocalStorage(){
    let username = document.querySelector('#username-input').value
    if(username){
        let userArray = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : [];
        userArray.push({
            name: username,
            score: 0
        })
        localStorage.setItem('userDetails', JSON.stringify(userArray));
        window.location.href = "..\\questions\\questions.html"
    }
    else{
        alert("please enter your name")
    }
}

document.querySelector('#cancel-button').addEventListener('click', moveToHome)

// create function to connect cancel button to home page
function moveToHome(){
    window.location.href = "..\\home\\home.html"
}