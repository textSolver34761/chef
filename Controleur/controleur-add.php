<?php
session_start();
require __DIR__.'/../Modele/modele.php';

// si je reçois des données de formulaire,
if (isset($_POST['titre'], $_POST['description'], $_POST['contenu'])
){
    $add = Add();

    // si la création a réussi,
    if ($add) {
         //rediriger vers
        header('location: /Chef/Controleur/controleur-blog.php');
        echo "Well done!". '<br>';
        echo "You have add an article!";
    }
}
else {
    // afficher le formulaire
    require __DIR__.'/Controleur/controleur-entete.php';
    require __DIR__.'/Controleur/controleur-recherche.php';    
    require __DIR__.'/../Vue/add.php';
    echo "Error. Please try again.";
    require __DIR__.'/Controleur/controleur_piedpage.php';
}
