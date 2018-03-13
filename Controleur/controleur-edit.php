<?php

require __DIR__.'/../Modele/modele.php';

// si je reçois des données de formulaire,
if (
    isset($_POST['titre']) OR
    isset($_POST['description']) OR
    isset($_POST['contenu'])
){
    $tache = Edit();

    // si la création a réussi,
    if ($tache) {
        // rediriger vers
        header('Location: edit_1.php');
    }
}
else {
    // afficher le formulaire
    require __DIR__.'/../Vue/edit.php';
}