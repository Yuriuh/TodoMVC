function e(selector) {
  return document.querySelector(selector)
}

function taskTpl(title) {
  return (
    '<li class="task">'+
      '<p lass="text">' + title + '</p>'+
      '<span class="close">x</span>'+
    '</li>');
}

var $addTaskInput = e('#add-task-input')
var $jsAddTask = e('#js-add-task')
var $content = e('.todoList-content')

// 监听回车事件
$addTaskInput.addEventListener('keyup', e => e.keyCode === 13 && addTodo())

// 为添加按钮绑定事件
$jsAddTask.addEventListener('click', addTodo)

function addTodo() {
  var newTaskTitle = $addTaskInput.value.trim()
  if (newTaskTitle === '') return
  var newTaskHtml = taskTpl(newTaskTitle)
  $content.insertAdjacentHTML('beforeend', newTaskHtml)
  $addTaskInput.value = ''
}

// 使用事件委托绑定任务元素点击事件
$content.addEventListener('click', function(event) {
  console.log('content clicked')
  const target = event.target
  if (target.className !== 'close') return
  const task = target.closest('.task')
  task.remove()
})

// 绑定完成状态
$content.addEventListener('click', function(event) {
  const target = event.target
  if (target.className === 'close') return
  const task = target.closest('.task')
  task.classList.toggle('checked')
})