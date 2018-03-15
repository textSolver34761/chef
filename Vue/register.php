<!DOCTYPE html>
<html>
    <head>
        <title>Register</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
        <script type="text/javascript" src="/Chef/Style/style.js"></script>
    </head>
    <body>
        <div class="register">
            <?php require('../Vue/entete.php');?>
            <?php require('../Vue/recherche.php');?>
            <h2>Create your account</h2>
            <br>
            <form action="../Controleur/controleur-registration.php" method = "post">
                <input type="text" name="prenom" placeholder="your first name" required> <br>
                <input type="text" name="nom" placeholder="your name" required > <br>
                <input type="text" name="email" placeholder="example@example.com"required> <br>
                <input type="password" name="motpasse"  placeholder="************" required> <br>
                <input type="submit" name="register" value="REGISTER NOW">
            </form>
        </div>
        <?php require('../Vue/piedpage.php');?>
    </body>
</html>