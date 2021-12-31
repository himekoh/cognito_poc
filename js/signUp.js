import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const cognitoUser = await Auth.signUp({
            username,
            password
            // attributes: {
            //     email,          // optional
            //     phone_number,   // optional - E.164 number convention
            //     // other custom attributes 
            // }
        });
        console.log(cognitoUser);
        
        if (cognitoUser.userConfirmed = true) {
            // 確認コード入力用エリア作成
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'confirmCode';
            input.placeholder = 'confirmCode';
            document.getElementById("signup-container").appendChild(input);
            // 確認コード送信用ボタン作成
            const button = document.createElement('input');
            input.type = 'button';
            input.id = 'confirmButton';
            input.value = 'Confirm';
            document.getElementById("signup-container").appendChild(button);
            // 
            document.getElementById("confirmButton").addEventListener("click", function() {
                Auth.confirmSignUp(document.getElementById("email").value, document.getElementById("confirmButton").value).then(() => {
                    console.log("Sign Up Success!!");
                });
            });
        }
    } catch (error) {
        console.log('error signing up:', error);
    }
}

document.getElementById("signUpButton").addEventListener("click", function() {
    Auth.signUp(document.getElementById("email").value ,document.getElementById("password").value);
});


