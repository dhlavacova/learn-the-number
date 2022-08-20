<?php

$host = "localhost";
$db = 'pocitani_Emilka';
$user = "dana";
$password = "dana";
try {
    $dsn = "mysql:host=$host;port=3306;dbname=$db;";
    // make a database connection
    $pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    die($e->getMessage());
}
$bod=$_POST['body'];

$statement=$pdo->prepare("INSERT INTO pocitani_Emilka.Pocitani_Emilka (body, datum) VALUES (?,CURRENT_TIMESTAMP) ");// current_timestamp - nastavuje nynejsi cas, proto nemusime mit post[datum]
$statement->execute([$bod]);
