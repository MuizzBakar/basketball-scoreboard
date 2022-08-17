const homeScoreEl = document.querySelector("#home-score-el");
const awayScoreEl = document.querySelector("#away-score-el");

let homeCount = 0;
let awayCount = 0;

function oneHomePoint() {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
}

function twoHomePoints() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
}

function threeHomePoints() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
}

function oneAwayPoint() {
  awayCount += 1;
  awayScoreEl.textContent = awayCount;
}

function twoAwayPoints() {
  awayCount += 2;
  awayScoreEl.textContent = awayCount;
}

function threeAwayPoints() {
  awayCount += 3;
  awayScoreEl.textContent = awayCount;
}
