var table = document.getElementById("events-table");

for (let i = 0; i < table.querySelectorAll(".del-btn").length; i++) {
   
    table.querySelectorAll(".del-btn")[i].addEventListener("click", (event) => {
       var row = event.composedPath()[2];
       var userID = row.querySelectorAll("td")[0].innerText;
       console.log(userID)
       ConfirmDialog("Delete Client", "Are you sure you want to delete this client?", () => {
          row.style.backgroundColor = "var(--bs-danger)";
          setTimeout(() => {
             var r = new XMLHttpRequest();
             r.open("GET", "delEvent.php?id=" + userID + "", true);
    
             r.onreadystatechange = function () {
                if (r.readyState == 4) {
                   if (r.responseText == "true") {
                      // alert("Client deleted successfully");
                      window.location.reload();
                   } else {
                      // alert("Client not deleted");
                      alert(r.responseText);
                   }
                }
             }
             r.send();
          }, 200);
       });
    
    
    
    });
 
}

