var submitButton = document.getElementById('submit');

storage = window.localStorage
function addStorage()
{
	let map = new Map()
	map["admin"] = 'admina'
	storage.setItem('admin', 'admina')
	storage.setItem('paul', 'paula')
	console.log(localStorage)
}
var info = ["admina"]
// storage.removeItem('admin')
// storage.setItem('admin', JSON.stringify(info))
var info2 = ["adad"]
storage.setItem('admina', JSON.stringify(info))
// addStorage()
submitButton.addEventListener('click' ,event=>{
	event.preventDefault()
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	console.log(username)
	let info = storage.getItem(username)
	let data = JSON.parse(info)
	if(data === null)
	{

		console.log("nu merge")
		location.reload()
		alert("Wrong username or password")
		return	
	}
	if(data[0] == password)
	{
		console.log("MERGE")
		// fetch("../../index.html").then((response) => response.json()).then(result => console.log(result))
		document.cookie = `name = ${username} expires = Mon, 20 Aug 2022 : 20:00:00 UTC`
		window.open("../../index.html", "_self")
	}
	else
	{
		console.log("nu merge")
		location.reload()
		alert("Wrong username or password")
	}

})
