<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
    <script type="text/javascript" src="/Chef/Style/style.js"></script>
    <title>Blog</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
          <?php if(!isset($_SESSION['nom'])): ?>
            <h1 class="center"> Welcome to my blog ! </h1>
            <h2 class="center"> Tips, tutorials and more on chatbots, artificials intelligence </h2>
            <p>
              To access the blog, please register yourself <br>
              You'll find the link to the registration <a href="/Chef/Controleur/controleur-registration.php"> here</a> or you can login  <a href="/Chef/Controleur/controleur-login.php"> here</a>.
            </p>
          <?php else: ?>
            <h1 class="center"> Welcome to my blog <?= $_SESSION ['nom'] ?> ! </h1>
            <h2 class="center"> Enjoy the tips and tutorials of this blog! </h2>
            <br>
            <button class="ui small black button"> <a href="/Chef/Controleur/controleur-add.php"> Add an article </button> </a>
            <br>
          <?php
          foreach ($blog as $ligne) {
          ?>
          <br>
          <button class="ui small black button"> <a href="/Chef/Controleur/controleur-edit?id=<?php echo $ligne["id"]; ?>"> Edit the article</button> </a>
          <button class="ui small black button"> <a href="/Chef/Controleur/controleur-delete?id=<?php echo $ligne["id"]; ?>"> Delete the article </button> </a> <br>
            <?php echo $ligne['titre'].'<br>'; ?><br>
            <?php echo $ligne['description'].'<br>'; ?><br>
            <?php echo $ligne['contenu'].'<br>'; ?> <br> <br> <!-- créer un template : https://openclassrooms.com/courses/adoptez-une-architecture-mvc-en-php/creer-un-template-de-page !-->
        <?php
          }
        ?>
        <br>
        <?php endif; ?>
    <!--</div>-->
  </body>
</html>