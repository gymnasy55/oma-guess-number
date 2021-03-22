var targetNumber, prevNumber, tries, attempts;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;

  var random = Math.floor(Math.random() * (max - min)) + min; //[min, max + 1) === [min, max]

  return random;
}

function loaded() {
  var min, max;

  if(localStorage.getItem('config') === undefined) {
    min = 1;
    max = 100;
    attempts = 5;
  } else {
    var config = JSON.parse(localStorage.getItem('config'));
    min = config.min;
    max = config.max;
    attempts = config.attempts;
  }

  targetNumber = getRandomInt(min, max);
  tries = 0;
  console.log(targetNumber);

  document.getElementById('helloLabel').innerHTML = 
  `Привет, я загадал число от ${min} до ${max} вашего диапазона. Попробуй угадать его за ${attempts} попыток!`;
}

document.addEventListener('DOMContentLoaded', loaded);

function guess() {
  var number = Number(document.getElementById('numberInput').value);
  var helpLabel = document.getElementById('helpLabel');
  tries++;

  if(number === targetNumber) {
    helpLabel.innerHTML = `Поздравляю! Ты угадал задуманное число за ${tries} попыток. Через 5 секунд вернешься на страницу настроек.`;
    setTimeout(function() {
      window.location.href = './index.html';
    }, 5000);
    return;
  }

  if(attempts - tries === 0) {
    helpLabel.innerHTML = 'К сожалению ты проиграл! Через 5 секунд вернешься на страницу настроек!';
    setTimeout(function() {
      window.location.href = './index.html';
    }, 5000);
    return;
  }

  if(prevNumber === undefined) {
    helpLabel.innerHTML = 'Не угадал :( Давай попробуй еще раз.';
  } else {
    if(Math.abs(targetNumber - number) > Math.abs(targetNumber - prevNumber)) {
      helpLabel.innerHTML = `Не угадал, холоднее...\nОсталось ${attempts-tries} попыток`;
    } else {
      helpLabel.innerHTML = `Не угадал, теплее...\nОсталось ${attempts-tries} попыток`;
    }
  }

  prevNumber = number;
}

document.getElementById('btnGuess').addEventListener('click', guess);

function exit() {
  window.location.href = './index.html';
}

document.getElementById('btnExit').addEventListener('click', exit);