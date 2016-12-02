console.log("js in connected");
//JQUERY - VARIABLES
let $red = $(btnRed);
let $blue = $(btnBlue);
let $green = $(btnGreen);
let $yellow = $(btnYellow);
let $play = $(btnPlay);
let playerTurn = true;
let tempVar;
let arrayCounter = 0;
let simonCounter = 0
let timeoutId;
var animate;

//ARRAYS
let userSeq = [];
let simonSeq = [];

//VARIABLES CLICK EVENTS
$red.on('click', storeUserSequence);
$blue.on('click', storeUserSequence);
$green.on('click', storeUserSequence);
$yellow.on('click', storeUserSequence);
$play.on('click', genSimonSeq);

//////////////////////////////////FUNCTIONS////////////////////////////////////

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
}
//SIMON FLASHING FUNCTION
function flash() {
    if (simonCounter < simonSeq.length) {
        console.log("animate test");
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
        console.log(simonCounter)
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
//PUSHES USER VALUES TO ARRAY, USERFLASH
function storeUserSequence() {
    console.log(this.id + "button was pressed");
    if (arrayCounter < (simonSeq.length - 1)) {

        if (this.id == "btnRed") {
            userFlash($red)
            tempVar = 1;
            userSeq.push(tempVar);

            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetUserSeq();
                resetSimon();
            }
        }
        if (this.id == "btnBlue") {
            userFlash($blue)
            tempVar = 2;
            userSeq.push(tempVar);

            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetUserSeq();
                resetSimon();
            }
        }
        if (this.id == "btnGreen") {
            userFlash($green)
            tempVar = 3;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetUserSeq();
                resetSimon();
            }
        } else if (this.id == "btnYellow") {
            userFlash($yellow)
            tempVar = 4;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                alert('lost')
                resetUserSeq();
                resetSimon();
            }
        }
    } else {
        alert('winner')
        console.log("YOU WIN BITCH!");
        resetUserSeq();
        genSimonSeq();
    }
}
//INIATES SIMON
function genSimonSeq() {
    randNum = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(randNum);
    console.log(simonSeq);
    // for (let i = 0; i < 3; i++) {
    //     randomSeq = Math.floor((Math.random() * 4) + 1);
    //     simonSeq.push(randomSeq);
    //     console.log(simonSeq);
    // }

    animate = setInterval(flash, 1000);
}
