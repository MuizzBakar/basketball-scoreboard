const homeScoreEl = document.querySelector("#home-score-el");
const awayScoreEl = document.querySelector("#away-score-el");

let oneHomePointBtn = document.querySelector("#one-home-point");
let twoHomePointBtn = document.querySelector("#two-home-points");
let threeHomePointBtn = document.querySelector("#three-home-points");

let oneAwayPointBtn = document.querySelector("#one-away-point");
let twoAwayPointBtn = document.querySelector("#two-away-points");
let threeAwayPointBtn = document.querySelector("#three-away-points");

let homeCount = 0;
let awayCount = 0;

// Function to increase point for the home team score
oneHomePointBtn.addEventListener("click", function () {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
});

twoHomePointBtn.addEventListener("click", function () {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
});

threeHomePointBtn.addEventListener("click", function () {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
});

// Function to increase point for the away team score
oneAwayPointBtn.addEventListener("click", function () {
  awayCount += 1;
  awayScoreEl.textContent = awayCount;
});

twoAwayPointBtn.addEventListener("click", function () {
  awayCount += 2;
  awayScoreEl.textContent = awayCount;
});

threeAwayPointBtn.addEventListener("click", function () {
  awayCount += 3;
  awayScoreEl.textContent = awayCount;
});

// The function below is used when using the addEventListener in the HTML
// function oneHomePoint() {
//   homeCount += 1;
//   homeScoreEl.textContent = homeCount;
// }

// function twoHomePoints() {
//   homeCount += 2;
//   homeScoreEl.textContent = homeCount;
// }

// function threeHomePoints() {
//   homeCount += 3;
//   homeScoreEl.textContent = homeCount;
// }

// function oneAwayPoint() {
//   awayCount += 1;
//   awayScoreEl.textContent = awayCount;
// }

// function twoAwayPoints() {
//   awayCount += 2;
//   awayScoreEl.textContent = awayCount;
// }

// function threeAwayPoints() {
//   awayCount += 3;
//   awayScoreEl.textContent = awayCount;
// }
