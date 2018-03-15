<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="Style/semantic.css">
    <link rel="stylesheet" type="text/css" href="Style/style.css">
    <title>Delete an article</title>
</head>
<body>
    <div class="bgimg">
    <?php require('../Vue/entete.php');?>
    <?php require('../Vue/recherche.php');?>
        <h1>Delete the article:</h1>
        <br>
        <form action="/Chef/Controleur/controleur-delete.php?id=<?= $article['id'] ?>" method="post">
        <div>
            <h2>
                <label> Title : <br> <?= $article['titre'] ?></label>
            </h2>
        </div>
        <div>
            <input type="submit" value="Delete the article">
        </div>
        </form>
        <br>
        <?php
        /*if(isset($_POST['submit'])){
        echo"<script>"
        echo"alert('Are you sur?')";
        echo"</script>";
        }*/
        ?>
        <br>
    </div>
    <?php require('../Vue/piedpage.php');?>
</body>
</html>