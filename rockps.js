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
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return "Computer wins! Paper beats Rock"
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return "Computer wins! Scissors beats Paper"
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return "You Win! Paper beats Rock"
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return "Computer wins!  Rock beats Scissors "
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return "You Win! Scissors beats Paper"
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
rock.style.margin = "20px"
const paper = buttons[1]
paper.textContent = 'PAPER'
paper.style.cssText = "font-size: 2rem; background-color:pink"
paper.style.margin = "20px"
const scissor = buttons[2]
scissor.textContent = 'SCISSORS'
scissor.style.cssText = "font-size: 2rem; background-color:lightgreen"
scissor.style.margin = "20px"



// Display value of rock button by clicking

// const diplayPlayerChoice = document.querySelector('.display.one')
// console.log(diplayPlayerChoice)
// diplayPlayerChoice.textContent = "Nana Banana"

// add div for displaying results
const divResults = document.querySelector('#results')
const next = document.querySelector('#next')
console.log(next)

// const displayOne = document.createElement('p')
// displayOne.setAttribute('class', "display one")
// divResults.append(displayOne)
// console.log(divResults)

// create next game button
const nextgame = () => {
    const nextButton = document.createElement('button')
    nextButton.textContent = 'NEXT'
    nextButton.style.cssText = "font-size: 2rem; background-color:yellow"
    nextButton.style.margin = "20px"
    return nextButton
    console.log(nextButton)
}


console.log(next)


// create function to display player choice
const diplayPlayerChoice = (choice) => {
    const displayOne = document.createElement('p')
    displayOne.setAttribute('class', "display one")
    displayOne.style.cssText = "font-size: 2rem; color:blue"
    displayOne.textContent = `Player choice: ${choice.toUpperCase()}`
    divResults.append(displayOne)
    
}

const diplayComputerChoice = (choice) => {
    const displayTwo = document.createElement('p')
    displayTwo.setAttribute('class', "display two")
    displayTwo.style.cssText = "font-size: 2rem; color:red"
    displayTwo.textContent = `Computer choice: ${choice.toUpperCase()}`
    divResults.append(displayTwo)
}

const displayResult = (choice) => {
    const displayThree = document.createElement('p')
    displayThree.setAttribute('class', "display two")
    displayThree.style.cssText = "font-size: 2rem; color:purple"
    displayThree.textContent = `Result: ${choice.toUpperCase()}`
    divResults.append(displayThree)
}

rock.addEventListener('click', (e) => {
    // console.log(buttons[0].value)
    playerSelection = buttons[0].value
    diplayPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    diplayComputerChoice(computerSelection)
    x = playRound (playerSelection, computerSelection)
    displayResult(x)
    console.log(x)
    const z = nextgame()
    next.append(z)
})

paper.addEventListener('click', (e) => {
    // console.log(buttons[1].value)
    playerSelection = buttons[1].value
    computerSelection = getComputerChoice()
    x = playRound (playerSelection, computerSelection)
    console.log(x)
})

scissor.addEventListener('click', (e) => {
    // console.log(buttons[2].value)
    playerSelection = buttons[2].value
    computerSelection = getComputerChoice()
    x = playRound (playerSelection, computerSelection)
    console.log(x)
})

