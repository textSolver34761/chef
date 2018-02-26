<?php
date_default_timezone_set('CET');
echo "Today we are ";
echo date('l jS \of F Y h:i:s A');
?>
<hr>

<button onclick="goBack()">Go back </button>

<div class="boutton">
    <div class="left"><a href="/index.php"> Home <!--input class="ui big red button" type="button" value="Home"--></a> </div> 
    <div class="right"><a href="Vue/about.php">About me<!--input class="ui big red button" type="button" value="About me"--></a></div>
    <div class="right"><a href="Vue/contact.php">Contact<!--input class="ui big red button" type="button" value="Contact"--></a></div>
    <div class="right"><a href="Vue/blog.php">Blog<!--input class="ui big red button" type="button" value="Blog"--></a></div>
    <div class="right"><a href="Controleur/controleur-login.php">Login<!--input class="ui big red button" type="button" value="Sign in"--></a></div>
    <div class="right"><a href="Controleur/controleur-registration.php">Register<!--input class="ui big red button" type="button" value="Register"--></a></div>
</div>