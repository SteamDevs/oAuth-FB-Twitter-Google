/* Validando desde VanilaJS */
var btnFB = document.getElementById("btnFB");
var btnGoogle = document.getElementById("btnGoogle");
var btnTwitter = document.getElementById("btnTwitter");
var btnLogOut = document.getElementById("btnLogOut");

//Creando una referencia hacia la base de datos
var ref = firebase.database().ref().child("usuario");
var usuario = {};


//Controlando el estado de la sesion
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
  
  //Auth Google
  btnGoogle.addEventListener("click", function(){
    //event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
     //defino en que leguaje le va a salir el Popup de autenticacion
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function(datosUsuario){
    //Renderizando la vista hacia el homepage
    // ocultando momentaneamente window.location.href = "home.php"    
    console.log(datosUsuario);
    usuario = {
        nombre   : datosUsuario.user.displayName,
        email    : datosUsuario.user.email,
        uid      : datosUsuario.user.uid,
        photoURL : datosUsuario.user.photoURL        
      }
      agregarUsuario(usuario, usuario.uid);
    }).catch(function(err){
    console.log(err);
    })    
  });

//Auth Facebook
btnFB.addEventListener("click", function(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');         //Opcional
    firebase.auth().languageCode = 'es';            
    firebase.auth().signInWithPopup(provider).then(function(dataFB){
        console.log(dataFB)
    }).catch(function(err){
        console.log('los errores fueron' + err)
    });
});

//Auth Twitter
btnTwitter.addEventListener("click", function(){
    console.log('Soy la autenticacion de twitter');
});


  //Salir
  btnLogOut.addEventListener("click", function(){
    firebase.auth().signOut();
  })

  function mostrarLogout(){
    console.log("mostrar Logout");
    btnLogOut.style.display = "block";
    btnFB.style.display = "none";
    btnGoogle.style.display = "none";
    btnTwitter.style.display = "none";
  }
  
  function mostrarLogin(){
    console.log("mostrar login");
    btnLogOut.style.display = "none";
    btnFB.style.display = "block";
    btnGoogle.style.display = "block";
    btnTwitter.style.display = "block";
  }

  function agregarUsuario(usuario, uid){
      ref.child(uid).update(usuario);
      console.log(usuario);
  }