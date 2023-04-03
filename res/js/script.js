let prevNum = ''
let calcOperator = ''
let currentNum = '0'

const calculatorScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal-sign")
const ac = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")
const percentage = document.querySelector(".percentage")

//Update displayed number
const screenUpdate = (number) => {
    calculatorScreen.value = number
}

//Get number value(s) and update
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        screenUpdate(currentNum)
    })
})

//Put number value (pressed) to currentNum
const inputNumber = (number) => {
    if (currentNum === '0') {
        currentNum = number
    } else {
        currentNum += number
    }
}

//Get operator value(s)
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//Put operator value to calcOperator & Change variables value
const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNum = currentNum //Put first number input to prevNum
    }
    calcOperator = operator
    currentNum = '0' //Clear currentNum value
}

//Math operation
const calculate = () => {
    let result
    switch (calcOperator) {
        case "+":
            result = parseFloat(prevNum) + parseFloat(currentNum)
            break
        case "-":
            result = parseFloat(prevNum) - parseFloat(currentNum)
            break
        case '*':
            result = parseFloat(prevNum) * parseFloat(currentNum)
            break
        case '/':
            result = parseFloat(prevNum) / parseFloat(currentNum)
            break
        default:
            break
    }
    currentNum = result
    calcOperator = ''
}

//Do calculate() when '=' is pressed and update display
equal.addEventListener("click", () => {
    calculate()
    screenUpdate(currentNum)
})

//Do clear all variables when 'AC' is pressed
ac.addEventListener("click", () => {
    currentNum = '0' //clear all
    prevNum = ''
    calcOperator = ''
    screenUpdate(currentNum)
})

//Do add '.' to display when '.' pressed
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    screenUpdate(currentNum)
})

//Add '.' to currentNum
const inputDecimal = (decimal) => {
    if (currentNum.includes(".")) { //Stop function
        return
    }
    currentNum += decimal
}

//Do times currentNum by 0.001 when '%' is pressed
percentage.addEventListener("click", () => {
    currentNum = prevNum * currentNum * 0.01
    // currentNum += event.target.value
    screenUpdate(currentNum)
})

