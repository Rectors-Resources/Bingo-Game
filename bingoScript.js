const button = document.getElementById('button')
let pickedNumbers = []
const lastNum = document.getElementById('last-num')
const secondNum = document.getElementById('second-num')
const thirdNum = document.getElementById('third-num')
const currNum = document.getElementById('called-number')
const rem = document.getElementById('remaining')
const reset = document.getElementById('reset')
const letterMatch = bingo => {
    if (bingo < 16) {
        return `B-${bingo}`
    } else if (bingo > 15 && bingo < 31) {
        return `I-${bingo}`
    } else if (bingo > 30 && bingo < 46) {
        return `N-${bingo}`
    } else if (bingo > 45 && bingo < 61) {
        return `G-${bingo}`
    } else if (bingo > 60) {
        return `O-${bingo}`
    }
}

const getRemainingNumbers = () => {
    let remain = 75 - pickedNumbers.length
    return remain;
}

const pageReload = () => {
    window.location.reload()
}

const generateBingoNumber = () => {
    
    let rand = Math.floor(Math.random()* 75) + 1;
    let cell = document.getElementById(rand)
    if (pickedNumbers.indexOf(rand) === -1) {
        pickedNumbers.push(rand)
        cell.style.color = '#f35b25'
        currNum.innerHTML = letterMatch(rand)
        lastNum.innerHTML = letterMatch(rand)
        secondNum.innerHTML = letterMatch(pickedNumbers[pickedNumbers.length - 2])
        thirdNum.innerHTML = letterMatch(pickedNumbers[pickedNumbers.length - 3])
        rem.innerHTML = getRemainingNumbers();
        return rand;
    } else {
        generateBingoNumber()
    }

}

const changeButtonText = () => {
    button.innerHTML = 'Next'
    
}


reset.addEventListener('click', pageReload)
button.addEventListener('click', changeButtonText);
button.addEventListener('click', generateBingoNumber) ;
