function getComputerChoice(){

// create random number 0 to 2
randomNum = Math.floor(Math.random() * (2 - 0 +1) + 0)
console.log(randomNum)

// select random word using index 
arrChoice = ["rock","paper","scissors"]
randomWord = arrChoice[randomNum]
return randomWord
}
x = getComputerChoice()
console.log(x)

function playRound (playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'it\'s Draw! - both choice are the same'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'it\'s Draw! - both choice are the same'
    }   else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'it\'s Draw! - both choice are the same'
    }  else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return '"You Win! Rock beats Scissors"'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return '"You Lose! Paper beats Rock"'
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return '"You lose! Scissors beats Paper"'
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return '"You Win! Paper beats Rock"'
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return '"You Lose! Scissors beats Rock"'
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return '"You Win! Scissors beats Paper"'
    }
}

computerSelection = getComputerChoice()

playerSelection = prompt("Choose one: rock or paper or scissors")
x = playRound (playerSelection, computerSelection)
x = x.split(' ')
console.log(x[1])

function game(){
    let result = '';
    playerCount = 0;
    computerCount = 0;
    for (let i = 0; i < 5; i++){

    }
}


