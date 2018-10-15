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
    <h1>Esta es la homepage</h1>
        
    <button onclick="logOut();">Salir</button>
    <button onclick="mostrarDatos();">Mostrar mis datos</button>

    <div id="most" >
         <h2 id="mostNick">: </h2>
         <h2 id="mostEmail": ></h2>
    </div>    
<script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBJyO2NILFwsEhCe48wj7seAK12ZqZaecg",
    authDomain: "jschat-d63a4.firebaseapp.com",
    databaseURL: "https://jschat-d63a4.firebaseio.com",
    projectId: "jschat-d63a4",
    storageBucket: "jschat-d63a4.appspot.com",
    messagingSenderId: "350703735235"
  };
  firebase.initializeApp(config);
</script>
    <script type="text/javascript" src="main.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


</body>
</html>

