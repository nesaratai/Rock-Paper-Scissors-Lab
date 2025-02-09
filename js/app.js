

// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

let playerChoice;
let computerChoice; 
let msg;
let computerwins = 0
let youwin = 0
let noonewins = 0

const resultDisplayEl = document.querySelector('#result-display');
const countDisplayEl = document.querySelector('#counts');


// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages


const choices = ['rock','paper','scissors'];




// 3) Handle a player clicking a button

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);




// 4) Handle generating random selections for the computer player





// 5) Compare the player choice to the computer choice, and check for a winner
function getPlayerChoice(event){
    console.log('getPlayerChoices:', event.target);
    playerChoice = event.target.id;
}


function play(event){
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
}

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);



    computerChoice = choices[randomIndex]
}

function compare(){
    if(playerChoice === computerChoice){
        msg = "You Tied!"
        noonewins = noonewins+1
    } else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        msg = "Computer Wins"
        computerwins = computerwins + 1
    } else if(playerChoice == 'paper' && computerChoice == 'rock'){
        msg = "You Win"
        youwin = youwin + 1
    }else if(playerChoice == 'rock' && computerChoice == 'paper'){
        msg = "Computer Win"
        computerwins = computerwins + 1
    } else if(playerChoice == 'rock' && computerChoice == 'scissors'){
        msg = "You Win"
        youwin = youwin + 1
    }else if(playerChoice == 'scissors' && computerChoice == 'rock'){
        msg = "Computer Win"
        computerwins = computerwins + 1
    } else{
        msg = "You Win"
        youwin = youwin + 1
    }
    }




// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

function render(){
    resultDisplayEl.textContent = `You Pick: ` + playerChoice + `The Computer Picked:`+ ' ' + ' ' +computerChoice + '. ' +msg;
    countDisplayEl.textContent = 'Computers total Wins' + computerwins + 'Your tatol wins' + youwin + 'and Ties' + noonewins
}


// 









