import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
document.getElementById("logOutButton").addEventListener("click", function () {
    Auth.signOut().then(() => {
        console.log("Log Out Succeed!");
        window.location.href = '../index.html';
    });
});