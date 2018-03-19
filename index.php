<!doctype html>
<?php session_start();?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
    <script type="text/javascript" src="/Chef/Style/style.js"></script>
    <title>Home page</title>
  </head>
  <body>
    <!--<div class="bgimg">-->
    <?php require('Vue/entete.php');?>
    <?php require('Vue/recherche.php');?>
        <h1 class="center">Welcome on my personal website</h1>
        <br>
        <div class="ui items">
          <div class="item">
            <a class="ui tiny image">
            <img src="/Chef/Ressources/Avatar/PhotoID.jpg">
            </a>
            <div class="content">
              <a class="header">Hi, I'm Benjamin Pradon</a>
              <div class="description">
              <p>
                  This is my personal website. <br>
                  I am a web developer. If you want to know more about me, you'll find more information <a href="Vue/about.php"> here</a>.<br>
                  Feel free to <a href="Vue/contact.php"> contact me</a>. <br>
                  Because I am really interested in working in Artificial Intelligence, I made a chatbot that you can find <a href="https://landbot.io/u/H-27113-GJVK3FFB9B71354C/index.html"> here </a>. <br>
                  Finnally, I give some tips on how to build a chatbot.<br>
                  If you want to have a closer look, feel free to <a href="/Chef/Controleur/controleur-registration.php">register </a> and have a look at my <a href="/Chef/Controleur/controleur-blog.php">blog </a>, or you can have a look at my <a href="/Chef/Controleur/controleur-work.php">work</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      <?php require('Vue/piedpage.php');?>
    <!--</div>-->
  </body>
</html>
