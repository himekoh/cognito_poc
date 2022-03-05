import { Auth } from "aws-amplify";

async function signOut() {
	try {
		await Auth.signOut();
	} catch (error) {
		console.log("error signing out: ", error);
	}
}
var tokenGetButton = document.getElementById("tokenGetButton");
if (tokenGetButton) {
	tokenGetButton.addEventListener("click", function () {
		Auth.currentSession()
			.then((session) => {
				console.log("Token get start!");
				// document.getElementById("signInButton").style.display = "none";
				// document.getElementById("signOutButton").style.display = "block";
				document.getElementById("displayArea").innerText = JSON.stringify(
					session,
					null,
					2
				);
			})
			.catch((e) => {
				console.log("token get error");
				console.log(e);
			})
	});
};
var logOutButton = document.getElementById("logOutButton");
if (logOutButton) {
	logOutButton.addEventListener("click", function () {
		Auth.signOut().then(() => {
			console.log("Log Out Succeed!");
			window.location.href = "../index.html";
		});
	});
};

