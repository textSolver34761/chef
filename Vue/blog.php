<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="Style/style.css">
    <link rel="stylesheet" type="text/css" href="Style/semantic.css">
    <link rel="stylesheet" href="Style/glide.core.css">
    <link rel="stylesheet" href="Style/glide.theme.css">
    <script type="text/javascript" src="Style/style.js"></script>
    <title>Blog</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
          <?php if(!isset($_SESSION['nom'])): ?>
            <h1> Welcome to my blog ! </h1>
            <h2> Tips, tutorials and more on chatbots, artificials intelligence </h2>
            <p>
              To access the blog, please register yourself <br>
              You'll find the link to the registration <a href="Controleur/controleur-registration.php"> here</a>.
            </p>
          <?php else: ?>
            <h1> Welcome to my blog <?= $_SESSION ['nom'] ?> ! </h1>
            <h2> Enjoy the tips and tutorials of this blog! </h2>
            <br>
            <button> <a href="/Chef/Controleur/controleur-add.php"> Add </button> </a>
            <button> <a href="/Chef/Controleur/controleur-edit.php"> Edit</button> </a>
            <button> <a href="/Chef/Controleur/controleur-delete.php"> Delete </button> </a>
            <br>
          <?php
          foreach ($blog as $ligne) {
          ?>
          <li>
            <?php echo $ligne['titre'].'<br>'; ?>
            <?php echo $ligne['description'].'<br>'; ?>
            <?php echo $ligne['tag'].'<br>'; ?>
            <?php echo $ligne['contenu'].'<br>'; ?>
          </li>
        <?php
          }
        ?>
        <br>
        <?php endif; ?>
      <?php require('../Vue/piedpage.php');?>
    <!--</div>-->
  </body>
</html>
