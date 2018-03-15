<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.0/css/bootstrap-slider.min.css">
    <script type="text/javascript" src="/Chef/Style/style.js"></script>
    <title>My work</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
        <h1>This is my work</h1>
        
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="Ressources/Caroussel/laravel.png" alt="First slide">
                  <h5>This the work I have been doing on laravel</h5>
                  <p>My github link: www.github.com/opkij</p>
            </div>
          <br>
            <div class="carousel-item">
                <img class="d-block w-100" src="Ressources/Caroussel/php.png" alt="Second slide">
                  <h5>This the work I have been doing on PHP native</h5>
                  <p>My github link : www.github.com/tpo</p>
            </div>

          </div>
          
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div> 
      <?php require('../Vue/piedpage.php');?>
    <!--</div>-->
  </body>
</html>
