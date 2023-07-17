https://choa-ri.tistory.com/74
https://i-ri.tistory.com/39
https://powerku.tistory.com/114

* event를 사용하지 않고도 problem.js에서의 코드를 사용할 수 있는 방법은?
* value와 textContent의 차이는?
* click과 submit의 차이는?
[link]{https://webdir.tistory.com/421}
* e.target을 이용한 이벤트 핸들러

* 아래 두개의 방법의 차이가 무엇인가.
```
selected = target.parentElement.parentElement.querySelector(".comment_value").textContent;
```
```
function get_create_Element(option) {
  const name = document.createElement(option);
  return name;
}
const comment_value = get_create_Class('comment_value');
selected = target.parentElement.parentElement.comment_value.textContent;
```

* JS의 스코프란 무엇인가.