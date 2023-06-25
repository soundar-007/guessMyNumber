'use strict';
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
console.log(score);

var random;
function Number() {
  random = Math.floor(Math.random() * 20) + 1;
}
Number();
check.addEventListener('click', () => {
  //when input is correct
  if (input.value !== '') {
    if (input.value == random) {
      message.textContent = '🏆You Win the Game';
      number.textContent = random;
      document.body.style.backgroundColor = 'green';
      if (score.textContent > highScore.textContent) {
        highScore.textContent = score.textContent;
      }
    }
    //when input is high
    else if (input.value > random) {
      if (score.innerHTML > 1) {
        message.textContent = '📈Too High !!!!!';
        score.innerHTML -= 1;
      } else {
        score.innerHTML = '0';
        message.textContent = '😢You are lost the Game !';
      }
    }
    //when input is low
    else if (input.value < random) {
      if (score.innerHTML > 1) {
        message.textContent = '📉Too Low !!!!!';
        score.innerHTML -= 1;
      } else {
        score.innerHTML = '0';
        message.textContent = '😢You are lost the Game !';
      }
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', () => {
  input.value = '';
  score.innerHTML = 20;
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  number.textContent = '?';
  Number();
  
});
