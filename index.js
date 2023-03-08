let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeCount = 0
let guestCount = 0

function homefreethrow() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
    console.log(homeCount)
}

function guestfreethrow() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
    console.log(guestCount)
}

function homemidrange() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
    console.log(homeCount)
}

function guestmidrange() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
    console.log(guestCount)
}

function homelongthree() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
    console.log(homeCount)
}

function guestlongthree() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
    console.log(guestCount)
}