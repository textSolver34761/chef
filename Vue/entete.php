<?php
echo "Today we are " . date("d/m/Y") . "and it's " . date("h:i:sa");
?>
<hr>

<button onclick="goBack()">Go back </button>

<div class="boutton">
    <div class="left"><a href="/index.php"><input class="ui big red button" type="button" value="Home"></a> </div> 
    <div class="right"><a href="Vue/about.php"><input class="ui big red button" type="button" value="About me"></a></div>
    <div class="right"><a href="Vue/contact.php"><input class="ui big red button" type="button" value="Contact"></a></div>
    <div class="right"><a href="Vue/blog.php"><input class="ui big red button" type="button" value="Blog"></a></div>
    <div class="right"><a href="Controleur/controleur-login.php"><input class="ui big red button" type="button" value="Sign in"></a></div>
    <div class="right"><a href="Controleur/controleur-registration.php"><input class="ui big red button" type="button" value="Register"></a></div>
</div>