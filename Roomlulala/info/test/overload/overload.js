function overload(a, b, c) {
  //함수의 typeof의 위치를 읽으면서 해당 코드가 실행되게 조건문을 만들어야한다.
  //c가 함수일 경우 c에 전달되는 인자들이 해당 함수로 전달된다.
  if (typeof c === 'function') { // 문자열 두 개와 콜백
    c(a, b);
  } else if (typeof b === 'function') { // 옵션 객체와 콜백
    b(a);
  } else { // 콜백 하나
    a();
  }
}

function callback(class_name, value) {
  //b라는 매개변수가 존재할 때 코드가 실행된다.
  if (value) {
    console.log('문자열', class_name, value);
  } else if (class_name) {
    console.log('옵션 객체', class_name);
  } else {
    console.log('매개변수 없음');
  }
}
overload('zero', 'babo', callback); // 문자열 zero babo
overload({ name: 'zero', value: 'babo' }, callback); // 옵션 객체 { name: 'zero', value: 'babo' }
overload(callback); // 매개변수 없음