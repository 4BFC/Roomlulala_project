import { get_create_Class } from "./create_Class.js";
import { get_ClickBtn } from "./ClickBtn.js";
import { clear_Input } from "./clear_Input.js";
import { get_create_Box } from "./create_Box.js";

const button = get_create_Class('user_input');
export const input_comment = get_create_Class('input');
const parent_element = get_create_Class('user_comment_list');

export let selected = null;

//=============================== Add
//댓글 추가 기능
get_ClickBtn(button, 'click', (e) => {
  e.preventDefault();
  //댓글 조건문
  if (input_comment.value == "") {
    alert("댓글을 작성 해주세요.")
  }
  else if (input_comment.value.length < 50) {
    alert("댓글을 50자 이상 작성 해주세요.")
  }
  else {
    if (selected == null) {
      get_create_Box('user_', 'li', parent_element);
    }
    else {
      selected.textContent = input_comment.value
      selected = null;
    }
  }
  clear_Input();
})

//=============================== Delete
//삭제 버튼 이 부분을 명확히 정리해줄 필요가 있다. 다이어그램을 만들어 볼 필요가 있다.
get_ClickBtn(parent_element, 'click', (e) => {
  let target = e.target;
  if (target.classList.contains("delete_btn")) {
    target.parentElement.parentElement.remove();
  }
  // clear_Input();
})

//=============================== Edit
get_ClickBtn(parent_element, "click", (e) => {
  let target = e.target;
  if (target.classList.contains("edit_btn")) {//child searching
    selected = target.parentElement.parentElement.querySelector(".comment_value");//해당 댓글을 지정해야한다.
    input_comment.value = selected.textContent;
  }
  // clear_Input();
});