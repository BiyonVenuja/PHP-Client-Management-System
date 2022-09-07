<?php
//get the id,evt,date,time,data from the GET
$id = $_GET['id'];
$evt = $_GET['evt-name'];
$date = $_GET['date'];
$time = $_GET['time'];
$data = $_GET['data'];

//create a connection
$conn = new mysqli("127.0.0.1","root","biyonbiyon","learners","3306");


//create a query to update the event with id = $id
$sql = "INSERT INTO `events` (`users_id`,`event_name`,`event_date`,`event_data`) VALUES($id,'$evt','$date$time','$data')";

//execute
$conn -> query($sql);
echo "true"
?>