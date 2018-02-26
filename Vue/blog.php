<?php
session_start();
if(isset($_SESSION['nom'])){
    echo '<h2> Loggin success! Welcome '.$_SESSION[nom].' </h2>';
    echo '<h2> Enjoy the tips and tutorials on this blog! </h2>';
    echo '<h2> <a href"logout.php"> Logout </a> </h2>';
}
else{
    header("location:index.php");
}
?>