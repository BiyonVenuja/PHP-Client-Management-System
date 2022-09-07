<?php

session_start();
unset($_SESSION['u']);
$usertype = $_SESSION['usertype'];
unset($_SESSION['usertype']);
if($usertype == "c"){
    header("Location:index.html");
}else if($usertype == "a"){
    header("Location:index.html");
}else{
    header("Location:index.html");
}

?>