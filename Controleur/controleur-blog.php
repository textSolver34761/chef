<?php
session_start();
require __DIR__.'/../Modele/modele.php';

$admin = Browse();
$admin = Read();
$admin = Add();
$admin = Edit();
$admin = Delete();
$blog = Blog();

require __DIR__.'/../Vue/blog.php';