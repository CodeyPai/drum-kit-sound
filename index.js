

// Code to loop every box

// document.querySelectorAll("button")[0].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[1].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[2].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[3].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[4].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[5].addEventListener("click", function(){
//         alert("click")
// })
// document.querySelectorAll("button")[6].addEventListener("click", function(){
//         alert("click")
// })

// ---------------------------------------------------------------------------------------------

// Same code with "for" loop

// Select all buttons with class 'drum'
// var drumButtons = document.querySelectorAll(".drum");

// // Load the audio file

// // Loop through each button and add a click event
// for (var i = 0; i < drumButtons.length; i++) {

//     drumButtons[i].addEventListener("click", function () {
//         var innerTxt = this.innerHTML;
//         function playsound(key){
//         switch (key) {
//                 case "w":
//                         var soundTom1 = new Audio("./sounds/tom-1.mp3");
//                         soundTom1.play();      
//                         break;
                
//                 case "a":
//                         var soundTom2 = new Audio("./sounds/tom-2.mp3");
//                         soundTom2.play();      
//                         break;
                
//                 case "s":
//                         var soundTom3 = new Audio("./sounds/tom-3.mp3");
//                         soundTom3.play();      
//                         break;
                
//                 case "d":
//                         var soundTom4 = new Audio("./sounds/tom-4.mp3");
//                         soundTom4.play();      
//                         break;
//                 case "j":
//                         var soundCrash = new Audio("./sounds/crash.mp3");
//                         soundCrash.play();      
//                         break;
//                 case "k":
//                         var soundKick = new Audio("./sounds/kick-bass.mp3");
//                         soundKick.play();      
//                         break;
//                 case "l":
//                         var soundSnare = new Audio("./sounds/snare.mp3");
//                         soundSnare.play();      
//                         break;
//                 default: console.log(key)
//                         break;
//         }       
//     }
// }


// document.addEventListener("keydown", function(event){
//         var sound = event.key;
//         switch (sound) {
//                 case "w":
//                         var soundTom1 = new Audio("./sounds/tom-1.mp3");
//                         soundTom1.play();      
//                         break;
//                 case "a":
//                         var soundTom2 = new Audio("./sounds/tom-2.mp3");
//                         soundTom2.play();      
//                         break;
                
//                 case "s":
//                         var soundTom3 = new Audio("./sounds/tom-3.mp3");
//                         soundTom3.play();      
//                         break;
                
//                 case "d":
//                         var soundTom4 = new Audio("./sounds/tom-4.mp3");
//                         soundTom4.play();      
//                         break;
//                 case "j":
//                         var soundCrash = new Audio("./sounds/crash.mp3");
//                         soundCrash.play();      
//                         break;
//                 case "k":
//                         var soundKick = new Audio("./sounds/kick-bass.mp3");
//                         soundKick.play();      
//                         break;
//                 case "l":
//                         var soundSnare = new Audio("./sounds/snare.mp3");
//                         soundSnare.play();      
//                         break;
        
//                 default: console.log(sound)
//                         break;
//         }
// });


// Select all drum buttons
var drumButtons = document.querySelectorAll(".drum");


// Add event listeners for button clicks
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        
        var buttonClickInnerHtml = this.innerHTML;
        playSound(buttonClickInnerHtml); // Call playSound function with the button's inner HTML
        buttonAnimate(buttonClickInnerHtml);
    });
}

// Add event listener for key presses
document.addEventListener("keydown", function(event) {
    playSound(event.key); // Call playSound function with the key pressed
    buttonAnimate(event.key);
});


// Function to play the sound based on the key/button pressed
function playSound(key) {
    switch (key) {
        case "w":
            var soundTom1 = new Audio("./sounds/tom-1.mp3");
            soundTom1.play();
            break;
        case "a":
            var soundTom2 = new Audio("./sounds/tom-2.mp3");
            soundTom2.play();
            break;
        case "s":
            var soundTom3 = new Audio("./sounds/tom-3.mp3");
            soundTom3.play();
            break;
        case "d":
            var soundTom4 = new Audio("./sounds/tom-4.mp3");
            soundTom4.play();
            break;
        case "j":
            var soundCrash = new Audio("./sounds/crash.mp3");
            soundCrash.play();
            break;
        case "k":
            var soundKick = new Audio("./sounds/kick-bass.mp3");
            soundKick.play();
            break;
        case "l":
            var soundSnare = new Audio("./sounds/snare.mp3");
            soundSnare.play();
            break;
        default:
            alert("You pressed the wrong key!")
    }
}

function buttonAnimate(currentKey) {
    var activeButton = document.querySelector("." + currentKey); // Select the button based on the class
    if (activeButton) {  // Ensure the element exists
        activeButton.classList.add("pressed"); // Add the "pressed" class

        // Remove the "pressed" class after a short delay (e.g., 100ms)
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100)
    }
}

