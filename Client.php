<?php
session_start();
if (isset($_SESSION['u']) & $_SESSION['usertype'] == "c") {

?>
    <!DOCTYPE html>
    <html>

    <head>
        <link rel="stylesheet" href="bootstrap.css">
        <link rel="stylesheet" href="styles.css">
        <title>Learners</title>
        
    </head>
    <style>

    </style>

    <body class="bg-white" onload="table();">
           <script type="text/javascript">
      function table(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
          document.getElementById("two-section").innerHTML = this.responseText;
        }
        xhttp.open("GET", "clientEvents.php?rd='r'");
        xhttp.send();
      }

      setInterval(function(){
        table();
      }, 2000);
    </script>
        <!-- create a small header panel with the text Admin Panel -->
        <section class="title-panel-section bg-dark text-light">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Hi, <?php echo $_SESSION['u']['name'] ?></h1>
                </div>
            </div>

            <a href="logout.php" class="btn btn-danger">Log out</a>

        </section>
        <div class="style-strip-green"></div>
        <section class="two-section" id="two-section">
 
        </section>
        <section class="footer-section">
            <div class="style-strip-green"></div>
            <footer class="footer bg-dark text-light p-2 text-center">
                <div class="container">
                    <span class="text-muted">&copy; 2019 Learners | Developed by SerendibTech</span>
                </div>
        </section>
        <script src="clientScript.js"></script>
        <script src="newClient.js"></script>
        <script src="confirmDialog.js"></script>
        <script src="editClient.js"></script>
       
    </body>

    </html>

<?php
} else {
    header("Location:Client-Login.php");
}
?>