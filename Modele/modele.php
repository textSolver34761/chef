<?php

function prepareStatement($sql) {
    
	require __DIR__.'/create-pdo.php';

    if($pdo){
        try{
            $pdo_statement = $pdo->prepare($sql);
        } catch (PDOException $e) {
          echo 'erreur : ' . $e->getMessage();
        }
	}  
    return $pdo_statement;
}

function register(){
	if(isset($_POST['register'])){
	  $pdo_statement = prepareStatement(
		'INSERT INTO utilisateurs(nom, prenom, email, motpasse)
		  VALUES(:nom, :prenom, :email, :motpasse)');

		if(
			$pdo_statement &&
			$pdo_statement->bindParam(':nom', $_POST['nom']) &&
			$pdo_statement->bindParam(':prenom', $_POST['prenom']) &&
			$pdo_statement->bindParam(':email', $_POST['email']) &&
			$pdo_statement->bindParam(':motpasse', $_POST['motpasse']) &&
			$pdo_statement->execute()
		){
			echo 'You have been successfully registred!';
			header("location:require_once('/index.php')");
		}
	}
}

function login(){
	session_start();
	if(isset($_POST['login'])){
		if(empty($_POST["nom"]) || empty($_POST["motpasse"])){
			$message ='<label> All fields are required </label>';
		}
		else{
			$query = "SELECT * FROM utilisateurs WHERE nom =:nom AND motpasse =:motpasse";
			$pdo_statement = prepareStatement($query);
			$pdo_statement->execute(
				array(
					'nom' => $_POST["nom"],
					'motpasse' => $_POST["motpasse"]
				)
			);
			$count = $pdo_statement->rowCount();
			if($count > 0){
				$_SESSION["nom"] = $_POST["nom"];
				header("location:require_once('/Chef/Controleur/controleur-blog.php')");
			}
			else{
				$message = '<label> Wrong data </label>';
			}
		}
	}
}

function Admin(){
	if(isset($_POST['register']) && ('role'== 0)){

		function Browse(){
			$todosBrowse = [];
			$pdo = prepareStatement('SELECT * FROM blog');
			$pdo->execute();
			
			$todosBrowse = $pdo->fetchAll(PDO::FETCH_ASSOC);
			return $todosBrowse;
		}

		function Read() {
			$todoread = [];
			$pdo = prepareStatement('SELECT * FROM blog ORDER BY id DESC LIMIT 1');
			$pdo->execute();
		
			$todoread = $pdo->fetchAll(PDO::FETCH_ASSOC);
		
			return $todoread;
		}

	} else{

		function Browse(){
			$todosBrowse = [];
			$pdo = prepareStatement('SELECT * FROM blog');
			$pdo->execute();
			
			$todosBrowse = $pdo->fetchAll(PDO::FETCH_ASSOC);
			return $todosBrowse;
		}

		function Read() {
			$todoread = [];
			$pdo = prepareStatement('SELECT * FROM blog ORDER BY id DESC LIMIT 1');
			$pdo->execute();
		
			$todoread = $pdo->fetchAll(PDO::FETCH_ASSOC);
		
			return $todoread;
		}

		function Edit(){
			$tache = [];
			$pdo = prepareStatement('UPDATE blog
									SET titre=:titre, description=:description
									WHERE id=:id');
			if(
				$pdo_statement &&
				$pdo_statement->bindParam(':id', $_GET['id']) &&
				$pdo_statement->bindParam(':titre', $_GET['titre']) &&
				$pdo_statement->bindParam(':description', $_GET['description']) &&
				$pdo_statement->execute()
			){
				echo "Vous avez bien mondifié l'article!";
			}
			return $tache;
		}

		function Add(){
			if (isset($_POST['submit'])) {
				$pdo_statement = prepareStatement(
					'INSERT INTO blog(titre, description)
					VALUES(:title, :description)');
		
				if(
					$pdo_statement &&
					$pdo_statement->bindParam(':titre', $_POST['titre']) &&
					$pdo_statement->bindParam(':description', $_POST['description']) &&
					$pdo_statement->execute()
				){
					echo 'Vous avez bien ajouté un article!';
				}
			}
			return $pdo_statement;
		}

		function Delete() {
			$todosbin = [];
			$pdo = prepareStatement('UPDATE blog ' . 'SET deleted_at=CURRENT_TIMESTAMP()');
			$pdo->execute();
		
			$todosbin = $pdo->fetchAll(PDO::FETCH_ASSOC);
		
			return $todosbin;
			header('Location: ../Vue/blog.php');
			exit();
		}
	}
}

function Blog(){
	$todos = [];
	$pdo = prepareStatement('SELECT * FROM blog');
	$pdo->execute();

	$todos = $pdo->fetchAll(PDO::FETCH_ASSOC);

	return $todos;
}

function recherche(){
	if(isset($_POST['requete']) && $_POST['requete'] != NULL){
		$requete = htmlspecialchars($_POST['requete']); // on crée une variable $requete pour faciliter l'écriture de la requête SQL, mais aussi pour empêcher les éventuels malins qui utiliseraient du PHP ou du JS, avec la fonction htmlspecialchars().
		$query = mysql_query("SELECT * FROM fonctions WHERE nom_fonction LIKE '%$requete%' ORDER BY id DESC") or die (mysql_error()); // la requête, que vous devez maintenant comprendre ;)
		$nb_resultats = mysql_num_rows($query); // on utilise la fonction mysql_num_rows pour compter les résultats pour vérifier par après
			if($nb_resultats != 0){

?>
<h3>Résultats de votre recherche.</h3>
<p>Nous avons trouvé <? echo $nb_resultats; // on affiche le nombre de résultats 
if($nb_resultats > 1) { echo 'résultats'; } else { echo 'résultat'; } // on vérifie le nombre de résultats pour orthographier correctement. 
?>
dans notre base de données. Voici les fonctions que nous avons trouvées :<br/>
<br/>
<?
while($donnees = mysql_fetch_array($query)) // on fait un while pour afficher la liste des fonctions trouvées, ainsi que l'id qui permettra de faire le lien vers la page de la fonction
{
?>
<a href="fonction.php?id=<? echo $donnees['id']; ?>"><? echo $donnees['nom_fonction']; ?></a><br/>
<?
} // fin de la boucle
?><br/>
<br/>
<a href="rechercher.php">Faire une nouvelle recherche</a></p>
<?
} // Fini d'afficher les résultats ! Maintenant, nous allons afficher l'éventuelle erreur en cas d'échec de recherche et le formulaire.
else
{ // de nouveau, un peu de HTML
?>
<h3>Pas de résultats</h3>
<p>Nous n'avons trouvé aucun résultat pour votre requête "<? echo $_POST['requete']; ?>". <a href="rechercher.php">Réessayez</a> avec autre chose.</p>
<?
}// Fini d'afficher l'erreur ^^
mysql_close(); // on ferme mysql, on n'en a plus besoin
}
else
{ // et voilà le formulaire, en HTML de nouveau !
?>
<p>Vous allez faire une recherche dans notre base de données concernant les fonctions PHP. Tapez une requête pour réaliser une recherche.</p>
 <form action="rechercher.php" method="Post">
<input type="text" name="requete" size="10">
<input type="submit" value="Ok">
</form>
<?
}
// et voilà, c'est fini !
?>

}