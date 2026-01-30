let home_score = document.getElementById("home_score");
let guest_score = document.getElementById("GuestScore-el");

// HOME SCORE FUNCTIONS
function add1_H() {
  home_score.innerText = Number(home_score.innerText) + 1;
}

function add2_H() {
  home_score.innerText = Number(home_score.innerText) + 2;
}

function add3_H() {
  home_score.innerText = Number(home_score.innerText) + 3;
}

// GUEST SCORE FUNCTIONS
function add1_G() {
  guest_score.innerText = Number(guest_score.innerText) + 1;
}

function add2_G() {
  guest_score.innerText = Number(guest_score.innerText) + 2;
}

function add3_G() {
  guest_score.innerText = Number(guest_score.innerText) + 3;
}

// RESET FUNCTION
function resetScore() {
  home_score.innerText = 0;
  guest_score.innerText = 0;
}
