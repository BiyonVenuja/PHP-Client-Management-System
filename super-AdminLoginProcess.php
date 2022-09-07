<?php
// //get the values username and password from post
    $id = $_POST['id'];
    $password = $_POST['password'];

    if($id == "admin" && $password == "admin"){
        session_start();
        $_SESSION['u'] = "super-admin";
        $_SESSION['usertype'] = "s";
        echo "true";
    }else{
        echo "false";
    }
   
   

?>