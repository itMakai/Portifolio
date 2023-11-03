
let response = document.getElementById("response");

response.addEventListener("submit", (e)=> {e.preventDefault();

	let firstName = document.getElementById("firstName");
	let lastName = document.getElementById("lastName");
	let email = document.getElementById("email");
	let text = document.getElementById("textarea");

	document.querySelector("submit") = console.log(firstName.value);

	firstName.value = "";
	lastName.value = "";
	email.value = "";
	text.value = "";
});
