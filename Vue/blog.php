<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="Style/style.css">
    <script type="text/javascript" src="style.js"></script>
    <title>Blog</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('Vue/entete.php');?>
        <h1>Welcome to my blog!</h1>
        <h2> Tips, tutorials and more on chatbots, artificials intelligence</h2>
        <p>
            To access the blog, please register yourself <br>
            You'll find the link to the registration <a href="Controleur/controleur-registration.php"> here</a>.
        </p>
        <?php
        if(isset($_SESSION['nom']) && 'role'==0 $$ 'role' == 1){
            echo '<h2> Welcome '.$_SESSION [prenom]. [nom].' </h2>';
            echo '<h2> Enjoy the tips and tutorials on this blog! </h2>';
        }
        ?>
      <?php require('Vue/piedpage.php');?>
    <!--</div>-->
  </body>
</html>
