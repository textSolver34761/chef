<!DOCTYPE html>
<html>
    <head>
        <title>Contact</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
        <script type="text/javascript" src="/Chef/Style/style.js"></script>
    </head>
  <body>
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
    <h1>Contact me </h1>
    <form method="post" action="https://formspree.io/pradonbenjamin@gmail.com">

        <p>
            Your name * : <br> <input type="text" name="nom" size="30" required />
        </p>

        <p>
            Your first name *: <br> <input type="text" name="prenom" size="30" required />
        </p>

        <p>
            Your email (so that I can contact you)*: <br> <input type="text" name="email" size="30" required/>
        </p>

        <p>
            The subject of the message: <br> <input type="text" name="sujet" size="30" required/>
        </p>

        <p>
            The message: <br> <textarea name="message" cols="60" rows="10"></textarea>
        </p>

        <!-- Ici pourra être ajouté un captcha anti-spam (plus tard) -->

        <p>
            <input class="ui big red button" type="submit" name="submit" value="Envoyer" />
        </p>

        <p>
            Please, note that the field that have an asterisk (*) are required, and that I won't use your data but only to answer you!
        </p>

    </form>
    <?php require('../Vue/piedpage.php');?>
  </body>
</html>