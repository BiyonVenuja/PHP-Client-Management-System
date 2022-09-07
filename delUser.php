<?php
//get the values id from the GET
$id = $_GET['id'];

//create a connection
$conn = new mysqli("127.0.0.1","root","biyonbiyon","learners","3306");

//create a query to delete the user with id = $id
$sql = "DELETE FROM `users` where `id` =$id";

//run the query    
$conn -> query($sql);

echo "true"

?>