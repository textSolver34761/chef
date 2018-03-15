<br>
<br>
<form method="post" action="/Chef/Controleur//controleur-recherche.php">
    <div class="ui icon input">
        <div class="search icon">
            <input type="text" name="keywords" size="50" placeholder="Search ...">
            <input class="ui big red button" type="submit" name="recherche" value="Rechercher">
        </div>
    </div>    
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