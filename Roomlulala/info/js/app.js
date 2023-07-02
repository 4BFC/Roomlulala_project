//객체 지정 함수
function get_create_Class(element) {
  const name = document.querySelector(`.${element}`);
  return name;
}

//객체 생성 함수
function get_create_Element(option) {
  const name = document.createElement(option);
  return name;
}

function get_ClickBtn(element, option, fn) {
  const name = element.addEventListener(`${option}`, fn);
  return name;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = `<div class="list_element backColor_element">
    <img class="user_img" src="./img/user.png" alt="">
    <div class="comment">
      <span>guess9</span>
      <span>2023/08/12</span>
      <span>
        평일 낮 방문인데도 대기손님이 좀 계셔서 놀랬어요. 친절하게 잘 안내해주셔서 처음부터 끝까지 잘 안내 해주셔서 몰입을 더 잘할 수 있었어요.
      </span>
    </div>

  </div>`;
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

const button = get_create_Class('user_input');
const parent_element = get_create_Class('user_comment_list');

get_ClickBtn(button, 'click', () => {
  get_create_Box('user_', 'li', parent_element);
  console.log('hi');
})