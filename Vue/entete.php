<?php
date_default_timezone_set('CET');
echo "Today we are ";
echo date('l jS \of F Y h:i:s A');

session_start();
if(isset($_SESSION ['nom'])){
    echo '<h2> Welcome '.$_SESSION ['nom'].'</h2>';
    if('role'== 1){
        echo 'You are connected as an admin!';
    }
}
?>
<hr>
<button onclick="goBack()">Go back </button>

<!--div class="boutton"-->
    <!--div class="left"--><button> <a href="/Chef/index.php"> Home </button> <!--input class="ui big red button" type="button" value="Home"--></a> <!--/div--> 
    <!--div class="right"--><button> <a href="/Chef/Vue/about.php">About me </button> <!--input class="ui big red button" type="button" value="About me"--></a><!--/div-->
    <!--div class="right"--><button> <a href="/Chef/Vue/contact.php">Contact </button><!--input class="ui big red button" type="button" value="Contact"--></a><!--/div-->
    <!--div class="right"--><button> <a href="/Chef/Controleur/controleur-blog.php">Blog </button><!--input class="ui big red button" type="button" value="Blog"--></a><!--/div-->
    <!--div class="right"--><button> <a href="/Chef/Controleur/controleur-login.php">Login</button> <!--input class="ui big red button" type="button" value="Sign in"--></a><!--/div-->
    <!--div class="right"--><button> <a href="/Chef/Controleur/controleur-registration.php">Register </button> <!--input class="ui big red button" type="button" value="Register"--></a><!--/div-->
    <!--div class="right"--><button> <a href="/Chef/Vue/logout.php">Logout </button><!--input class="ui big red button" type="button" value="Contact"--></a><!--/div-->
</div>
<br>
<br>
<br>
<form action="rechercher.php" method="Post">
<input type="text" name="requete" size="50" placeholder="Ex: Laravel, tuto, chatbot">
<input type="submit" value="Rechercher">