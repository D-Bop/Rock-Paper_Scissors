const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resetScore = document.querySelector(".reset-score");
const scoresParagraph = document.querySelector(".js-scores");
const moves = document.querySelector(".moves");
const jsResult = document.querySelector(".result");
//  getting our item we saved in local storage andalso giving the score a defualt value using logical operators 
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// giving the score a default value
// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }


// function for getting a random move for the computer
function pickPcMove() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    let computerMove = '';

    if (randomNumber === 1) {
        computerMove = "rock";

    } else if (randomNumber === 2) {
        computerMove = "paper";

    } else {
        computerMove = "scissors"
    }

    return computerMove;
};

// Creating a fucntion for the comparisons of rock, paper and scissors to make the code more efficient

function playGame(playerMove) {
    // APPLYING THE FUNCTION
    const computerMove = pickPcMove();

    //  COMPARING THE COMPUTERS MOVE WITH ROCK TO GET A RESULT
    let result = '';

    if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "Tie."
    
        } else if (computerMove === "paper") {
            result = "You lose.";
    
        } else if (computerMove === "scissors") {
            result = "You win.";
        }

    } else if (playerMove === "paper") {
        if (computerMove === "paper") {
            result = "Tie."
    
        } else if (computerMove === "scissors") {
            result = "You lose.";
    
        } else if (computerMove === "rock") {
            result = "You win.";
        }

    } else if (playerMove === "scissors") {
        if (computerMove === "scissors") {
            result = "Tie."
    
        } else if (computerMove === "rock") {
            result = "You lose.";
    
        } else if (computerMove === "paper") {
            result = "You win.";
        }
    }

    //  updating the scores
    if (result === "You win.") {
        score.wins += 1;

    } else if (result === "You lose.") {
        score.losses += 1;

    } else if (result === "Tie.") {
        score.ties += 1;
    }
    
    //  saving in local storage
    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElemnt()    
    //  Displaying the stats
    jsResult.innerHTML = result
    // UPDATING THE MOVES
    moves.innerHTML = `You <img src="Assets/Images/${playerMove}-emoji.png" alt=""> 
            <img src="Assets/Images/${computerMove}-emoji.png" alt=""> Computer`
};  

// Creating a function for updating the score element
function updateScoreElemnt() {
    scoresParagraph.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

rock.addEventListener("click", function() {
    playGame("rock")
});

paper.addEventListener("click", function() {
   playGame("paper")
});

scissors.addEventListener("click", function() {
    playGame("scissors")
});

resetScore.addEventListener("click", function() {
    alert("You have reset the score")
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScoreElemnt( )
});

updateScoreElemnt(); 