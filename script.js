// let num1 = 12
// let num2 = 5

// document.getElementById("home-num").textContent = num1
// document.getElementById("guest-num").textContent = num2

let homeResult = document.getElementById("home-num")
let guestResult = document.getElementById("guest-num")

let homeScore = 0
let guestScore = 0

function hButton_num1() {
    homeScore += 1
    homeResult.textContent = homeScore
}

function hButton_num2() {
    homeScore += 2
    homeResult.textContent = homeScore
}

function hButton_num3() {
    homeScore += 3
    homeResult.textContent = homeScore
}

function gButton_num1() {
    guestScore += 1
    guestResult.textContent = guestScore
}

function gButton_num2() {
    guestScore += 2
    guestResult.textContent = guestScore
}

function gButton_num3() {
    guestScore += 3  
    guestResult.textContent = guestScore
}


