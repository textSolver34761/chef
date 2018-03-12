<?php

require __DIR__.'/../Modele/modele.php';
if(isset($_POST['recherche'])){
$chainesearch = $_POST['keywords'];
$donnee = Fetch($chainesearch);
}

require __DIR__.'/../Vue/recherche.php';