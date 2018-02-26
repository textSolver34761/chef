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
			$query = "SELECT * FROM utilisateurs WHERE nom =:nom AND password =:password";
			$statement = $pdo->prepare($query);
			$statement->execute(
				array(
					'nom' => $_POST["nom"],
					'motpass' => $_POST["motpass"]
				)
			);
			$count = $statement->rowCount();
			if($count > 0){
				$_SESSION["nom"] = $_POST["nom"];
				header("location:blog.php");
			}
			else{
				$message = '<label> Wrong data </label>';
			}
		}
	}
}