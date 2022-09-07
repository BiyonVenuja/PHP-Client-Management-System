<?php
// //get the values username and password from post
    $id = $_POST['id'];
    $password = $_POST['password'];

    //connect to the database
    $conn = new mysqli("127.0.0.1","root","biyonbiyon","learners",3306);

    $query =  "SELECT * FROM `admin` WHERE `id` = '$id' AND `password` = '$password'";

    $resultSet = $conn->query($query);

    if($resultSet->num_rows > 0){
        session_start();
        $_SESSION['u'] = $resultSet->fetch_assoc();
        $_SESSION['usertype'] = "a";
        echo "true";
    }else{
        echo "false";
    }
   
   

?>