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
    <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-firestore.js"></script>     
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
</body>
</html>>
