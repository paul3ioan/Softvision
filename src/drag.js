// const draggables = document.querySelectorAll('.task')
const sections = document.querySelectorAll('section')


sections.forEach(section =>{
	section.addEventListener('dragover', e =>{
		e.preventDefault()
		const afterElement = getDragAfterElement(section, e.clientY)
		const draggable = document.querySelector('.dragging')
	
		if (afterElement == null) {
			{
				section.lastElementChild.appendChild(draggable)
			
			}
		}
		else
		{
			
			section.lastElementChild.insertBefore(draggable, afterElement)
			console.log(section)
			
		}
		let contor = 0
		task_vector.forEach(task =>{
				if(task.template.id === draggable.id)
				{
					backlog.forEach(sect =>{
						if(sect === section)
							{
								task.section = contor;
								
							}
						contor+=1
					})
					console.log(task.section, section,contor)
					
				}
			})
		
	})
})
function getDragAfterElement(container, y){
	const dragableElements = [... container.querySelectorAll('.task:not(.dragging)')]

	return dragableElements.reduce((closest, child) =>{
		const box = child.getBoundingClientRect()
		const offset = y - box.top - box.height / 2
		if(offset < 0 && offset > closest.offset){
			return {offset :offset, element:child}
		}
		else
		{
			return closest
		}
	},{offset :Number.NEGATIVE_INFINITY}).element
}