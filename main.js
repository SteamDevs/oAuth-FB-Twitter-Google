//Todo el objeto firebase
//console.log(firebase)

/* Validando desde VanilaJS */
var btnFB = document.getElementById("btnFB");
var btnGoogle = document.getElementById("btnGoogle");
var btnTwitter = document.getElementById("btnTwitter");

var btnLogOut = document.getElementById("btnLogOut");

firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if (user) {
      console.log("Tienes una sesion activa");
      mostrarLogout()      
    }else{
      console.log("No se detecta ninguna sesion");
      mostrarLogin()
    }
  });
  
  //Login Google

  btnGoogle.addEventListener("click", function(){
    //event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
     //defino en que leguaje le va a salir el Popup de autenticacion
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function(datosUsuario){
   console.log(datosUsuario);
    }).catch(function(err){
    console.log(err);
    })    
  });

  btnLogOut.addEventListener("click", function(){
    firebase.auth().signOut();
  })

  function mostrarLogout(){
    console.log("mostrar Logout");
    btnLogOut.style.display = "block";
    btnFB.style.display = "block";
    btnGoogle.style.display = "block";
    btnTwitter.style.display = "block";
  }
  
  function mostrarLogin(){
    console.log("mostrar login");
    btnLogOut.style.display = "none";
    btnFB.style.display = "block";
    btnGoogle.style.display = "block";
    btnTwitter.style.display = "block";
  }