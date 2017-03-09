import React from 'react';
import ReactDom from 'react-dom';
import Game from './Game.jsx';
import ClockBoard from './ClockBoard.jsx';
import ToggleButton from './modules/ToggleButton.jsx'
import ListOfNumbers from './modules/ListOfNumbers.jsx'
import Timer from './modules/Timer.jsx'

ReactDom.render(
  <Game />,
  document.getElementById('container')
);

ReactDom.render(
  <ClockBoard />,
  document.getElementById('clockcontainer')
);

ReactDom.render(
  <Timer date={ new Date() } />,
  document.getElementById('timercontainer')
);

ReactDom.render(
  <ToggleButton />,
  document.getElementById('buttoncontainer')
);

const numbersRange = [2,3,4,5,6,7,8];

ReactDom.render(
  <ListOfNumbers numbers={numbersRange} />,
  document.getElementById('listcontainer')
);

window.addEventListener('mousedown', function(e) {
  document.body.classList.add('mouse-navigation');
  document.body.classList.remove('kbd-navigation');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('kbd-navigation');
    document.body.classList.remove('mouse-navigation');
  }
});

window.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});

window.onerror = function(message, source, line, col, error) {
  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
  errors.textContent += text + '\n';
  errors.style.display = '';
};

console.error = (function(old) {
  return function error() {
    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
    errors.style.display = '';
    old.apply(this, arguments);
  }
})(console.error);

if (window && window.Worker) {
  document.getElementById('start-worker').addEventListener('click', (e) => {
      var wrkr = new Worker("workers/worker.js");
      wrkr.postMessage('hey asshole!');
      console.warn('message posted to worker');
      wrkr.onmessage = (e => console.warn('message from worker received ' + e.data));
      //wrkr.terminate();
  });


}

