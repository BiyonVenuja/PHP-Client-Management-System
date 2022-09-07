<?php
    //get the id,name,email,pass.contact from GET
    $preID = $_GET['preID'];
    $id = $_GET['id'];
    $name = $_GET['name'];
    $email = $_GET['email'];
    $pass = $_GET['pass'];
    $contact = $_GET['contact'];
    
    //connect to the database
    $conn = new mysqli("127.0.0.1","root","biyonbiyon","learners",3306);

    //check connection
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    //update the database
    $sql = "UPDATE `learners`.`users` SET `name` = '$name', `email` = '$email', `password` = '$pass', `contact_no` = '$contact', `id`='$id' WHERE `users`.`id` =$preID";   

    //execute the query
    $conn->query($sql);
    echo "true";


?>