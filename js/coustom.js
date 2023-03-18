let music = new Audio("./images/music.mp3")
let turnMusic = new Audio("./images/ting.mp3")
let gameOverMusic = new Audio("./images/gameover.mp3")
let turn = 'X'
let isGameOver = false

// function
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X'
}

// function to check 

// ===========
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "28vw";
            // document.querySelector(".line").style.transform = `translate(${e[3]}%, ${e[4]}%) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "50vw";
        }
    })
}

// main logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxTexts = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        // music.play()
        if (boxTexts.innerText === '') {
            boxTexts.innerText = turn
            turn = changeTurn()
            turnMusic.play()
            checkWin()
            if (!isGameOver) {
                document.querySelector('.info').innerText = 'Turn for ' + turn;
            }
        }
    })
})

// rest button
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'X'
    isGameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.info').innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})