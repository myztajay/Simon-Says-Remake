//JQUERY - VARIABLES
let $red = $(btnRed);
let $blue = $(btnBlue);
let $green = $(btnGreen);
let $yellow = $(btnYellow);
let $play = $(btnPlay);
//REGULAR VARIABLES
let userCounter = 0;
let simonCounter = 0;
let round = 1;
let score = 0 ;
let timeoutId;
let animate;
//ARRAYS
let userSeq = [];
let simonSeq = [];
//VARIABLES CLICK EVENTS
$red.on('click', storeUserSeq);
$blue.on('click', storeUserSeq);
$green.on('click', storeUserSeq);
$yellow.on('click', storeUserSeq);
//PLAY BUTTONS
$play.on('click', genSimonSeq);
$play.click(hide);

var audio1 = new Audio("sounds/C.mp3" )
var audio2 = new Audio("sounds/F.mp3" )
var audio3 = new Audio("sounds/A.mp3" )
var audio4 = new Audio("sounds/E.mp3" )


//////////////////////////////////FUNCTIONS////////////////////////////////////
// COMPARES BOTH ARRRAY EVERYTIME A BUTTON IS PRESSED
function compare(){
  if (userSeq[userCounter] === simonSeq[userCounter]) {
      userCounter++;
      if (userSeq.length === simonSeq.length) {
          wonGame();
      }
  } else {
      lostGame();
  }
}
//SCORING
function scoring(){
  score = score + 100;
  $(scoreBoard).html("Score: " + score);
}
//LOST GAME
function lostGame(){
  alert("You Lost, Try Checkers");
  resetUserSeq();
  resetSimon();
  hide();
  score = 0;
  $(scoreBoard).html("Score: " + score);

}
//WON GAME
function wonGame(){
  resetUserSeq();
  genSimonSeq();
}
//RESETS GAME
function resetUserSeq(){
    userSeq = [];
    userCounter = 0;
    simonCounter = 0;
    // NEED TO FIND A BETTER WAY TO CLEAR INTERVAL right now it runs flash()
    //over and over untill the round is done.
    clearInterval(animate);
}
//RESET game
function resetSimon(){
  simonSeq = [];
  round = 1;

}
//SIMON FLASHING FUNCTION
function simonFlashSound(){
    if (simonCounter < simonSeq.length) {
        x = simonSeq[simonCounter];
        if (x == 1) {
            highlight($red);
            audio1.play();
        }
        if (x == 2) {
            highlight($blue);
            audio2.play();
        }
        if (x == 3) {
            highlight($green);
            audio3.play();
        }
        if (x == 4) {
            highlight($yellow);
            audio4.play();
        }
        simonCounter++;
    }
    function highlight(colorVar) {
        colorVar.addClass('flashClass');
        setTimeout(removeClass, 500);
        function removeClass() {
            colorVar.removeClass("flashClass");
        }
    }

}
//USER FLASHING FUNCTION
function userFlash(colorVar){
    highlightUser(colorVar);
    function highlightUser(colorVar) {
        colorVar.addClass('flashClass');
        setTimeout(removeClass, 500);
        function removeClass() {
            colorVar.removeClass("flashClass");
        }
    }
}
//INIATES SIMON
function genSimonSeq(){
    $('span').html('<h2> Round '+ round +'</h2>');
    randNum = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(randNum);
    animate = setInterval(simonFlashSound, 1000);
    round++;
}
// GENERATES SOUND FOR SIMON

//PUSHES USER VALUES TO ARRAY, USERFLASH
function storeUserSeq(){
        if (this.id == "btnRed") {
            userFlash($red);
            audio1.play();
            userSeq.push(1);
            scoring();
            compare();
        }
        if (this.id == "btnBlue") {
            userFlash($blue);
            audio2.play();
            userSeq.push(2);
            scoring();
            compare();

        }
        if (this.id == "btnGreen") {
            userFlash($green);
            audio3.play();
            userSeq.push(3);
            scoring();
            compare();

        }
        if (this.id == "btnYellow") {
            userFlash($yellow);
            audio4.play();
            userSeq.push(4);
            scoring();
            compare();

        }
}
//HIDES PLAY BUTTON
function hide(){
  $play.toggleClass('hidden')
}
