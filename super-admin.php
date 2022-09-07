
<?php
    session_start();
    if(isset($_SESSION['u'])){
        if($_SESSION['usertype'] == "c"){
            header("Location:Client.php");
        }else if($_SESSION['usertype'] == "a"){
            header("Location:Admin.php");
        }else if($_SESSION['usertype'] == "s"){
?>
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="styles.css">
    <title>Learners</title>
</head>
<style>

</style>

<body class="bg-white">
    <!-- create a small header panel with the text Admin Panel -->
    <section class="title-panel-section bg-dark text-light">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Super Admin Panel</h1>
            </div>
        </div>

        <button class="btn btn-danger" id="logoutBtn">Log out</button>

    </section>
    <div class="style-strip-green"></div>
    <section class="one-section">
        <div class="col-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Select the ID, Contact Number or Name to search" id="searchBar">
            </div>
            <div class="checkbox-container">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                       ID
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault2" >
                    <label class="form-check-label" for="flexRadioDefault2">
                        Name
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault2" >
                    <label class="form-check-label" for="flexRadioDefault2">
                        Contact
                    </label>
                </div>
            </div>
        </div>
        </div>

        <div id="clientFormBtn" class="btn btn-primary ">New Admin</div>
    </section>

    <section class="two-section">
        <div class="table-container">
            <table class="table table-striped table-hover col-4 text-center" id="user-table">

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Contact</th>
                    <th>Date/Time</th>
                    <th>Action</th>
                </tr>
                <?php
                // connect to the database
                $conn = mysqli_connect('127.0.0.1', 'root', 'biyonbiyon', 'learners', '3306');

                // check connection
                if (!$conn) {
                    echo 'Connection error: ' . mysqli_connect_error();
                }

                // query the database
                $sql = 'SELECT * FROM `admin` ORDER BY `date` ASC';
                $result = mysqli_query($conn, $sql);

                // fetch data
                while ($row = mysqli_fetch_assoc($result)) {
                    echo '<tr>';
                    echo '<td class="userID">' . $row['id'] . '</td>';
                    echo '<td>' . $row['name'] . '</td>';
                    echo '<td>' . $row['email'] . '</td>';
                    echo '<td>' . $row['password'] . '</td>';
                    echo '<td>' . $row['contact'] . '</td>';
                    echo '<td>' . $row['date'] . '</td>';
                    echo '<td><span class="edit-btn">Edit</span><span class="del-btn"> Delete</span></td>';
                    echo '</tr>';
                }


                // close the connection
                mysqli_close($conn);
                ?>
            </table>
        </div>
    </section>
    <!-- footer -->

    <section class="footer-section">
        <div class="style-strip-green"></div>
        <footer class="footer bg-dark text-light p-2 text-center    ">
            <div class="container">
                <span class="text-muted">&copy; 2019 Learners | Developed by SerendibTech</span>
            </div>
    </section>
    <script src="super-adminScript.js"></script>
    <script src="newAdmin.js"></script>
    <script src="confirmDialog.js"></script>
    <script src="editAdmin.js"></script>
    <script src="newEvent.js"></script>
    <script src="eventView.js"></script>

</body>

</html>

<?php
        }
    }else{
        header("Location: super-admin-login.php");
    }
?>