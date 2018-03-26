<?php
date_default_timezone_set('CET');
echo "Today we are ";
echo date('l jS \of F Y h:i:s A');

if(isset($_SESSION ['nom'])){
    echo '<h2> Welcome '.$_SESSION ['nom'].', nice to see you !</h2>';
    echo '<a class="ui big image label">';
        echo '<img src="/Chef/Ressources/Avatar/default.png">';
    echo'</a>';
}

require __DIR__.'/../Vue/entete.php';