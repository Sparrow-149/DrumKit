
const audio1 = new Audio("sounds/tom-1.mp3");
const audio2 = new Audio("sounds/tom-2.mp3");
const audio3 = new Audio("sounds/tom-3.mp3");
const audio4 = new Audio("sounds/tom-4.mp3");
const audio5 = new Audio("sounds/crash.mp3");
const audio6 = new Audio("sounds/kick-bass.mp3");
const audio7 = new Audio("sounds/snare.mp3");


document.addEventListener("keydown", (e) => {
    switch(e.key){
        case "w":
        case "W":
            audio1.play();
            buttonAnimation(e.key);
            break;
        case "a":
        case "A":
            audio2.play();
            buttonAnimation(e.key);
            break;
        case "s":
        case "S":
            audio3.play();
            buttonAnimation(e.key);
            break; 
        case "d":
        case "D":
            audio4.play();
            buttonAnimation(e.key);
            break;
        case "j":
        case "J":
            audio5.play();
            buttonAnimation(e.key);
            break;
        case "k":
        case "K":
            audio6.play();
            buttonAnimation(e.key);
            break;
        case "l":
        case "L":
            audio7.play();
            buttonAnimation(e.key);
            break;
    }
});


document.querySelector(".w").addEventListener("click", () => {
    audio1.play();
    buttonAnimation("w");
});
document.querySelector(".a").addEventListener("click", () => {
    audio2.play();
    buttonAnimation("a");
});
document.querySelector(".s").addEventListener("click", () => {
    audio3.play();
    buttonAnimation("s");
});
document.querySelector(".d").addEventListener("click", () => {
    audio4.play();
    buttonAnimation("d");
});
document.querySelector(".j").addEventListener("click", () => {
    audio5.play();
    buttonAnimation("j");
});
document.querySelector(".k").addEventListener("click", () => {
    audio6.play();
    buttonAnimation("k");
});
document.querySelector(".l").addEventListener("click", () => {
    audio7.play();
    buttonAnimation("l");   
});


function buttonAnimation(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    } ,100);
}