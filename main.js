function submitProblem() {
	var problem = document.getElementById("problemInput").value;
	localStorage.setItem("clientProblem", problem);
	alert("Thank you for sharing your problem!");
	document.getElementById("problemInput").value = "";
}

window.onload = function () {
	var savedProblem = localStorage.getItem("clientProblem");
	if (savedProblem) {
		console.log("Client's problem: " + savedProblem);
	}
};
