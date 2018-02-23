<!DOCTYPE html>
<html>
    <head>
        <title>Contact</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="Style/semantic.css">
        <link rel="stylesheet" type="text/css" href="Style/style.css">
    </head>
  <body>
    <?#php require __DIR__.'Vue/entete.php';?>
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
            <input type="submit" name="submit" value="Envoyer" />
        </p>

        <p>
            Please, note that the field that have an asterisk (*) are required, and that I won't use your data but only to answer you!
        </p>

    </form>
    <?#php require __DIR__.'Vue/piedpage.php';?>
  </body>
</html>