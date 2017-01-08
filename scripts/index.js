 $(document).ready(function() {

     createGoogleButtonHandler();

 })

 function createGoogleButtonHandler() {
     $loginButton = $("#login-button");
     $loginButton.click(() => {
       window.location.href = `${SERVER_URL}/auth/google`
     })
 }
