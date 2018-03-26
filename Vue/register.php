<!DOCTYPE html>
<html>
    <head>
        <title>Register</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/semantic.css">
        <link rel="stylesheet" type="text/css" href="/Chef/Style/style.css">
        <script type="text/javascript" src="/Chef/Style/style.js"></script>
    </head>
    <body>
        <div class="register">
            <h2>Create your account</h2>
            <br>
            <form action="../Controleur/controleur-registration.php" method = "post">
                <input type="text" name="prenom" placeholder="your first name" required> <br>
                <input type="text" name="nom" placeholder="your name" required > <br>
                <input type="text" name="email" placeholder="example@example.com"required> <br>
                <input type="password" name="motpasse"  placeholder="************" required> <br>
                <input type="hidden" name="MAX_FILE_SIZE" value="250000" />
                Select a file for your avatar: <br>
                <input type="file" name="fic" size=50 /> <br> <br>
                <input type="submit" name="register" value="REGISTER NOW">
            </form>
        </div>
    </body>
</html>