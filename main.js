/* Validando desde VanilaJS */
var btnFB = document.getElementById("btnFB");
var btnGoogle = document.getElementById("btnGoogle");
var btnTwitter = document.getElementById("btnTwitter");
var btnLogOut = document.getElementById("btnLogOut");

//Creando una referencia hacia la base de datos
var ref = firebase.database().ref().child("usuario");
var usuario = {};

//Cargando la informacion hacia la base de datos
var nickPerfil = document.getElementById("nickPerfil"); 
var uidPerfil = document.getElementById("uidPerfil");
var email = document.getElementById("email");
var imgPerfil = document.getElementById("imgPerfil")
//var imgPerfil = document.getElementById("imgPerfil").src = 'https://lh5.googleusercontent.com/-ymYVK4Gd32Y/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbChCo2ZC4zoc4mqhCQpDDL56xykxg/mo/photo.jpg'; //Imagen demo

//Controlando el estado de la sesion
firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if (user) {
      console.log("Tienes una sesion activa");
      getDataDB(user.uid);
      mostrarLogout()      
    }else{
      //window.location.href = "home.php";
      console.log("No se detecta ninguna sesion");
      mostrarLogin();
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
      window.location.href = "home.php";
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


  //Funciones respectivas del homePage

  function getDataDB(uid){
    ref.child(uid).on("value", function(data){
      console.log(data.val())
      setDataHTML(data.val().nombre, data.val().uid, data.val().email, data.val().img);
    })
  }

  function setDataHTML(nombre, uid, email, img ){
    nickPerfil.innerHTML = nombre;
    uidPerfil.innerHTML = uid;
    usemail.innerHTML = email;
    imgPerfil.innerHTML = img;
}
