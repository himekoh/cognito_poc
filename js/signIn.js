import { Auth } from 'aws-amplify';

async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

var logInButton = document.getElementById("logInButton");
if (logInButton) {
    logInButton.addEventListener("click", function () {
        Auth.signIn(
            document.getElementById("email").value,
            document.getElementById("password").value
        ).then(() => {
            console.log("Log In Succeed!");
            window.location.href = "soluvision/index.html";
        });
    });
}



