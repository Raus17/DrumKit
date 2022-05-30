// document.querySelector("button").addEventListener("click",handleclick)

//we are not using handleclick() because if we use this the function will trigger as soon as it gets readed
//we dont want that , we want when we click the button the function got triggered


function handleclick() {
    // alert("i got clicked");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

// anonymous function

var numDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<numDrums;i++){
    // the purpose of making loop,queryselecter binds the class or anything and presented you as an array
    // so ,if we want to access the .drums elemets ,we have to use a loop who can wrap is around
    // ex - querySelectorAll("drum")[2] == it will going to access the second elemet the drum class
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
         
        // it will refer to when the button is going to be clicked
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// var buttonInnerHTML = this.innerHTML;

// switch (buttonInnerHTML) {
//     case "w":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;

//     default:
//         break;
// }

// when key will press it will come here , and checks the key belong to which audio
// it will trigger the event
document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

// when the key is pressed it will come here,and check the kiss
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds\crash.mp3");
            audio.play();
            break;
    
            case "a":
            var audio = new Audio("sounds\kick-bass.mp3");
            audio.play();
            break;
    
            case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
            case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
            case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
    
            case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
    
            case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation (currentKey){

     var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}