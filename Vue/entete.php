<?php
date_default_timezone_set('CET');
echo "Today we are ";
echo date('l jS \of F Y h:i:s A');
?>
<?php
if(isset($_SESSION ['nom'])){
    echo '<h2> Welcome '.$_SESSION ['nom'].', nice to see you !</h2>';
    echo '<a class="ui big image label">';
        echo '<img src="/Chef/Ressources/Avatar/default.png">';
    echo'</a>';
}
?>

<hr>
<button class="ui small #B8C7C6 button" onclick="goBack()">Go back </button>
<button class="ui small #B8C7C6 button"> <a href="/Chef/index.php"> Home </button></a> 
<button class="ui small #B8C7C6 button"> <a href="/Chef/Vue/about.php">About me </button></a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Vue/contact.php">Contact </button></a>
<button class="ui small #B8C7C6 button"> <a href="https://landbot.io/u/H-27113-GJVK3FFB9B71354C/index.html">Chat with me </button></a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Controleur/controleur-blog.php">Blog </button></a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Controleur/controleur-work.php">My work </button></a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Controleur/controleur-login.php">Login</button> </a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Controleur/controleur-registration.php">Register </button> </a>
<button class="ui small #B8C7C6 button"> <a href="/Chef/Vue/logout.php">Logout </button></a>

