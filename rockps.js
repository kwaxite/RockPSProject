function getComputerChoice(){

// create random number 0 to 2
randomNum = Math.floor(Math.random() * (2 - 0 +1) + 0)


// select random word using index 
arrChoice = ["rock","paper","scissors"]
randomWord = arrChoice[randomNum]
return randomWord
}


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
        return '"You Lose! Scissors beats Paper"'
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return '"You Win! Paper beats Rock"'
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return '"You Lose! Scissors beats Rock"'
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return '"You Win! Scissors beats Paper"'
    }
}

// computerSelection = getComputerChoice()

// playerSelection = prompt("Choose one: rock or paper or scissors")
// x = playRound (playerSelection, computerSelection)
// x = x.split(' ')
// console.log(x[1])

// function game(){
//     let result = '';
//     playerCount = 0;
//     computerCount = 0;
//     alert(`5 rounds of Rock Paper Scissors against the computer`)
//     for (let i = 1; i < 6; i++){
//         alert(`Round ${i}`)
//         playerSelection = prompt("Choose one: rock or paper or scissors")
//         let computerSelection = getComputerChoice()
//         result = playRound (playerSelection, computerSelection)
//         console.log(result)
//         if ( result.split(' ')[1] === 'Win!'){
//             playerCount = playerCount + 1
//             alert(`Yay! you win round ${i}`)
//         } else if ( result.split(' ')[1] === 'Lose!'){
//             alert(`The computer wins round ${i}`)
//             computerCount = computerCount + 1
//         } else { alert ('Its a draw!')}
//     }
//     console.log (`computer wins = ${computerCount}`)
//     console.log (`player wins = ${playerCount}`)
//     if (playerCount > computerCount){
//         console.log("You win the game")
//         document.body.innerHTML = "<h1>You win the game</h1>'"
//     } else if (playerCount < computerCount){
//         console.log("Computer wins the game")
//         document.body.innerHTML = "<h1>Computer wins the game</h1>'"
//     } else {
//         console.log("It's a draw")
//         document.body.innerHTML = '<h1> It\'s a draw!</h1>';
//     }
// }

// game()



const buttons = document.querySelectorAll('button')

console.log(buttons)

const rock = buttons[0]
rock.textContent = 'ROCK'
rock.style.cssText = "font-size: 2rem; background-color:yellow"
const paper = buttons[1]
paper.textContent = 'PAPER'
paper.style.cssText = "font-size: 2rem; background-color:pink"
const scissor = buttons[2]
scissor.textContent = 'SCISSORS'
scissor.style.cssText = "font-size: 2rem; background-color:lightgreen"

const select = () => {  
}

