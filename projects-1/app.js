const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
// ******************************************************************************************************************
// From here we are disabling the right click,ctrl+shift+f12,ctrl+shift+I keyboard key to hide the console from the user.
document.addEventListener("keydown", function(event) {

    if (event.key === "F12") {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault();
    }

    if (event.ctrlKey && event.key === "U") {
        event.preventDefault();
    }

});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
// =================================================================================================================
// From here we are Changing the Colour of the Background When the user clicks on the Color box 
button.forEach(function(buttons) {
    buttons.addEventListener('click' , function(e){
        if (e.target.id == "black") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if (e.target.id == "blue") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            
        }if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id;
            
        }if (e.target.id == "red") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            
        }if (e.target.id == "purple") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            
        }
    })
})
