<br>
<br>
<form method="post" action="/Chef/Controleur//controleur-recherche.php">
    <input type="text" name="keywords" size="50" placeholder="Saisssez ici l'objet de votre recherche (Laravel, tuto, chatbot)">
    <input type="submit" name="recherche" value="Rechercher">
</form>
<br>
<php if(!empty($donnee)){
<?= 'You have searched for : ' . $chainesearch . '<br>';?>
<?= 'The search results are : <br>';?>
    <?foreach ($donnee as $donnees){
    echo $donnees['recherche'];
    }
    ?>
}
?>