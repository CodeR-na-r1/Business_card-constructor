/* function on button event (data transfer)  */
function Apply()
{
  let forms = document.forms.data_for_card;
  for (let i = 0; i < forms.elements.length; i++) {
    let data = forms.elements[i].value ? forms.elements[i].value : '';

    let classname = 'card-preview__' + forms.elements[i].name;  // the class name of the final element
    let res = document.getElementsByClassName(classname); // find the final element

    if (res[0] && data){
      res[0].innerText = data;
    }
  }

  /* set the color value for the final element (for the elements with fio and position) */
  document.getElementsByClassName('card-preview__fio')[0].style.color = color_value_fio;
  document.getElementsByClassName('card-preview__position')[0].style.color = color_value_position;
}

/* function on button event (alignment selection)  */
function set_align()
{
  let divS = document.getElementsByClassName('form-field__align');  // find containers with a choice of alignment (elements fio and position)
  for (let i = 0; i < divS.length; i++) {
    let div = divS[i];
    let field_now = (String(div.getElementsByTagName('input')[0].name)).split('_'); // see which element is being processed (fio or position)
    field_now = field_now[0]; // here value of fio or position
    let res_div = document.getElementsByClassName('card-preview__' + field_now);  //find the final element
    res_div[0].setAttribute('class', 'card-preview__' + field_now); // resetting class values (set a default value)
    let input = div.getElementsByTagName('input');  // find elements with values ​​of the selected alignment
    for (let j = 0; j < input.length; j++) {
      if (input[j].value != " " && input[j].checked)  // if the element is selected, then add an additional class with the alignment value, which is written in the field 'value'
        res_div[0].classList.add(input[j].value);
    }
  }
}

/* function on button event (size selection)  */
function set_size()
{
  let divS = document.getElementsByClassName('form-field__size'); // find containers with a choice of size (elements fio and position)
  for (let i = 0; i < divS.length; i++) {
    let div = divS[i];
    let field_now = (String(div.getElementsByTagName('input')[0].name)).split('_'); // see which element is being processed (fio or position)
    field_now = field_now[0];
    let res_div = document.getElementsByClassName('card-preview__' + field_now);  //find the final element
    let input = div.getElementsByTagName('input');  // find elements with values ​​of the selected alignment
    for (let j = 0; j < input.length; j++) {
      if (input[j].value != " " && input[j].checked)  // if the element is selected, then add an additional class with the size value, which is written in the field 'value'
        res_div[0].classList.add(input[j].value);
    }
  }
}

/*  function to hide/show additional number */
function changePhone()
{
  let add_phone = document.getElementsByClassName('form-field__phoneMore'); // find the first input
  let del_phone = document.getElementsByClassName('form-field__additionalPhone'); // find the first input
  let div_additionalPhone = document.getElementsByClassName('card-preview__additionalPhone'); // find the final element (additional number on the business card)
  /*  switch the display */
  add_phone[0].classList.toggle('hide');
  del_phone[0].classList.toggle('hide');
  div_additionalPhone[0].classList.toggle('hide');
}

/*  function to toggle display of email or address */
function hideInput(class_elem, img_className)
{
  document.getElementsByClassName(class_elem)[0].classList.toggle('hide');
  img = document.getElementsByClassName(img_className)[0];
  img.src = String(img.src).includes('check') ? 'data_pictures/cross.png' : 'data_pictures/check.png';
}

/*  INITIT for function */
var last_elem_color_fio = document.getElementsByClassName('form-field__color__fio__black')[0];
var last_elem_color_position = document.getElementsByClassName('form-field__color__position__01')[0];
var color_value_fio = '#202020';
var color_value_position = '#474747';

/*  function for choosing a color (highlights the selected icon with a color) and storing the color value */
function Apply_color(className, color_value)
{
  let elem = document.getElementsByClassName(className)[0]; // find the element that is selected (circle with color)
  if (String(elem.classList.value).includes('fio')) // if color for fio
  {
    color_value_fio = color_value;  // save value
    last_elem_color_fio.innerHTML = ''; // deselect the previous element (clear circle with last value)
    last_elem_color_fio = elem;
  }
  else // if color for position
  {
    color_value_position = color_value;
    last_elem_color_position.innerHTML = '';
    last_elem_color_position = elem;
  }
  elem.innerHTML = '<div class="form-field__color__checked">';  // set the current item as choosed
}
