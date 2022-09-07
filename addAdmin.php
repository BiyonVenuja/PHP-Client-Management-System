<?php

//get the values id,name,email,pass,contact from the GET
$id = $_GET['id'];
$name = $_GET['name'];
$email = $_GET['email'];
$pass = $_GET['pass'];
$contact = $_GET['contact'];

//create a connection and insert the values
$conn = new mysqli("127.0.0.1","root","biyonbiyon","learners","3306");
//get the current 
date_default_timezone_set("Asia/Colombo").
$date = date("Y-m-d H:i:s");
$sql = "INSERT INTO `admin`(`id`,`name`,`email`,`password`,`contact`,`date`) VALUES($id,'$name','$email','$pass','$contact','$date')";


$conn -> query($sql);

echo "true";




?>