<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="Style/style.css">
    <title>Home page</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
      <?#php require __DIR__.'Vue/entete.php';?>
        <h1>Welcome on my personal website</h1>
        <div class="register">
          <a href="Controleur/controleur-registration.php"> Register </a>
          <a href="Controleur/controleur-login.php"> Login </a>
        </div>
        <p>
          Hi, I'm Benjamin Pradon. <br>
          This is my personal website. <br>
          I am a web developer. If you want to know more about me, you'll find more information <a href="Vue/about.php"> here</a>.<br>
          Feel free to <a href="Vue/contact.php"> contact me</a>. <br>
        </p>
      <?#php require __DIR__.'Vue/piedpage.php';?>
    <!--</div>-->
  </body>
</html>
