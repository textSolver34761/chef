<?php
session_start();
require __DIR__.'/../Modele/modele.php';

$article = Article();

// si je reçois des données de formulaire,
if (isset($_POST['titre'], $_POST['description'], $_POST['contenu'])){
    $edit = Edit();

    // si la création a réussi,
    if ($edit) {
        //rediriger vers
       header('location: /Chef/Controleur/controleur-blog.php');
       echo "You have edit an article!";
   }
}
else {
   // afficher le formulaire
   require __DIR__.'/Controleur/controleur-entete.php';
   require __DIR__.'/Controleur/controleur-recherche.php';   
   require __DIR__.'/../Vue/edit.php';
   echo "Error. Please try again.";
   require __DIR__.'/Controleur/controleur_piedpage.php';
}
