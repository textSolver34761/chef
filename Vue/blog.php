<!--if( the user is not logged ) then, warn him : echo <h1> To access this page, please register yourself </h1>
if the user is looged, then authorize him with the session_start and $_session['name']
 -->

<?php
//if() {
echo '<h1> To access this page, please register yourself </h1>';
//}

//else(){
session_start();
echo "Welcome '.$prenom.'";
//}
?>

