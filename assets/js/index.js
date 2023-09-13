const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const ymnojBtn = document.querySelector('.ymnoj')
const delitBtn = document.querySelector('.delit')
const korenBtn = document.querySelector('.koren')
const resultBtn = document.querySelector('.resultBtn')
const resultElement = document.querySelector('.result')

resultBtn.onclick = function () {

}

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
ymnojBtn.onclick = function () {
    action = '*'
}
delitBtn.onclick = function () {
    action = '/'
}
korenBtn.onclick = function () {
    action = '√'
}


function printResult (result){
    if (result < 0){
        resultElement.style.color= 'red'
    } else {
        resultElement.style.color= 'green'
    }
    resultElement.textContent= result

}


resultBtn.onclick = function () {
    if (action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    } else if (action === '/') {
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    } else {
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }

}