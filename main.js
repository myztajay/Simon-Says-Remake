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

//ARRAYS
let userSeq = [];
let simonSeq = [];

//VARIABLES CLICK EVENTS
$red.on('click', storeUserSequence);
$blue.on('click', storeUserSequence);
$green.on('click', storeUserSequence);
$yellow.on('click', storeUserSequence);
$play.on('click', genSimonSeq);

//FUNCTIONS
//RESETS GAME
function resetGame() {
    userSeq = [];
    simonSeq = [];
    arrayCounter = 0;
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

        function highlight(colorVar) {
            colorVar.addClass('flashClass');
            setTimeout(removeClass, 500)

            function removeClass() {
                colorVar.removeClass("flashClass");
            }
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
            tempVar = 1;
            userSeq.push(tempVar);
            userFlash($red)
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetGame();
            }
        }
        if (this.id == "btnBlue") {
            tempVar = 2;
            userSeq.push(tempVar);
            userFlash($blue)
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetGame();
            }
        }
        if (this.id == "btnGreen") {
            tempVar = 3;
            userFlash($green)
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                alert('lost')
                console.log("Loo-hoo-looha");
                resetGame();
            }
        } else if (this.id == "btnYellow") {
            tempVar = 4;
            userFlash($blue)
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                alert('lost')
                resetGame();
            }
        }
    } else {
        alert('winner')
        console.log("YOU WIN BITCH!");
        resetGame();
    }
}

//end of animate
//initiates game
function genSimonSeq() {
    // check to see if playerTurn is true or false
    for (let i = 0; i < 3; i++) {
        randomSeq = Math.floor((Math.random() * 4) + 1);
        simonSeq.push(randomSeq);
        console.log(simonSeq);
    }

    animate;
}
var animate = setInterval(flash, 1500)
