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
    
    <button id="btnFB">Facebook</button>
    <button id="btnGoogle"> Google</button>
    <button id="btnTwitter">Twitter</button>
    <button style="display: none" id="btnLogOut">Salir</button>
     
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
</body>
</html>>
