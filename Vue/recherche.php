<br>
<br>
<form method="post" action="/Chef/Controleur//controleur-recherche.php">
    <input type="text" name="keywords" size="50" value="" placeholder="Saisssez ici l'objet de votre recherche (Laravel, tuto, chatbot)">
    <input type="submit" name="recherche" value="Rechercher">
</form>
<br>
<php if(!empty($_POST['recherche'])){
<?= 'You have search for : ' . $chainesearch . '<br>';?>
<?= 'The search results are : <br>';?>
    <?foreach ($donnee as $donnees){
    echo $donnees['recherche'];
    }
    ?>
}
?>