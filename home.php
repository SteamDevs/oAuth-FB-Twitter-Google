<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1 id="nickPerfil" >Bienvenido!!: </h1>
<h1 id="uidPerfil"></h1>
<h1 id="usemail"></h1>
<img width="80px" height="80px" id="imgPerfil" src="" alt="imagen_perfil">

 <button style="display: none" id="btnLogOut">Salir</button>
  
<script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnfFNaXvNkvYdo240t4aeFYvMqlnNFJdw",
    authDomain: "twery-4f64e.firebaseapp.com",
    databaseURL: "https://twery-4f64e.firebaseio.com",
    projectId: "twery-4f64e",
    storageBucket: "twery-4f64e.appspot.com",
    messagingSenderId: "552752572805"
  };
  firebase.initializeApp(config);
</script>
<script type="text/javascript" src="main.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</body>
</html>

