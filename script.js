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
    }

    else {
        result = "YOU LOSE 💀";
    }

    document.getElementById("result").innerHTML =
        `You chose ${userChoice}<br>
         Computer chose ${computerChoice}<br><br>
         ${result}`;
}