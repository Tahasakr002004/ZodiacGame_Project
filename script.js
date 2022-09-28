'user strict';
const score1 = document.querySelector('#score--1');
const score2 = document.querySelector('#score--2');
const diceImg = document.querySelector('.dice');
const Rollbtn = document.querySelector('.btn--roll');
const Holdbtn = document.querySelector('.btn--hold');
let currentScore = document.querySelector('.current-score');
const currentSc1 = document.querySelector('#current--1');
const currentSc2 = document.querySelector('#current--2');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const NewReset = document.querySelector('.btn--new');
////////////////////////////////////////////////////////////////////
/**mit den Lösungen beginnen*****/
let t_Score1 = 0;
let t_Score2 = 0;
score1.textContent = 0;
score2.textContent = 0;
let currentPlus = 0;
let still_working = true;
diceImg.classList.add('hidden');
/////////////////////////////////////////////////////
const resetFunc = function () {
  still_working = true;
  diceImg.classList.add('hidden');
  t_Score1 = t_Score2 = currentPlus = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore = document.querySelector('#current--1');
    currentPlus = 0;
    currentSc2.textContent = 0;
  }
};
// SwitchFunc :funktion, für Umtausch
const SwitchFunc = function () {
  if (still_working) {
    if (player1.classList.contains('player--active')) {
      //player1.classList.toggle('player--active');
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      currentScore = document.querySelector('#current--2');
      currentPlus = 0;
      currentSc1.textContent = 0;
    } else if (player2.classList.contains('player--active')) {
      //player2.classList.toggle('player--active');
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      currentScore = document.querySelector('#current--1');
      currentPlus = 0;
      currentSc2.textContent = 0;
    }
    console.log(t_Score1, t_Score2);
  }
};
// RollFunc: funktion für Rollen
const RollFunc = function (x_n) {
  if (still_working) {
    diceImg.classList.remove('hidden');
    diceImg.src = `src/image/dice-${x_n}.png`;
    if (x_n === 1) {
      currentPlus = 0;
      currentScore.textContent = currentPlus;
      SwitchFunc();
    } else {
      currentPlus += x_n;
      currentScore.textContent = currentPlus;
    }
  }
};
Rollbtn.addEventListener('click', function () {
  if (still_working) {
    let num = Math.trunc(Math.random() * 6 + 1);
    console.log(num);
    switch (num) {
      case 1:
        RollFunc(1);
        break;
      case 2:
        RollFunc(num);
        break;
      case 3:
        RollFunc(num);
        break;
      case 4:
        RollFunc(num);
        break;
      case 5:
        RollFunc(num);
        break;
      case 6:
        RollFunc(num);
        break;
    }
  }
});
///////////////////////////////////////////////////
//3-zum anderen Spieler einrichten
Holdbtn.addEventListener('click', function () {
  if (still_working) {
    if (player1.classList.contains('player--active')) {
      t_Score1 += currentPlus;
      if (t_Score1 >= 20) {
        player1.classList.add('player--winner');
        document.querySelector('.label--1').innerHTML = 'Gewinn';
        diceImg.classList.remove('hidden');
        still_working = false;
      }
      score1.textContent = t_Score1;
      SwitchFunc();
    } else if (player2.classList.contains('player--active')) {
      t_Score2 += currentPlus;
      if (t_Score2 >= 20) {
        player2.classList.add('player--winner');
        document.querySelector('.label--2').innerHTML = 'Gewinn';
        diceImg.classList.remove('hidden');
        still_working = false;
      }
      score2.textContent = t_Score2;
      SwitchFunc();
    }
  }
});

/////////////////////////////////////
NewReset.addEventListener('click', resetFunc);
