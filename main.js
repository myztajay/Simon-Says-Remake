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
function playSimon() {
    for (let i = 0; i < 3; i++) {
        randomSeq = Math.floor((Math.random() * 3) + 1);
        simonSeq.push(randomSeq);
        console.log(simonSeq);
        console.log(i);
    }
  

}
