const addSearchButton = document.getElementById("searchTask")
const board = document.getElementsByTagName("main")

const mainn = board[0]
console.log(mainn)
addSearchButton.addEventListener("click", event =>{
	const searchBar = document.getElementById("searchBar")
	if(searchBar === null)
	openSearchBar()
	else
		mainn.removeChild(searchBar)
})
function openSearchBar()
{

	div = document.createElement("div");
	div.id ="searchBar"
	div.innerHTML = searchForm();
	console.log(div)
	mainn.insertAdjacentElement('afterbegin', div);
	const input = document.getElementById("searchSubmit")
	const searchBar = document.getElementById("searchBar")
	input.addEventListener('keyup', (e) =>{
		if(e.keyCode === 13)
			{showTaskByName(e.target.value)
				
				mainn.removeChild(searchBar)
			}

	})
}
function searchForm()
{
	const createString = '<input id = "searchSubmit" type="text" placeholder="Search..">'
	return createString;
}
function showTaskByName(value)
{
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
	value = value.toLowerCase()
	task_vector.forEach(element =>{
		let title = element.title.toLowerCase()
		let found = title.match(value)
		if(found !== null)
			{
				// console.log(element)
				backlog[element.section].lastElementChild.appendChild(element.template)
			}
	})
}