console.log("js in connected");
//JQUERY - VARIABLES
let $red = $(btnRed);
let $blue = $(btnBlue);
let $green = $(btnGreen);
let $yellow = $(btnYellow);
let $play = $(btnPlay);
let playerTurn = true;
let tempVar
let arrayCounter = 0
//ARRAYS
let userSeq = [];
let simonSeq = [];

//VARIABLES CLICK EVENTS
$red.on('click',storeUserSequence);
$blue.on('click',storeUserSequence);
$green.on('click', storeUserSequence);
$yellow.on('click', storeUserSequence);
$play.on('click', genSimonSeq);

//FUNCTIONS
// functio for button clicked using this to refer to button tht clicked
//find its ID using jquery
//  store array

function resetGame(){
  userSeq = [];
  simonSeq = [];
}

function storeUserSequence() {
    console.log(this.id + "button was pressed");
    if (arrayCounter < (simonSeq.length - 1)) {

        if (this.id == "btnRed") {
            $red.html("red_User");
            tempVar = 1;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                resetGame();
            }
        }
        if (this.id == "btnBlue") {
            $blue.html("blue_User");
            tempVar = 2;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                resetGame();
            }
        }
        if (this.id == "btnGreen") {
            $green.html("green_User");
            tempVar = 3;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                resetGame();
            }
        } else if (this.id == "btnYellow") {
            $yellow.html("yellow_User");
            tempVar = 4;
            userSeq.push(tempVar);
            if (userSeq[arrayCounter] === simonSeq[arrayCounter]) {
                arrayCounter++;
            } else {
                // end the game if answer is wrong
                console.log("Loo-hoo-looha");
                resetGame();
            }
        }
    } else {
        console.log("YOU WIN BITCH!");
        resetGame();
    }
}
//initiates game
function genSimonSeq(){
    // check to see if playerTurn is true or false
    if (playerTurn) {
        for (let i = 0; i < 3; i++) {
            randomSeq = Math.floor((Math.random() * 4) + 1);
            simonSeq.push(randomSeq);
            console.log(simonSeq);
        }
        for (let j in simonSeq) {
            if (simonSeq[j] == 1) {
                //clear interval
                $red.html("red");
                //fill in with ccs3 feature highlight
                //set invterval to freeze it
            }
            if (simonSeq[j] == 2) {
                $blue.html("blue");
                //fill in with ccs3 feature highlight
                //set invterval to freeze it
            }
            if (simonSeq[j] == 3) {
                $green.html("green");
                //fill in with ccs3 feature highlight
                //set invterval to freeze it
            }
            if (simonSeq[j] == 4) {
                $yellow.html("yellow");
                //fill in with ccs3 feature highlight
                //set invterval to freeze it
            }
        }
    } else {
      // Now we do what playas do
        console.log("player turn now");

    }
    playerTurn = true;
}
