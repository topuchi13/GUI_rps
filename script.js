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
    playerSelection = playerSelection.toLowerCase();
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

// Asks for correct user input until it gets one

function input_filter(){
    var usr_inp = prompt("What's your sign?").toLowerCase();
    while (usr_inp !== "rock" && usr_inp !== "paper" && usr_inp !== "scissors"){
        usr_inp = prompt ("Wrong input, Your options are: rock, paper, scissors. Try again:").toLowerCase();
    }
        return (usr_inp);
}

// Main function

function game(){
    var player = 0;
    var comp = 0;
    function hbfbbfjtfjfhfbthfnhtftffcnjnfhncgfcjfgcnjc {
        var result = play(input_filter(), computerPlay());
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