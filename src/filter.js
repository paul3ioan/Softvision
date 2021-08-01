class filter{
	constructor(){
		const filterButton = document.getElementById("filters")
		filterButton.addEventListener("click", () => {
    const modal = document.getElementById("modalFilter")
    const overlay = document.getElementById('overlay')
    openModal(modal)
	})	
	
function openModal(modal) {
  console.log("works!")
  if (modal == null) return
  
  modal.classList.add('active')
  showForm()
  overlay.classList.add('active')
}
	overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

	function closeModal(modal) {
	
  if (modal == null) return
  modal.classList.remove('active')

  overlay.classList.remove('active')
  modal.removeChild(modal.lastElementChild)
}
	function showForm()
{
	console.log("MERGI TEROG")
  // const go = document.getElementsByClassName("modal-body")
  // const go = Array.from(document.getElementsByClassName("modal-body"))
  const go = Array.from(document.getElementsByClassName("modal-body-filter")).shift()
  
  // console.log(go)
  const tamplate = addForm()
 
  // console.log(tamplate)
  const form = go.insertAdjacentElement("afterend", tamplate)
  
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const {target} = event
    
    // console.log(section)
    // validate data
    filterShow(tag.value)
    const modal = document.getElementById("modalFilter")
      
        closeModal(modal)

    
  })
}
function addForm()
{
  const formString = `
    <form id = "filterTaskForm" action="" method="POST">
    <select name="tag" id="tag">
      <option value = "low">LOW</option>
      <option value = "medium">MEDIUM</option>
      <option value = "high">HIGH</option>
      <option value = "urgent">URGENT</option>
      <option value = "none"> NONE </option>
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
	function filterShow(tag)
	{
		console.log(tag)
		const sections = document.querySelectorAll("section")
		
		sections.forEach(element =>{
			
			var tasks_list = element.lastElementChild
			// console.log(element.lastElementChild)
			
			while(tasks_list.length !== 0)
			{
				if(tasks_list.lastElementChild === null)
					break

				 console.log(tasks_list)
				tasks_list.removeChild(tasks_list.lastElementChild);
				
			}

		})
		task_vector.forEach(element =>{
			console.log(element.tag)
			if(tag === "none")
			{
				backlog[element.section].lastElementChild.appendChild(element.template)
			}
			else
			if(element.tag === tag)
			{
				
				console.log(element.template)
				backlog[element.section].lastElementChild.appendChild(element.template)
			}
		})
	}
}
}
const filterr = new filter()
