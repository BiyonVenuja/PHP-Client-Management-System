
<?php
session_start();
    if(isset($_SESSION['u'])){
        if($_SESSION['usertype'] == "c"){
            header("Location:Client.php");
        }else if($_SESSION['usertype'] == "a"){
?>
<?php
//get the id from GET
$id = $_GET['id'];
// create a connection
$conn = new mysqli("127.0.0.1","root","biyonbiyon","learners","3306");

//create a query to get the event with user_id = $id
$sql = "SELECT * FROM `events` WHERE `users_id` = $id";
//get the users name using $id
$sql2 = "SELECT `name`,`id`,`date` FROM `users` WHERE `id` = $id";

//execute the query
$result = $conn -> query($sql);
$result2 = $conn -> query($sql2);

$name = $result2->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
    
    <title>Events</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<section class="title-panel-section bg-dark text-light">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Events</h1>
            </div>
        </div>
        <a href="Admin.php" class="btn btn-primary" id="panel-btn">< Back to panel</a>

    </section>
    <div class="style-strip-green"></div>
    <section class="one-section">
    <!-- display user ID and name -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-primary"><?php echo $name['name']; ?></h3>
                    <h6 class="text-center">ID : <?php echo $name['id']; ?></h3>
                    <h6 class="text-center">Joined Date : <?php echo $name['date'] ?></h3>
                </div>
            </div>
        </div>
    </section>
    <section class="two-section">
        <div class="table-container-events">
            <table class="table table-striped table-hover col-4 text-center"  id="events-table">
                <tr>
                    <th>ID</th>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                <?php
                // fetch data
                while($row = $result->fetch_assoc()) {
                    echo '<tr>';
                    echo '<td class="userID"><span>' . $row['event_id'] . '</span></td>';
                    echo '<td>' . $row['event_name'] . '</td>';
                    echo '<td>' . $row['event_date'] . '</td>';
                    echo '<td data="desc"><textarea style="padding:10px; height:50px;" class="text-black col-12" type="text" disabled>' . $row['event_data'] . '"</textarea></td>';
                    echo '<td><span class="del-btn">Delete</span></td>';
                    echo '</tr>';
                }
                ?>
            </table>
        </div>
    </section>
    <section class="footer-section">
        <div class="style-strip-green"></div>
        <footer class="footer bg-dark text-light p-2 text-center    ">
            <div class="container">
                <span class="text-muted">&copy; 2019 Learners | Developed by SerendibTech</span>
            </div>
    </section>
    <script src="eventScript.js"></script>
    <script src="confirmDialog.js"></script>
</body>
</html>
<?php
        }
    }else{
        header("Location: Admin-login.php");
    }
?>