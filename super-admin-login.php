<?php
session_start();
if (isset($_SESSION['u'])) {
    if($_SESSION['usertype'] == "a"){
        header("Location:Admin.php");
    }else if($_SESSION['usertype'] == "c"){
        header("Location:Client.php");
    }else if($_SESSION['usertype'] == "s"){
        header("Location:super-admin.php");
    }
}else{
?>
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Login</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="styles.css">

</head>

<body class="login-body bg-dark">
    <div class="login" id="login">
        <h1 class="h1">Super Admin Login</h1>
        
        <!-- bootstrap error msg -->
        <div class="alert alert-danger" id="errorMsg" role="alert" style="display:none">    
            Invalid Credentials
        </div>


        <label class="h6" for="username">Username</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="Enter Username">


        <label class="h6" for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password">

        <button id="loginButton" type="submit" class="btn btn-primary">Login</button>
    </div>
    </div>
    <script src="superAdminLoginScript.js"></script>

</body>

</html>

<?php
}

?>