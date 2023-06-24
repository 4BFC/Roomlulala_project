const value = document.querySelector('span');
setInterval(() => {
  console.log('check');
  value.innerText = window.localStorage.getItem('count');
}, 1000);
