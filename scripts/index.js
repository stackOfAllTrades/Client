 $(document).ready(function() {

     createGoogleButtonHandler();

 })

 function createGoogleButtonHandler() {
     $loginButton = $("#login-button-link");
     $loginButton.attr('href', `${SERVER_URL}/auth/google`);
 }
