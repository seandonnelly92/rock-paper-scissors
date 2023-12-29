/* Instructions
Begin the process of coding out the rock-paper-scissors game.

As a user:

I want to play Rock, Paper, Scissors against an automated opponent.
I can enter R, P, or S to signify my choice of rock, paper, or scissors.
I expect the computer to choose R, P, or S in return.
I want the option to play again whether I win or lose.
I want to see my total wins, ties, and losses after 10 rounds.
The computer's selection must be random to ensure a fair game.

Follow your pseudocode as much as you can, and if you get stuck don't worry, this is a challenging assignment.

💡 Notes 

PSEUDOCODE 

Computer must be able to randomly respond with a value of Rock Paper or Scissors

This needs to be a container with potential answers... I think. I'll call it a variable called 'computerSelection'.

This computerSelection will need to be sent back to the user, with an IF statement. 

No matter what the user does, the computer will need to generate a random computerSelection. 

But the response message should differ based on whether the computer wins or the user wins. 

I'm not sure it's more efficient for the response message to be it's own container with "win", "lose" "draw" or if there should just be loads of messages for each if statement. Probably the former.

Each option has equal chance of win-lose-draw. 

Reponse messages to Rock (all prompts)
- rock-rock: Rock! Draw. Neither of our rocks could smash the other... Try again.
- rock-paper: Paper! You lose, too bad! You must have rocks for brains too. Feckin' eejit. Try again, ya useless eejit.
- rock-scissors. Scissors! Ahhh. You've smashed my scissors apart. You win. I hope you're happy. Double or quits? 

Response messages to Paper (all prompts)
- paper-rock: Rock! :( My rock is covered and suffocated. You win. Fancy another? 
- paper-scissors: Scissors! My scissors cut you into pieces. You LOSE! Ha! Wanna try again?
- paper-paper: Paper! Bore draw. 

Response messages to Scissors (all prompts)
- scissors-scissors: Scissors! Bore draw. Fancy another? 
- scissors-paper: Paper! Oh no. You've cut me up. Let's go again.
- scissors-rock: Rock! SMASH SMASH SMASH. I win. Try again if you dare... 

Program:

The program should ask the user to type their input
PHASE 1
User is prompted to enter Rock, Paper or Scissors. Let's call that userInput

PHASE 2
We transform that variable to lower case for comparison purposes: let userInputLowerCase = userInput.toLowerCase(); 

PHASE 3
The program should generate a random choice also for the computer. We'll create a new variable for that called response. I don't know how to do this yet but for now I'll just make it rock. 

PHASE 4 
The program should run through 3 IF statements for each possible option. To do that, we need to find out what path they're on.

IF userInputLowerCase = rock
    IF computerSelection = rock 
        alert = x
    
    IF computerSelection = paper 
        alert = x
    
    IF computerSelection = scissors  
        alert = x
    
IF userInputLowerCase = paper
    IF computerSelection = rock 
        alert = x
    
    IF computerSelection = paper 
        alert = x
    
    IF computerSelection = scissors  
        alert = x
    
IF userInputLowerCase = scissors
    IF computerSelection = rock 
        alert = x
    
    IF computerSelection = paper 
        alert = x
    
    IF computerSelection = scissors  
        alert = x
    
ELSE alert = "Oops! You must enter Rock, Paper or Scissors only."
*/ 




