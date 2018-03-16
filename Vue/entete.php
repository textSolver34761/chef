<?php
date_default_timezone_set('CET');
echo "Today we are ";
echo date('l jS \of F Y h:i:s A');

if(isset($_SESSION ['nom'])){
    echo '<h2> Welcome '.$_SESSION ['nom'].'</h2>';
}
?>
<br>
<br>
<a class="ui image label">
  <img src="/Chef/Ressources/Avatar/default.png"
  <?=$_SESSION['nom']; ?>
</a>

<hr>
<button class="ui big red button" onclick="goBack()">Go back </button>

<!--div class="boutton"-->
    <!--div class="left"--><button class="ui big red button">  <a href="/Chef/index.php"> Home </button> <!--input type="button" value="Home"--></a> <!--/div--> 
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Vue/about.php">About me </button> <!--input class="ui big red button" type="button" value="About me"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Vue/contact.php">Contact </button><!--input class="ui big red button" type="button" value="Contact"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="https://landbot.io/u/H-27113-GJVK3FFB9B71354C/index.html">Chat with me </button><!--input class="ui big red button" type="button" value="Chat"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Controleur/controleur-blog.php">Blog </button><!--input class="ui big red button" type="button" value="Blog"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Controleur/controleur-work.php">My work </button><!--input class="ui big red button" type="button" value="Blog"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Controleur/controleur-login.php">Login</button> <!--input class="ui big red button" type="button" value="Sign in"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Controleur/controleur-registration.php">Register </button> <!--input class="ui big red button" type="button" value="Register"--></a><!--/div-->
    <!--div class="right"--><button class="ui big red button"> <a href="/Chef/Vue/logout.php">Logout </button><!--input class="ui big red button" type="button" value="Contact"--></a><!--/div-->    
</div>

