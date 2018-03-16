<br>
<br>
<form method="post" action="/Chef/Controleur//controleur-recherche.php">
    <div class="ui icon input">
        <div class="search icon">
            <input type="text" name="keywords" size="50" placeholder="Search ...">
            <input class="ui small #B8C7C6 button" type="submit" name="recherche" value="Rechercher">
        </div>
    </div>    
</form>
<br>
<?php
if(!empty($donnee)){
    echo 'You have searched for : ' . $chainesearch . '<br>';
    echo 'The search results are : <br>';
    foreach ($donnee as $donnees){
    echo $donnees['recherche'];
    }
}
?>