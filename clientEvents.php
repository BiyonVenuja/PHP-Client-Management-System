<?php
session_start();
if (isset($_SESSION['u']) & $_SESSION['usertype'] == "c") {

?>
 <?php
    //get the id from GET
    $id = $_SESSION['id'];
    // create a connection
    $conn = new mysqli("127.0.0.1", "root", "biyonbiyon", "learners", "3306");

    //create a query to get the event with user_id = $id
    $sql = "SELECT * FROM `events` WHERE `users_id` = $id";

    //execute the query
    $result = $conn->query($sql);
    ?>
    
    <?php
                if ($result->num_rows <= 0) {
                ?>
                    <h1 class="text-center text-primary">-- No Events Found --</h2>
                <?php
                } else {
                ?>
            <div style="position:relative" class="table-container-events">
                
                    <table class="table table-striped table-hover col-4 text-center" id="events-table">
                        <tr>
                            <th>ID</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                        <?php
                        // fetch data

                        while ($row = $result->fetch_assoc()) {
                            echo '<tr>';
                            echo '<td class="userID">' . $row['event_id'] . '</td>';
                            echo '<td>' . $row['event_name'] . '</td>';
                            echo '<td>' . $row['event_date'] . '</td>';
                            echo '<td data="desc"><textarea style="padding:10px; height:50px" class="text-black col-12" type="text" disabled>' . $row['event_data'] . '"</textarea></td>';
                            echo '</tr>';
                        }
                        ?>
                    </table>
                
            </div>
            <?php
                }
            ?>
<?php
}
?>