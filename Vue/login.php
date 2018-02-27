<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="Style/semantic.css">
        <link rel="stylesheet" type="text/css" href="Style/style.css">
        <script type="text/javascript" src="style.js"></script>
    </head>
    <body>
        <div class="register">
            <h2>Login here</h2>
            <br>
            <?php
            if(isset($message)){
                echo '<label>'.$message.'</label>';
            }
            ?>
            <br>
            <br>
            <form method = "post">
                <input type="text" name="nom" placeholder="your name" required > <br>
                <input type="password" name="motpasse"  placeholder="************" required> <br>
                <input type="submit" name="login" value="SIGN IN">
            </form>
        </div>
    </body>
</html>