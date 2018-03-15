<!DOCTYPE html>
<html>
    <head>
        <title>Edit an article</title>
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
    <h1> Edit the article </h1>
    <form method="post" action="/Chef/Controleur/controleur-edit.php?id=<?= $article['id'] ?>">
        <p>
            Edit the title of the article : <br> <input type="text" name="titre" size="100" value="<?= $article['titre'] ?>"/>
        </p>

        <p>
            Edit the description of the article: <br> <input type="text" name="description" size="250" value="<?= $article['description'] ?>"/>
        </p>

        <!--p>
            Tag(s) concerned by the article*: <br> <input type="text" name="tags" size="30" required/>
        </p-->

        <p>
            Edit the body text: <br> <textarea name="contenu" cols="600" rows="100"><?= $article['contenu'] ?></textarea>
        </p>

        <p>
            <input type="submit" name="submit" value="Edit" />
        </p>
    </form>
    <?php require('../Vue/piedpage.php');?>
  </body>
</html>