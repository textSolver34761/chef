<!DOCTYPE html>
<html>
    <head>
        <title>Add a new article</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="Style/style.css">
        <link rel="stylesheet" type="text/css" href="Style/semantic.css">
        <link rel="stylesheet" href="Style/glide.core.css">
        <link rel="stylesheet" href="Style/glide.theme.css">
        <script type="text/javascript" src="Style/style.js"></script>
    </head>
  <body>
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
    <h1> Edit the article </h1>
    <form method="post" action="/Chef/Controleur/controleur-edit.php">
        <p>
            Edit the title of the article * : <br> <input type="text" name="title" size="100" required />
        </p>

        <p>
        Edit the description of the article*: <br> <input type="text" name="description" size="250" required />
        </p>

        <!--p>
            Tag(s) concerned by the article*: <br> <input type="text" name="tags" size="30" required/>
        </p-->

        <p>
            Edit the body text: <br> <textarea name="body" cols="600" rows="100"></textarea>
        </p>

        <!-- Ici pourra être ajouté un captcha anti-spam (plus tard) -->

        <p>
            <input type="submit" name="submit" value="Edit" />
        </p>

        <p>
            Please, note that the field that have an asterisk (*) are required.
        </p>

    </form>
    <?php require('../Vue/piedpage.php');?>
  </body>
</html>