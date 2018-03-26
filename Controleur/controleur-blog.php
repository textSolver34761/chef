<?php
session_start();
require __DIR__.'/../Modele/modele.php';

$admin = Browse();
$admin = Read();
$admin = Add();
$admin = Edit();
$admin = Delete();
$blog = Blog();
require __DIR__.'/../Controleur/controleur-entete.php';
require __DIR__.'/../Controleur/controleur-recherche.php';
require __DIR__.'/../Vue/blog.php';
require __DIR__.'/../Controleur/controleur_piedpage.php';