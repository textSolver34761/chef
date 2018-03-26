<?php
session_start();
require('../Modele/modele.php');

$registration = register();

require __DIR__.'/../Controleur/controleur-entete.php';
require __DIR__.'/../Controleur/controleur-recherche.php';   
require __DIR__.'/../Vue/register.php';
require __DIR__.'/../Controleur/controleur_piedpage.php';
