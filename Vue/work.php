<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../Chef/Style/style.css">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
    <script type="text/javascript" src="/Chef/Style/style.js"></script>
    <title>My work</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
        <h1>This is my work</h1>
        <div id="slider">
            <div id="box">
              <img src="/Chef/Ressources/Caroussel/laravel.png">
            </div>
            <!-- Button to control the caroussel -->
            <button class="prew" onclick "prewImage()">-</button>
            <button class="next" onclick "nextImage()">+</button>

        </div> 
      <?php require('../Vue/piedpage.php');?>
      <script src="http://code.jquery.com/jquery-latest.min.js"></script>
      <script src="Style/jquery.glide.js"></script>
      <script src="Style/glide.js"></script>
    <!--</div>-->
  </body>
</html>
