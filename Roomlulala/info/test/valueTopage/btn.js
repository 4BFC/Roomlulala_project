const Pbtn = document.querySelector('.plus');
const Mbtn = document.querySelector('.minus');
const Reset = document.querySelector('.res');
const value = document.querySelector('span');

window.localStorage.setItem('count', 0);
let count = window.localStorage.getItem('count');



Pbtn.addEventListener('click', () => {
  count++; value.innerText = count;
  console.log(count);
  window.localStorage.setItem('count', count);
});

Mbtn.addEventListener('click', () => {
  count--; value.innerText = count;
  console.log(count);
  window.localStorage.setItem('count', count);
});

Reset.addEventListener('click', () => {
  window.localStorage.setItem('count', 0);
  // window.localStorage.removeItem('count');
})