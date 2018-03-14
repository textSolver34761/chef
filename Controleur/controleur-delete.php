<?php

require __DIR__.'/../Modele/modele.php';

$delete = Delete();

if ($delete) {
    //rediriger vers
   header('location: /Chef/Controleur/controleur-blog.php');
}
else {
    // afficher le formulaire
    require __DIR__.'/../Vue/delete.php';
    echo "Error. Please try again.";
}
