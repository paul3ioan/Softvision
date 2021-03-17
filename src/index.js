var task_list = []; // array for all tasks
const backlog = document.querySelector(".board section:first-child .tasks");
const addTaskButton = document.getElementById("addTask");
const removeTaskButton = document.getElementById("removeTask");
document.querySelectorAll("section").forEach((div) =>{
	div.style.cssText ="background-color :#ff0000: border: 1px solid #000";
});
// create the new task
function compileTaskTemplate(title, tag) {
  let newDiv = document.createElement("div");
  newDiv = document.getElementById("example");
  const compileTemplate = newDiv.outerHTML;
  const div = document.createElement("div");
  div.innerHTML = compileTemplate
  .replace("{title}", title)
  .replace("{tag}",tag);

 return div.firstElementChild;
}
//remove task
function removeTask(event)
{
  
  event.stopPropagation();
  let task = task_list.pop();
  if(task == undefined)
    return;
  if( task[1] !== undefined)
    task[1].className += " fade-out";
  setTimeout(() => {
    backlog.removeChild(task[1]);
  }, 2000);

}

removeTaskButton.addEventListener("click", removeTask);

function addTask(event) {
  event.stopPropagation();
  const task = compileTaskTemplate("new task", "urgent-1");
  task.style.display = "block";
  task.className +=" fade-in";
  let info = [backlog, task];
  task_list.push(info);
    backlog.appendChild(task);
  
}

addTaskButton.addEventListener("click", addTask);

function rotateFunction(event)
{
  event.stopPropagation();
  addTaskButton.className +=" rotate";
  setTimeout(() => {
    addTaskButton.classList.remove("rotate");
  } , 1000);
}

addTaskButton.addEventListener("click", rotateFunction);
