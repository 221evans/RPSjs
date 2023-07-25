// 1 Rock
// 2 Paper
// 3 Scissors

let playerChoice = 0;
let computerChoice;
let resultEl = document.getElementById("result-el");
let result = ""
resultEl.textContent = result.textContent

function rock()
{
    playerChoice = 1
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (playerChoice === 1 && computerChoice === 2)
    {
        result = "Player Choice: Rock, Computer choice: Paper" +
            " Computer wins";
    }
    else if (playerChoice === 1 && computerChoice === 3)
    {
        result = "Player choice: Rock, Computer choice: Scissors " +
            " Player Wins";
    }
    else
    {
        result = "Draw";
    }

    resultEl.textContent = result;
}

function paper ()
{
    playerChoice = 2;
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (playerChoice === 2 && computerChoice === 1)
    {
      result = "Player choice: Paper, Computer choice: Rock" +
            " Player wins";
    }
    else if (playerChoice === 2 && computerChoice === 3)
    {
        result = "Player choice: Paper, Computer choice: Scissors" +
            " Computer wins";
    }
    else
    {
       result ="Draw";
    }
    resultEl.textContent = result;
}

function scissors ()
{
    playerChoice = 3;
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (playerChoice === 3 && computerChoice === 1)
    {
       result = "Player choice: Scissors, Computer choice: Rock" +
            " Computer wins";
    }
    else if(playerChoice === 3 && computerChoice === 2)
    {
       result = "Player choice: Scissors, Computer choice: Paper" +
            " Player wins";
    }
    else
    {
        result =  "Draw";
    }

    resultEl.textContent = result;
}
