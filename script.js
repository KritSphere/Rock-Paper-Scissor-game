let userScore = 0;
let computerScore = 0;
function play(userChoice) {

    let choices = ["rock", "paper", "scissor"];

    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "DRAW 🤝";
    }

    else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "YOU WIN 🎉";
        userScore++;
    }

    else {
        result = "YOU LOSE 💀";
        computerScore++;
    }

    document.getElementById("result").innerHTML =
        `You chose ${userChoice}<br>
         Computer chose ${computerChoice}<br><br>
         ${result}`;
    document.getElementById("score").innerHTML =
    `You: ${userScore} | Computer: ${computerScore}`;
}
