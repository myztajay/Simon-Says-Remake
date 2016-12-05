//JQUERY - VARIABLES
let $red = $(btnRed);
let $blue = $(btnBlue);
let $green = $(btnGreen);
let $yellow = $(btnYellow);
let $play = $(btnPlay);
//REGULAR VARIABLES
let arrayCounter = 0;
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
function whatColor(id) {
    switch (id) {
        case "btnRed":
            return 1;
        case "btnBlue":
            return 2;
        case "btnGreen":
            return 3;
        case "btnYellow":
            return 4;
    }
  }
//ENDS GAME
function lostGame () {
  alert("You Lost, try Checkers");
  resetUserSeq();
  resetSimon();
}
//LOST GAME
function wonGame(){
  resetUserSeq();
  genSimonSeq();
}
//RESETS GAME
function resetUserSeq() {
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
function flash() {
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
        console.log(simonCounter+" simonmini counter")
    }

    function highlight(colorVar) {
        colorVar.addClass('flashClass');
        setTimeout(removeClass, 500)

        function removeClass() {
            colorVar.removeClass("flashClass");
        }
    }
}
//USER FLASHING FUNCTION
function userFlash(colorVar) {
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
function genSimonSeq() {
    $('span').html('<h2> round '+ round +'</h2>')
    randNum = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(randNum);
    console.log(simonSeq + " = this is simonseq");
    // for (let i = 0; i < 3; i++) {
    //     randomSeq = Math.floor((Math.random() * 4) + 1);
    //     simonSeq.push(randomSeq);
    //     console.log(simonSeq);
    // }
    animate = setInterval(flash, 1000);
    round++;
}
//PUSHES USER VALUES TO ARRAY, USERFLASH
function storeUserSeq() {
    console.log(this.id + "button was pressed"); // logs button
        if (this.id == "btnRed") {
            userFlash($red);
            userSeq.push(1);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
                if (userSeq.length === simonSeq.length) {
                  wonGame();
                }
            } else {
                // end the game if answer is wrong
                  lostGame();
            }
        }
        if (this.id == "btnBlue") {
            userFlash($blue);
            userSeq.push(2);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
                if (userSeq.length === simonSeq.length) {
                    wonGame();
                }
            } else {
                // end the game if answer is wrong
                lostGame();
            }
        }
        if (this.id == "btnGreen") {
            userFlash($green);
            userSeq.push(3);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
                if (userSeq.length === simonSeq.length) {
                    wonGame();
                }
            } else {
                // end the game if answer is wrong
                lostGame();
            }
        }
        if (this.id == "btnYellow") {
            userFlash($yellow);
            userSeq.push(4);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
                if (userSeq.length === simonSeq.length) {
                    wonGame();
                }
            } else {
                // end the game if answer is wrong
                lostGame();
            }
        }


}
