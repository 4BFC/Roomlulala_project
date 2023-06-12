const Pbtn = document.querySelector('.plus');
const Mbtn = document.querySelector('.minus');

const value = document.querySelector('span');

let count = 0;

Pbtn.addEventListener('click', () => { count++; value.innerText = count; console.log(count); });
Mbtn.addEventListener('click', () => { count--; value.innerText = count; console.log(count); })