<?php
session_start();
require __DIR__.'/../Modele/modele.php';

$delete = Delete();
$article = Article();

if ($delete) {
    //rediriger vers
   header('location: /Chef/Controleur/controleur-blog.php');
}
else {
    // afficher le formulaire
    require __DIR__.'/Controleur/controleur-entete.php';
    require __DIR__.'/Controleur/controleur-recherche.php';   
    require __DIR__.'/../Vue/delete.php';
    echo "Error. Please try again.";
    require __DIR__.'/Controleur/controleur_piedpage.php';
}
