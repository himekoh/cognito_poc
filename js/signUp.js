import { Auth } from "aws-amplify";

async function signUp() {
	try {
		const cognitoUser = await Auth.signUp({
			username,
			password,
			attributes: {
				// email,          // optional
				phone_number, // optional - E.164 number convention
				//     // other custom attributes
			},
		});
		console.log("SignUp now!");
	} catch (error) {
		console.log("error signing up:", error);
	}
}
var signUpButton = document.getElementById("signUpButton");
if (signUpButton) {
	signUpButton.addEventListener("click", function () {
		try {
			const param = {
				username: document.getElementById("email").value,
				password: document.getElementById("password").value,
				attributes: {
					// email: document.getElementById("email").value,
					phone_number: document.getElementById("phonenumber").value,
				},
			};
			Auth.signUp(param).then(() => {
				// // 確認コード入力用エリア作成
				// const input = document.createElement('input');
				// input.setAttribute("type","text");
				// input.setAttribute("id", "confirmcode");
				// input.setAttribute("placeholder","confirmCode");
				// document.getElementById("signup-container").appendChild(input);
				// // 確認コード送信用ボタン作成
				// const button = document.createElement('input');
				// input.type = 'button';
				// input.id = 'confirmButton';
				// input.value = 'Confirm';
				// document.getElementById("signup-container").appendChild(button);
				//
				console.log("Sign Up (not confirmed)");
			});
		} catch (error) {
			console.log("error signing up:", error);
		}
	});
}
// var confirmButton = document.getElementById("confirmButton");
// if (confirmButton) {
// 	confirmButton.addEventListener("click", function () {
// 		Auth.confirmSignUp(
// 			document.getElementById("email").value,
// 			document.getElementById("confirmcode").value
// 		).then(() => {
// 			console.log("Sign Up Succeed!");
// 		});
// 	});
// }
