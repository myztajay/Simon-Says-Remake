//JQUERY - VARIABLES
let $red = $(btnRed);
let $blue = $(btnBlue);
let $green = $(btnGreen);
let $yellow = $(btnYellow);
let $play = $(btnPlay);
//REGULAR VARIABLES
let userCounter = 0;
let simonCounter = 0;
let round =1;
let timeoutId;
var animate;
//ARRAYS
let userSeq = [];
let simonSeq = [];
//VARIABLES CLICK EVENTS
$red.on('click', storeUserSeq);
$blue.on('click', storeUserSeq);
$green.on('click', storeUserSeq);
$yellow.on('click', storeUserSeq);
$play.on('click', genSimonSeq);

//////////////////////////////////FUNCTIONS////////////////////////////////////
// COMPARES BOTH ARRRAY EVERYTIME A BUTTON IS PRESSED
function compare(){
  if (userSeq[userCounter] === simonSeq[userCounter]) {
      arrayCounter++;
      if (userSeq.length === simonSeq.length) {
          wonGame();
      }
  } else {
      lostGame();
  }
}
//LOST GAME
function lostGame(){
  alert("You Lost, try Checkers");
  resetUserSeq();
  resetSimon();
}
//WON GAME
function wonGame(){
  resetUserSeq();
  genSimonSeq();
}
//RESETS GAME
function resetUserSeq(){
    userSeq = [];
    arrayCounter = 0;
    simonCounter = 0;
    // NEED TO FIND A BETTER WAY TO CLEAR INTERVAL right now it runs flash()
    //over and over untill the round is done.
    clearInterval(animate);
}
//RESET game
function resetSimon(){
  simonSeq = [];
  round = 1;
  $('span').html('<H2>LOST</H2>');
}
//SIMON FLASHING FUNCTION
function flash(){
    if (simonCounter < simonSeq.length) {
        x = simonSeq[simonCounter];
        if (x == 1) {
            highlight($red);
        }
        if (x == 2) {
            highlight($blue);
        }
        if (x == 3) {
            highlight($green);
        }
        if (x == 4) {
            highlight($yellow);
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
    $('span').html('<h2> round '+ round +'</h2>');
    randNum = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(randNum);
    animate = setInterval(flash, 1000);
    round++;
}
//PUSHES USER VALUES TO ARRAY, USERFLASH
function storeUserSeq(){
        if (this.id == "btnRed") {
            userFlash($red);
            userSeq.push(1);
            compare();
        }
        if (this.id == "btnBlue") {
            userFlash($blue);
            userSeq.push(2);
            compare();
        }
        if (this.id == "btnGreen") {
            userFlash($green);
            userSeq.push(3);
            compare();
        }
        if (this.id == "btnYellow") {
            userFlash($yellow);
            userSeq.push(4);
            compare();
        }
}
