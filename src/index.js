
const sectionButton = document.getElementById("Board");
const modalGlobal = document.getElementById("modal")
//butoanele de pe section "+", "-"
var task_count = 0;
const backlog= document.querySelectorAll(".board section");

const addTaskButton = document.getElementById("addTask");
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

// handle click on section button
sectionButton.addEventListener("click",event =>{
  backlog.forEach(section =>{
    if(isDescendant(section, event.target)){
       const buttons = document.querySelectorAll('.task');
       console.log("CHECK")
       buttons.forEach(remove =>{
          if (isDescendant(remove, event.target)) {
          removeTask(remove.id, section);
          return;
      }
       })
           
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
  // console.log(task);
  if(task_id === undefined)
    return;
  // console.log(section);
  task_count--;
    task.className += " fade-out";
  setTimeout(() => {

    section.lastElementChild.removeChild(task);
    //last child to remove from div = tasks
  }, 2000);

}
function rotateFunction(event)
{

  
   event.stopPropagation();
  addTaskButton.className +=" rotate";
  setTimeout(() => {
    addTaskButton.classList.remove("rotate");
  } , 1000);
}
function addTask(title, tag, section)
{

  const template = compileTaskTemplate(title, tag);
   template.id += `${task_count}`; 
  task_count++;
  template.style.display = "block"
  template.className +=" fade-in"
  backlog[section].lastElementChild.appendChild(template)
   
}

addTaskButton.addEventListener("click", rotateFunction);

addTaskButton.addEventListener("click", openShowForm);

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button')
const overlay = document.getElementById('overlay')
function openShowForm(event)
{
    event.stopPropagation();
      openModal(modal);
}
function openModal(modal)
{
  if(modal == null) return
    modal.classList.add("active")
    showForm()
    overlay.classList.add('active')
}
overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal =>{
    closeModal(modal)
  })
})
closeModalButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})
function closeModal(modal){
  if(modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  modal.removeChild(modal.lastElementChild)
}
function showForm()
{
  // const go = document.getElementsByClassName("modal-body")
  // const go = Array.from(document.getElementsByClassName("modal-body"))
  const go = Array.from(document.getElementsByClassName("modal-body")).shift()
  // console.log(go)
  const tamplate = addForm()
  // console.log(tamplate)
  const form = go.insertAdjacentElement("afterend", tamplate)
  
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const {target} = event
    const title = target.querySelector('[name = "title"]')
    const tag = target.querySelector('[name = "tag"]')
    const section = target.querySelector('[name ="section"]')
    // console.log(section)
    // validate data
    addTask(title.value, tag.value, section.value)
    setTimeout(()=>{
      
        closeModal(modalGlobal)
    }, 500)
  })
}
function addForm()
{
  const formString = `
    <form id = "addTaskForm" action="" method="POST">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" value="Title for task">
    <label for="tag">Tag</label>
    <select name="tag" id="tag">
      <option value = "low">LOW</option>
      <option value = "medium">MEDIUM</option>
      <option value = "high">HIGH</option>
      <option value = "urgent">URGENT</option>
    </select>
    <label for="section">Section</label>
    <select name = "section" id="section">
      <option value = "0">BackLog</option>
      <option value = "1">Selected for dev</option>
      <option value = "2">In Progress</option>
      <option value = "3">Done</option>
      </select>
    <button name="submit" type="submit"> Add task</button>
    </form>
  `.trim();
  return compileToNode(formString)
  // return formString
}
function compileToNode(domString) {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div.firstElementChild;
}

// function addTask(backlog) {
//   console.log(backlog);
//   const task = compileTaskTemplate("new task", `${task_count}`);
//   task.style.display = "block";
//   task.className +=" fade-in";
//   task.id += `${task_count}`; 
//   backlog.lastElementChild.appendChild(task);
//   //lastElementChild to append to div = task;
//   task_count++;
 
//   }
// addTaskButton.addEventListener("click", event =>{
//   backlog.forEach(element =>{
//     if(isDescendant(element, event.target)){
     
//       addTask(element);
//     }
//   })
// })
// removeTaskButton.addEventListener('click', event =>{
   
// })
