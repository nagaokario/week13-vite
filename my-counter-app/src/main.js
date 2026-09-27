import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count">0</p>
  <div class="button-group">
    <button id="btn-increase">増やす</button>
    <button id="btn-decrease">減らす</button>
    <button id="btn-reset">リセット</button>
  </div>
`;

const countEl = document.querySelector('#count');
const btnIncrease = document.querySelector('#btn-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

let count = 0;

// +1 する処理
btnIncrease.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

// -1 する処理
btnDecrease.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

// 0 にリセットする処理
btnReset.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});