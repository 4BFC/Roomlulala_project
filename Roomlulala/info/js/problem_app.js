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

//클릭
function get_ClickBtn(element, option, fn) {
  const name = element.addEventListener(`${option}`, fn);
  return name;
}

//삭제
function remove_Element(element, child) {
  const name = element.remove(child);
  return name;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  console.log(delete_btn);
  element_box.innerHTML = `
    <div class="list_element backColor_element">
      <img class="user_img" src="./img/user.png" alt="">
      <div class="comment">
        <span>guess9</span>
        <span>2023/08/12</span>
        <span>
          ${input_comment.value}
        </span>
      </div>
      <div>
      <button class="delete_btn">❌</button>
      <button class="edit_btn">✍</button>
      </div>
    </div>`;
  // appendChild
  //parent.appendChild(element_box);
  parent.insertBefore(element_box, parent.firstChild);
  element_box.className = `${class_name}`;
  console.log(element_box.className);

  get_ClickBtn(delete_btn, 'click', (e) => {
    target = e.target;
    name = target.parentElement.parentElement.nodeName;
    // 삭제 등의 원하는 동작 수행
    console.log(name);
  });

  return element_box;
}

const button = get_create_Class('user_input');
const input_comment = get_create_Class('input');
const parent_element = get_create_Class('user_comment_list');
const user_ = get_create_Class('user_');

const delete_btn = get_create_Class('delete_btn');
const edit_btn = get_create_Class('edit_btn');

get_ClickBtn(button, 'click', () => {
  get_create_Box('user_', 'li', parent_element);
  console.log('hi');
})

//===============================삭제가 되지 않는 함수 ===============
// const delete_BTN = document.querySelector(".delete_btn");
// delete_btn.addEventListener("click", (e) => {
//   target = e.target;
//   name = target.parentElement.parentElement.nodeName;
//   // const user_ = get_create_Class('user_');
//   // user_.remove;
//   console.log(name);
// })

get_ClickBtn(delete_btn, 'click', () => {
  // remove_Element(parent_element, user_);
  console.log("remove");
})
//===============================삭제가 되지 않는 함수 ===============

parent_element.addEventListener("click", (e) => {
  // e.preventDefault();
  target = e.target;
  if (target.classList.contains("delete_btn")) {
    //target.parentElement.parentElement.remove();//?
    const name = target.parentElement.parentElement.nodeName;
    console.log('check is ' + name);
    //showAlert("Student Data Deleted", "danger");//=>Bootstrap
    //clearFields();
  }

});