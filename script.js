const text = document.querySelector('.big-text')
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer= null;
}

// function for hamburger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
burger.addEventListener('click', () =>{
    // Toggle nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });
    //Burger animation
    burger.classList.toggle('toggle')
});
    
    

}

navSlide();