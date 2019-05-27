function computerPlay () {
    var options = ["rock", "paper", "scissors"];
    return (options[Math.floor(Math.random() * (3-0) + 0)]);
}


// Game logic

function logic (a,b){
    if (a == b){
        return ("tie");
    }
    else if (a == "rock" && b == "paper"){
        return ("computer");
    }
    else if (a == "paper" && b == "scissors"){
        return ("computer");
    }
    else if (a == "scissors" && b == "rock"){
        return ("computer");
    }
    else {
        return ("player");
    }
}

// Logs results to the console

function play (playerSelection, computerSelection) {
//    playerSelection = playerSelection.toLowerCase();
    if (logic(playerSelection, computerSelection) == "tie"){
        return ["tie","It's a tie"];
    }
    else if (logic(playerSelection, computerSelection) == "computer"){
        return ["computer","You lose! " + computerSelection + " beats " + playerSelection];
    }
    else {
        return ["player","You win! " + playerSelection + " beats " + computerSelection];
    }
}

//function for quick score update;
function score_update(player_score, comp_score){
    score_pl.innerHTML = player_score;
    com_score.innerHTML = comp_score;
}

// Main function

function game(){
    var player = 2;
    var comp = 0;
    score_update(player,comp);
    function start() {
        score_update(player,comp);
        var result = play(player_choice(), computerPlay());
        console.log(result[1]);
        if (result[0] == "computer"){
            comp += 1;
        }
        else if (result[0] == "player"){
            player += 1;
        }
        console.log ("Current Score: Player - " + player + ", Computer - " + comp);
    }
    if (player == 5){
        console.log("Congratulations! You win");
    }
    else {
        console.log("You lose! Keep Trying");
    }
 
}

//DOM stuff
const play_field = document.getElementById('text_box');
const score_pl = document.getElementById('player_score');
const score_pl = document.getElementById('com_score');

const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
const play_btn = document.getElementById('play_btn')