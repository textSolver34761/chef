<?php

require __DIR__.'/../Modele/modele.php';

$chainesearch = Fetch();
$recherche = Display();

require __DIR__.'/../Vue/recherche.php';