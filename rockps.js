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

function findWinner(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'draw - both choice are the same'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'draw - both choice are the same'
    }   else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'draw - both choice are the same'
    }  else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return '"You Win! Rock beats Scissors"'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return '"You Lose! Paper beats Rock"'
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return '"You lose! Paper beats Scissors"'
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return '"You lose! Paper beats Scissors"'
}
}
}
}