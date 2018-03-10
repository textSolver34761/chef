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
    <title>My work</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('../Vue/entete.php');?>
        <h1>This is my work</h1>
        <div class="module module--horizontal">
          <div id="Carousel" class="glide">
            <div class="glide__arrows">
              <button class="glide__arrow prev" data-glide-dir="<">prev</button>
              <button class="glide__arrow next" data-glide-dir=">">next</button>
            </div>
            <div class="glide__wrapper">
              <ul class="glide__track">
              
                <li class="glide__slide" data-glide-autoplay="1000">
                  <img src="http://placehold.it/350x150">
                </li>
              
                <li class="glide__slide" data-glide-autoplay="3000">
                  <img src="http://placehold.it/350x150">
                </li>
              
                <li class="glide__slide" data-glide-autoplay="5000">
                  <img src="http://placehold.it/350x150">
                </li>
              
              </ul>
            </div>
            <div class="glide__bullets"></div>
          </div>
        </div>  
      <?php require('../Vue/piedpage.php');?>
      <script src="http://code.jquery.com/jquery-latest.min.js"></script>
      <script src="Style/jquery.glide.js"></script>
      <script src="Style/glide.js"></script>
    <!--</div>-->
  </body>
</html>
