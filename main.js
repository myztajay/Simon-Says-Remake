console.log("js in connected");

//vaiables - store all my simon buttoms + play button
$red = $(btnRed);
$blue = $(btnBlue);
$green = $(btnGreen);
$yellow = $(btnYellow);
$play = $(btnPlay);

//FOR VARIABLE ONCLIgreen
$red.on('click')
$blue.on('click')
$green.on('click')
$yellow.on('click')
$play.on('click', playSimon)


//ARRAYS
//Array to hold simonsequence
//Array to hold usersequence
let userSeq = [];
let simonSeq = [];


//FUNCTIONS
// functio for button clicked using this to refer to button tht clicked
//find its ID using jquery
//  store array


// generate random number from 1-4

//initiates game
function playSimon() {
    for (let i = 0; i < 3; i++) {
        randomSeq = Math.floor((Math.random() * 4) + 1);
        simonSeq.push(randomSeq);
        console.log(simonSeq);
    }

    for (let j in simonSeq) {
        if (simonSeq[j] == 1) {
            $red.html("red");
        }
        if (simonSeq[j]  == 2){
            $blue.html("blue");
        }
        if (simonSeq[j] == 3) {
            $green.html("green");
        }
        if (simonSeq[j] == 4) {
            $yellow.html("yellow");
        }
    }

}
