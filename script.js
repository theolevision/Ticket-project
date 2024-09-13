const button = document.getElementById('myButton');  
let myMessage = document.getElementById('myMessage');  


function effectFade() {
    myMessage.innerHTML = "Você pegou seu ticket!";  
    myMessage.style.opacity = "1";  
    myMessage.classList.remove('fade-out');   
    setTimeout(() => myMessage.classList.add('fade-out'), 1500);
}

button.addEventListener("click", effectFade);


if (window.getComputedStyle(myMessage).getPropertyValue('opacity') == 0) {
    effectFade(); 
}

