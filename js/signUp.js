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

