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

function fetchData(){
	if (isset($_POST['submit'])) {
		$pdo_statement = prepareStatement(
			'INSERT INTO utilisateurs(nom, prenom, email, motpasse, message, sujet)
			VALUES(:nom, :prenom, :email, :motpasse, :message, :sujet)');

		if(
			$pdo_statement &&
			$pdo_statement->bindParam(':nom', $_POST['nom']) &&
			$pdo_statement->bindParam(':prenom', $_POST['prenom']) &&
			$pdo_statement->bindParam(':email', $_POST['email']) &&
			$pdo_statement->bindParam(':message', $_POST['message']) &&
			$pdo_statement->bindParam(':sujet', $_POST['sujet']) &&
			$pdo_statement->execute()
		){
			echo 'Merci pour votre message!';
		}
	}
	return $pdo_statement;
}