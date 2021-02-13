<?php
require_once 'config.php';

try{
   $conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
   echo"Connected to $dbname and $host Successfully";

}catch(PDOException $pe){
    die("Could not Connect to the database $dbname :" . $pe->getMessage());
}


?>