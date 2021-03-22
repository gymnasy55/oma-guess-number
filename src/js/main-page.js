function start() {
  var min = Number(document.getElementById('minNumberInput').value);
  var max = Number(document.getElementById('maxNumberInput').value);
  var attempts = Number(document.getElementById('numberAttemptsInput').value);

  if(min > 0 && min <= 200 && max >= min && max <= 200
      && min === parseInt(min) && max === parseInt(max)
      && attempts > 0 && attempts <= 15 && attempts === parseInt(attempts)) {
    var config = {
      "min": min,
      "max": max,
      "attempts": attempts
    }

    localStorage.setItem('config', JSON.stringify(config));

    window.location.href= './game.html';
  } else {
    document.getElementById('errorLabel').innerHTML = 'Ошибка при вводе данных!';
  }
}

document.getElementById('btnStart').addEventListener('click', start)

// HTML - схема
// CSS - вид схемы
// JS - поведение схемы