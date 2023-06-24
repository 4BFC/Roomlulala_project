// setItem
window.localStorage.setItem('name', 'anna');
window.localStorage.setItem('age', '20');

// getItem
const name = window.localStorage.getItem('name');
const age = window.localStorage.getItem('age');

// 결과 출력
document.write(name); // anna
document.write('<br/>');
document.write(age);  // 20