<?php
session_start();
require('../Modele/modele.php');

$registration = register();

require('../Vue/register.php');