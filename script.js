
//Detecting button press
for(var i=0; i<=6; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//Detecting keyboard press
document.addEventListener("keypress", function(event){//u ovom dijelu koda smo anonimnoj funkciji poslali event ulaz sto nak govori kada kliknemo neko dugme(desi se neki event) da nam opis tog eventa, i taj event je objekat koji sadrzi metodu koja govori koje je dugme kliknuto
    makeSound(event.key);//preko eventa dolazimo do tipke koja je kliknuta i tako provjeravamo kroz switch statement da li je da dipka definisana i moze li se napraviti zvuk pomocu nje
    buttonAnimation(event.key);
});


//Funcion that uses switch statement to add a sound to a button 
function makeSound(key){
    switch (key) {
        case "d":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                tom1.play();
            break;
        
        case "j":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                tom2.play();
            break;

        case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
        
        case "l":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
            break;
        
        case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

        case "a":
                var kick = new Audio ("sounds/kick-bass.mp3");
                kick.play();
            break;
        
        case "s":
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();
            break;

        default: alert("You need to click one of the shown key dumbfuck!");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);//stavili smo tacku jer je to nacin na koji pozivamo klasu preko querySelector-a
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);
}