function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str); 
  }
  return todos;
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show() {
  var todos = get_todos();
  var html = '<ul>';
  for(var i=0; i<todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
  };
  html += '</ul>';
  document.getElementById('todos').innerHTML = html;
  var buttons = document.getElementsByClassName('remove');
  for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  };
}
document.getElementById('add').addEventListener('click', add);
show();
/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

