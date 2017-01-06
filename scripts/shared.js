$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const CLIENT_URL = getClientBaseURL();
const SERVER_URL = getServerBaseURL();

function getClientBaseURL(){
  if(window.location.hostname == "localhost"){
    return "http://localhost:8080"
  }
  else{
    return "https://a-denver-to-remember.firebaseapp.com"
  }
}

function getServerBaseURL(){
  if(window.location.hostname == "localhost"){
    return "http://localhost:3000"
  }
  else{
    return "https://stack-of-all-trade.herokuapp.com"
  }
}
