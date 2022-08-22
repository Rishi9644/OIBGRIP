document.getElementById('from1').addEventListener('submit', saveTask);

function saveTask(e) 
{
    let task_name = document.getElementById('name').value;
  let description = document.getElementById('description').value;

  let task = {
    task_name,
    description
  };

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
 
  
  document.getElementById('from1').reset();
  e.preventDefault();


}
// Delete To-Do 
function deleteTask(task_name) 
{
 
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task_name == task_name) {
        tasks.splice(i, 1);
      }
    }
   
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
  }


   
// Show To-Do List
function getTasks() {
 
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
   
    for (let i = 0; i < tasks.length; i++) {
      let task_name = tasks[i].task_name;
      let description = tasks[i].description;
   
      tasksView.innerHTML +=
        ` <div class="row">
            <div class="tit">
              <p>&nbsp;(&nbsp;${i+1}&nbsp;)&nbsp;${task_name}&nbsp;&nbsp;:</p>
            </div>
            <div class="des">
              <p>&nbsp;&nbsp;${description}</p>
            </div>
            <div class="del">
              <a href="#" onclick="deleteTask('${task_name}')" class="btn2">&nbsp;&nbsp;DELETE&nbsp;&nbsp;&nbsp;</a>
            </div>
          </div>  
         </div>
        </div>`;
    }
   
  }
   
  getTasks();

