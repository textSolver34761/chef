<?php

require __DIR__.'/../Modele/modele.php';

if(isset($_POST['recherche'])){
$chainesearch = $_POST['keywords'];
$donnee = Fetch($chainesearch);
}

if(!empty($donnee)){
    echo 'You have searched for : ' . $chainesearch . '<br>';
    echo 'The search results are : <br>';
    foreach ($donnee as $donnees){
    echo $donnees['recherche'];
    }
}


require __DIR__.'/../Vue/recherche.php';