/*

// VARIABLES




// PHASE 1
// User is prompted to enter Rock, Paper or Scissors. Let's call that userInput
// The variable is created and filled with the user's input via the prompt


////////// var userInput = prompt("Enter Rock, Paper or Scissors");

// PHASE 2
// We transform that variable to lower case for comparison purposes: let userInputLowerCase = userInput.toLowerCase(); 

////////// let userInputLowerCase = userInput.toLowerCase(); 


// PHASE 3
// The program should generate a random choice also for the computer. We'll create a new variable for that called response. 

var computerSelection = ["rock", "paper", "scissors"]

//declaredFunction namedFunction(setParameters)
function random(min, max) {
    //functionBody
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

random(1, 3);

/* 


// PHASE 4 
// The program should run through 3 IF statements for each possible option. To do that, we need to find out what path they're on.

// User Input is Rock
if (userInputLowerCase === "rock") {
    if (computerSelection === "rock") {
        alert("Rock! Draw. Neither of our rocks could smash the other... Try again.")
    }

    else if (computerSelection === "paper") {
        alert("Paper! You lose, too bad! You must have rocks for brains too. Try again, ya useless eejit.")
    }
    
    else if (computerSelection === "scissors") {
        alert("Scissors! Ahhh. You've smashed my scissors apart. You win. I hope you're happy. Double or quits? ")
    }
}

// User Input is Paper
else if (userInputLowerCase === "paper") {
    if (computerSelection === "rock") {
        alert("Rock! My rock is covered and suffocated. You win. Fancy another?")
    }

    else if (computerSelection === "paper") {
        alert("Paper! Bore draw.")
    }
    
    else if (computerSelection === "scissors") {
        alert("Scissors! My scissors cut you into pieces. You LOSE! Ha! Wanna try again?")
    }
}

// User Input is Scissors
else if (userInputLowerCase === "scissors") {
    if (computerSelection === "rock") {
        alert("Rock! SMASH SMASH SMASH. I win. Try again if you dare...")
    }

    else if (computerSelection === "paper") {
        alert("Paper! Oh no. You've cut me up. Let's go again.")
    }
    
    else if (computerSelection === "scissors") {
        alert("Scissors! Bore draw. Fancy another?")
    }
}


// PHASE 5: ELSE alert = "Oops! You must enter Rock, Paper or Scissors only."

else alert("Oops! You must enter Rock, Paper or Scissors only.")




*/



// PHASE 1: INITIALISE VARIABLES FOR WINS, DRAWS AND LOSSES FOR SCORING

let wins = 0;
let draws = 0; 
let losses = 0; 


// PHASE 2: LOOP FOR 10 ROUNDS


for (let round = 1; round <= 10; round++) {

    // for (initialisation; condition; update)

    /* FOR LOOP SYNTAX 

    Initialization: let round = 1 initializes the round variable to 1 at the beginning of the loop.

    Condition: round <= 10 is the condition that checks whether the loop should continue executing. It 
    ensures that the loop runs as long as the value of round is less than or equal to 10.

    Update: round++ increments the value of round by 1 after each iteration of the loop. 

    The code inside the curly braces {} represents the block of code that is executed in each 
    iteration of the loop. */ 

    // 2.a. Get user input
    let userChoice = prompt("Enter R for Rock, P for Paper or S for Scissors").toUpperCase();

    // 2.b. Generate random computer choice
    let computerChoices = ["R", "P", "S"]; //an array
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)]; // The square brackets assign the choice by indexing into the computerChoices array e.g. computerChoices[1] would give you Paper. 

    //2.c. Determine the winner

    let result = ""; // "user", "computer" or "draw". Empty string is best practise to ensure it starts empty each time. 

    // DRAW
        if (userChoice === computerChoice) {
            result = "draw";
        }

    // USER WINS
        else if (
            (userChoice === "R" && computerChoice === "S") || 
            (userChoice === "P" && computerChoice === "R") ||
            (userChoice === "S" && computerChoice === "P") 
        ) {
            result = "user";
        }

    // COMPUTER WINS
        else {
            result = "computer";
        }


    // 2.d. Update wins, draws, losses

    if (result === "user") {
        wins++; // This part creates the variable AND adds 1 if the condition is met. It's the same as wins = wins + 1. At first wins will be 0 so it will be 0 + 1 = 1. 
    }

    else if (result === "computer") {
        losses++;
    }

    else {
        draws++;
    }


    // 2.e. Display the result and scores


    
    // 2.f. Ask the user if they want to play again

    let playAgain = confirm("Round " + round + " Result:\n" + // '\n' gives a line break
    "You chose " + userChoice + ", Computer chose " + computerChoice + ".\n" +
    "Result: " + result + "\n\n" + 
    "Scores:\n" +
    "Wins: " + wins + "\n" +
    "Draws: " + draws + "\n" + 
    "Losses: " + losses + "\n\n" + 
    "Fancy another go?"); // the confirm function creates a dialog box with OK (true) or Cancel (false)
    if (!playAgain) { // !playAgain is saying it's NOT true. 
        break; // If playAgain is FALSE (i.e. they push cancel) the break function exts the loop.  
    } 

    
    /* This line uses the confirm function to display a dialog box with 
    a message asking the user whether they want to play the Rock, Paper, Scissors game again.
    The confirm function returns true if the user clicks "OK" and false if they click "Cancel" or close the dialog.
    
    */

}
    // PHASE 3: DISPLAY THE TOTAL WINS, DRAWS AND LOSSES

    console.log("Total Wins: " + wins);
    console.log("Total Ties: " + ties);
    console.log("Total Losses: " + losses);
