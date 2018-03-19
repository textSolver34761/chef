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
<button class="ui small black button" onclick="goBack()">Go back </button>
<button class="ui small black button"><a href="/Chef/index.php"> Home </a></button>
<button class="ui small black button"> <a href="/Chef/Vue/about.php">About me</a></button>
<button class="ui small black button"> <a href="/Chef/Vue/contact.php">Contact</a> </button>
<button class="ui small black button"> <a href="https://landbot.io/u/H-27113-GJVK3FFB9B71354C/index.html">Chat with me</a>  </button>
<button class="ui small black button"> <a href="/Chef/Controleur/controleur-blog.php">Blog </a> </button>
<button class="ui small black button"> <a href="/Chef/Controleur/controleur-work.php">My work </a> </button>
<button class="ui small black button"> <a href="/Chef/Controleur/controleur-login.php">Login</a> </button>
<button class="ui small black button"> <a href="/Chef/Controleur/controleur-registration.php">Register </a></button>
<button class="ui small black button"> <a href="/Chef/Vue/logout.php">Logout</a> </button>

