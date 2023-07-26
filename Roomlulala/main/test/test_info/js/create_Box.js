import { get_create_Element } from "./create_Element.js";
import { input_comment } from "./app.js";
import { clear_Input } from "./clear_Input.js";

export function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = `
    <div class="list_element backColor_element">
      <img class="user_img" src="./img/user.png" alt="">
      <div class="comment">
        <span>guess9</span>
        <span>2023/08/12</span>
        <span class="comment_value">
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

  clear_Input();
  // selected = null;

  return element_box;
}