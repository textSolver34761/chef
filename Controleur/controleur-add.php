<?php

require __DIR__.'/../Modele/modele.php';

// si je reçois des données de formulaire,
if (isset($_POST['titre'], $_POST['description'], $_POST['contenu'])
){
    $todosadd = Add();

    // si la création a réussi,
    if ($todosadd) {
        // rediriger vers
        header('location: /Chef/Controleur/controleur-blog.php');
    }
}
else {
    // afficher le formulaire
    require __DIR__.'/../Vue/add.php';
    echo "Error. Please try again.";
}
