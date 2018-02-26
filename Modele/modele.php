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

function login(){
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
	elseif(isset($_POST['login'])){
		$select = $pdo_statement->prepare("SELECT * FROM utilisateurs WHERE email='$email' AND motpass='$motpass'");
		$select = setFetchMode(PDO::FETCH_ASSOC);
		$select->execute();
		$data=$select->fetch();
		if($data['email']!=$email and $data['motpass']!=$motpass){
			echo "invalid password and/or email";
		}
		elseif($data['email']==$email and $data['motpass']==$motpass){
			$_SESSION['email']=$data['email'];
			$_SESSION['name']=$data['name'];
			header("location:blog.php");
		}
	} 
}