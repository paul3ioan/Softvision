
const sectionButton = document.getElementById("Board");
//butoanele de pe section "+", "-"
var task_count = 0;
const backlog= document.querySelectorAll(".board section");
console.log(backlog);
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
// addTaskButton.addEventListener("click", event =>{
//   backlog.forEach(element =>{
//     if(isDescendant(element, event.target)){
     
//       addTask(element);
//     }
//   })
// })
// removeTaskButton.addEventListener('click', event =>{
   
// })
// handle click on section button
sectionButton.addEventListener("click",event =>{
  backlog.forEach(section =>{
    let test = true;
    if(isDescendant(section, event.target)){
       const buttons = document.querySelectorAll('.task');
       
       buttons.forEach(remove =>{
          if (isDescendant(remove, event.target)) {
          test = false;
          removeTask(remove.id, section);
          return;
      }
       })
       if(test === true)
        {
          const button = section.getElementsByTagName("button");
      
          const change = document.getElementById(`${button[0].id}`);
          
            rotateFunction(change);
          addTask(section);  
        }     
    }
  })
})
function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
//remove task
function removeTask(task_id, section)
{
  var task = document.getElementById(`${task_id}`);
  console.log(task);
  if(task_id === undefined)
    return;
  console.log(section);
  task_count--;
    task.className += " fade-out";
  setTimeout(() => {

    section.lastElementChild.removeChild(task);
    //last child to remove from div = tasks
  }, 2000);

}

function addTask(backlog) {
  console.log(backlog);
  const task = compileTaskTemplate("new task", `${task_count}`);
  task.style.display = "block";
  task.className +=" fade-in";
  task.id += `${task_count}`; 
  backlog.lastElementChild.appendChild(task);
  //lastElementChild to append to div = task;
  task_count++;
 
  }
function rotateFunction(button)
{

  console.log(button);

  // event.stopPropagation();
  button.className +=" rotate";
  setTimeout(() => {
    button.classList.remove("rotate");
  } , 1000);
}
