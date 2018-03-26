<?php
session_start();
require __DIR__.'/../Modele/modele.php';

//$work = Fetch();

require __DIR__.'/../Controleur/controleur-entete.php';
require __DIR__.'/../Controleur/controleur-recherche.php';  
require __DIR__.'/../Vue/work.php';
require __DIR__.'/../Controleur/controleur_piedpage.php';