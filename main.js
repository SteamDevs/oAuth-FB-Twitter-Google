var provider = new firebase.auth.FacebookAuthProvider();
var userUID;
var user, token;


function signFB(){

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
   
        //window.location.href = "http://stackoverflow.com";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      
        console.log(email);
        console.log(credential);   
        window.location.href = "home.php"; 
        mostrarDatos();
        // ...
      });
}

function logOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('te has salido xdxd');
        window.location.href = "index.php"
      }).catch(function(error) {
        // An error happened.
      });
}



function mostrarDatos(){
    $( document ).ready(function() {
    $("#most").show();
    $("#mostNick").html("Tu Usuario es: " +  user);
    $("#mostEmail").html("Tu token es: " + token);
     
});
} 