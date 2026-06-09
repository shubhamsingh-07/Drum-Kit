var numberOfDrums = document.querySelectorAll(".drum").length;



    document.addEventListener("keydown" , function(myData){
        var buttonInnerHTML = myData.key;                  //using Keyboard press
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
);

    
for( var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){

        var buttonInnerHTML = this.innerHTML;              // using button click
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    );
}

    function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var bass = new Audio('./sounds/kick-bass.mp3');
            bass.play();
            break;  
        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play(); 
            break;
            
            default:console.log(buttonInnerHTML);
}
    }
    function buttonAnimation(buttonInnerHTML){
        var activeButton = document.querySelector("."+ buttonInnerHTML);
        activeButton.classList.add("pressed");
        
        setTimeout (function(){
            activeButton.classList.remove("pressed")
        } , 500);
        
    }
