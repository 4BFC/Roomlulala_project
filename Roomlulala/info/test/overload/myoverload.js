function get_create_box(class_name, element, parent, value) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = value;
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

function create_Box(a, b, c, d, e) {
  if (typeof e === 'function') {
    e(a, b, c, d);
  } else if (typeof d === 'function') {
    d(a, b, c);
  }
}

function callback(class_name, element, parent, value) {
  //
  if (parent) {
    const element_box = get_create_Element(`${element}`);
    // appendChild
    parent.appendChild(element_box);
    element_box.className = `${class_name}`;
    console.log(element_box.className);
    return element_box;
  }
  // 
  else if (value) {
    const element_box = get_create_Element(`${element}`);
    element_box.innerHTML = value;
    // appendChild
    parent.appendChild(element_box);
    element_box.className = `${class_name}`;
    console.log(element_box.className);
    return element_box;
  }

}