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
        return 'Draw!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'Draw!'
    }   else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'Draw!'
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

// const displayPlayerChoice = document.querySelector('.display.one')
// console.log(displayPlayerChoice)
// displayPlayerChoice.textContent = "Nana Banana"

// add div for displaying results
const divResults = document.querySelector('#results')
const next = document.querySelector('#next')
const info = document.querySelector('.info')
const score = document.querySelector('.score')
score.style.display = "flex"
score.style.gap = "1.5rem"
console.log(score)

const body = document.querySelector('body')
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"


// create function to display no of games played

const noGames = 0

const gameInfo = (gameNo) => {
    const displayInfo = document.createElement('p')
    displayInfo.setAttribute('class', "displayInfo")
    displayInfo.style.fontSize = "1.5rem"
    displayInfo.textContent = `Game ${gameNo} of 5`
    info.append(displayInfo)
}

// gameInfo("5")

const removeGameInfo = () => {
    const para = document.querySelector('.info p')
    info.removeChild(para)
}

// removeGameInfo()
// gameInfo("10")

// display no of games played

let gameNo = 0
const noGamesPlayed = document.createElement('p')
noGamesPlayed.setAttribute('class', 'play')
noGamesPlayed.textContent = 'First to win 5 games. Click on your choice to start game'
info.append(noGamesPlayed)
console.log(noGamesPlayed)

const gameCount = () => {
    gameNo++;
    noGamesPlayed.textContent = `Game number: ${gameNo}`
}




// display scores

// display computer score
const displayComScore = document.createElement('p')
displayComScore.setAttribute('class', "displayComScore")
displayComScore.style.cssText = "font-size: 1rem"
displayComScore.textContent = `Computer Score: `
score.append(displayComScore)

// function to update computer score
const compScore = (cscore) => {
    displayComScore.textContent = `Computer Score: ${cscore}`
}

// display player score
const displayPlayerScore = document.createElement('p')
displayPlayerScore.setAttribute('class', "displayPlayerScore")
displayPlayerScore.style.cssText = "font-size: 1rem"
displayPlayerScore.textContent = `Player Score: `
score.append(displayPlayerScore)

// function to update player score
const updatePlayerScore = (pscore) => {
    displayPlayerScore.textContent = `Player Score: ${pscore}`
}

// display number of draws
const displayDrawInfo = document.createElement('p')
displayDrawInfo.setAttribute('class', "displayDrawInfo")
displayDrawInfo.style.cssText = "font-size: 1rem"
displayDrawInfo.textContent = `Draw: `
score.append(displayDrawInfo)

const displayDrawScore = (dscore) => {
    displayDrawInfo.textContent = `Draw: ${dscore}`
}



const removeComScore = () => {
    const para = document.querySelector('.score p')
    score.removeChild(para)
}

// display player choice
const displayOne = document.createElement('p')
displayOne.setAttribute('class', "display one")
displayOne.style.cssText = "font-size: 1.5rem; color:green"
displayOne.textContent = `Player choice: `
divResults.append(displayOne)

// function to update player choice
const displayPlayerChoice = (choice) => {
    displayOne.textContent = `Player choice: ${choice.toUpperCase()}`
}

// display computer choice
const displayTwo = document.createElement('p')
displayTwo.setAttribute('class', "display two")
displayTwo.style.cssText = "font-size: 1.5rem; color:brown"
displayTwo.textContent = `Computer choice: `
divResults.append(displayTwo)

// function to update computer choice
const displayComputerChoice = (choice) => {
    displayTwo.textContent = `Computer choice: ${choice.toUpperCase()}`
}

// display game result
const displayThree = document.createElement('p')
displayThree.setAttribute('class', "display three")
displayThree.style.cssText = "font-size: 1.5rem; color:purple"
displayThree.textContent = `Result: `
divResults.append(displayThree)
console.log(divResults)

// function to game result
const displayResult = (choice) => {
    displayThree.textContent = `Result: ${choice.toUpperCase()}`
}

// function to display scores
const playerScore = []
const computerScore = []
const drawScore = []


const displayScores = (choice) => {
    choice = choice.split(' ')
    console.log(choice[0])
    choice[0] === 'Draw!' ? drawScore.push(choice[0]): choice[0] === 'Computer' ? computerScore.push(choice[0]) : playerScore.push(choice[0])
    console.log(`Draw: ${drawScore.length}`)
    console.log(`Computer: ${computerScore.length}`)
    console.log(`Player: ${playerScore.length}`)
    compScore(computerScore.length)
    updatePlayerScore(playerScore.length)
    displayDrawScore(drawScore.length)
    displayWinner()
    
}

// display final scores

const displayOverallWinner = document.createElement('p')
displayOverallWinner.setAttribute('class', "display four")
displayOverallWinner.style.cssText = "font-size: 2rem; color:blue"
displayOverallWinner.textContent = ``
divResults.append(displayOverallWinner)

const displayWinner = () => {
    let playerTotal = playerScore.length
    let computerTotal = computerScore.length 
    if (playerTotal === 5){
        displayOverallWinner.textContent = `You win the game!!`
        console.log(playerTotal)
        removeClick()
        newgameButton()
    } else if (computerTotal === 5){
        displayOverallWinner.textContent = `Computer wins the game`
        console.log(computerTotal)
        removeClick()
        newgameButton()
    }
}

// create eventlistener for rock button using named function

const selectRock = (e) => {
    playerSelection = buttons[0].value
    displayPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    displayComputerChoice(computerSelection)
    let x = playRound (playerSelection, computerSelection)
    console.log(x)
    displayResult(x)
    displayScores(x)
    gameCount()
}

rock.addEventListener('click', selectRock)






// create eventlistener for paper button using named function

const selectPaper = (e) => {
    // console.log(buttons[1].value)
    playerSelection = buttons[1].value
    displayPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    displayComputerChoice(computerSelection)
    let x = playRound (playerSelection, computerSelection)
    console.log(x)
    displayResult(x)
    displayScores(x)
    gameCount()
}

paper.addEventListener('click', selectPaper)


// create eventlistener for scissor button using named function

const selectScissor = (e) => {
    playerSelection = buttons[2].value
    displayPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    displayComputerChoice(computerSelection)
    x = playRound (playerSelection, computerSelection)
    displayResult(x)
    displayScores(x)
    gameCount()
}

scissor.addEventListener('click', selectScissor)


// function to remove event listeners

const removeClick = () => {
    rock.removeEventListener('click', selectRock)
    paper.removeEventListener('click', selectPaper)
    scissor.removeEventListener('click', selectScissor)
}


// option to start a new game

const newgameButton = () => {
    const newgameBtn = document.createElement ('button')
    displayOverallWinner.setAttribute('class', "newgame")
    newgameBtn.style.cssText= "font-size: 1rem; background-color:purple; color:white"
    newgameBtn.textContent = "New Game"
    divResults.append(newgameBtn)
    // function to reload page
    const reloadPage = () => {
        location.reload()
    }
    newgameBtn.addEventListener('click', reloadPage)
}










