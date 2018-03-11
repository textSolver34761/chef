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

function Fetch(){
	if(isset($_POST['recherche'])) {
	
		$chainesearch = ($_POST['recherche']);// $chainesearch = saisie utilisateur (et non "Rechercher")
	
		echo 'Vous avez recherché : ' . $chainesearch . '<br>';

		$requete = prepareStatement("SELECT *
									FROM recherche, tag, blog, projet
									WHERE recherche.id = tag.recherches_lies
									AND projet.id = tag.projet_lies
									AND blog.id = tag.tuto_lies
									LIKE '". $chainesearch ."%'");

		$requete->execute();
		echo 'Les résultats de recherche sont : <br>';     
		while($donnees = $requete->fetch(PDO::FETCH_ASSOC)) {       
		echo $donnees['recherche'] .'<br>';
		}
	}
}

function Display(){
	// Display search of search engine lien vers les pages
}