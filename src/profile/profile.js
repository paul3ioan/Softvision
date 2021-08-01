const logoutButton = document.getElementById("logout")
logoutButton.addEventListener("click",event =>{
	document.cookie = "name = LogOut; expires = Mon, 20 Aug 2022 : 20:00:00 UTC"
	window.open("../../loginPage.html", "_self")
})