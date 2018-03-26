<?php

require('../Modele/modele.php');

$login = login();

require __DIR__.'/../Controleur/controleur-entete.php';
require __DIR__.'/../Controleur/controleur-recherche.php';   
require __DIR__.'/../Vue/login.php';
require __DIR__.'/../Controleur/controleur_piedpage.php';