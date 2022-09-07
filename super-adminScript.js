// NewClientForm();
// ConfirmDialog();



var table = document.getElementById("user-table");

document.querySelector("#clientFormBtn").addEventListener("click", function () {
  new NewClientForm();
});


for (let i = 0; i < table.querySelectorAll(".del-btn").length; i++) {
   
   table.querySelectorAll(".del-btn")[i].addEventListener("click", (event) => {
      var row = event.composedPath()[2];
      var userID = row.querySelectorAll("td")[0].innerText;
      console.log(userID)
      ConfirmDialog("Delete Client", "Are you sure you want to delete this client?", () => {
         row.style.backgroundColor = "var(--bs-danger)";
         setTimeout(() => {
            var r = new XMLHttpRequest();
            r.open("GET", "delAdmin.php?id=" + userID + "", true);
   
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

for (let i = 0; i < table.querySelectorAll(".edit-btn").length; i++) {

   table.querySelectorAll(".edit-btn")[i].addEventListener("click", (event) => {
      var row = event.composedPath()[2];
      var userID = row.querySelectorAll("td")[0].innerText;
      var name = row.querySelectorAll("td")[1].innerText;
      var id = row.querySelectorAll("td")[2].innerText;
      var email = row.querySelectorAll("td")[3].innerText;
      var contact = row.querySelectorAll("td")[4].innerText;
      var pass = row.querySelectorAll("td")[5].innerText;
      
      new EditAdmin(userID, name, id, email, contact, pass);


      
   });
}


document.querySelector("#searchBar").addEventListener("input", function () {

         if (document.querySelectorAll(".form-check-input[name='flexRadio']")[0].checked == true) {
            document.querySelector("#searchBar").addEventListener("input", function () {
               var value = document.querySelector("#searchBar").value.toLowerCase();
               var tr = table.getElementsByTagName("tr");
               for (i = 0; i < tr.length; i++) {
                  var td = tr[i].getElementsByTagName("td")[0];
                  if (td) {
                     if (td.innerHTML.toLowerCase().indexOf(value) > -1) {
                        tr[i].style.display = "";
                     } else {
                        tr[i].style.display = "none";
                     }
                  }
               }
            });
         }

         if(document.querySelectorAll(".form-check-input[name='flexRadio']")[1].checked == true) {
            document.querySelector("#searchBar").addEventListener("input", function () {
               var value = document.querySelector("#searchBar").value.toLowerCase();
               var tr = table.getElementsByTagName("tr");
               for (i = 0; i < tr.length; i++) {
                  var td = tr[i].getElementsByTagName("td")[1];
                  if (td) {
                     if (td.innerHTML.toLowerCase().includes(value)) {
                        tr[i].style.display = "";
                     } else {
                        tr[i].style.display = "none";
                     }
                  }
               }
            });
         }

            
         if (document.querySelectorAll(".form-check-input[name='flexRadio']")[2].checked == true) {
            document.querySelector("#searchBar").addEventListener("input", function () {
   
               var value = document.querySelector("#searchBar").value.toLowerCase();
            
               var tr = table.getElementsByTagName("tr");
               for (i = 0; i < tr.length; i++) {
                  var td = tr[i].getElementsByTagName("td")[4];
                  if (td) {
                     if (td.innerHTML.toLowerCase().indexOf(value) > -1) {
                        tr[i].style.display = "";
                     } else {
                        tr[i].style.display = "none";
                     }
                  }
               }
            });
         
         
         }

});
//if none of the radio buttons are checked disable the search bar
document.querySelectorAll(".form-check-input[name='flexRadio']").forEach(function (element) {
   if (element.checked == true) {
      document.querySelector("#searchBar").disabled = false;
   } else {
      document.querySelector("#searchBar").disabled = true;
   }

   
   element.addEventListener("change", function () {
      if (element.checked == true) {
         document.querySelector("#searchBar").disabled = false;
      } else {
         document.querySelector("#searchBar").disabled = true;
      }
   });

}
);


document.getElementById("logoutBtn").addEventListener("click", function () {
   ConfirmDialog("Logout", "Are you sure you want to logout?", () => {
      window.location.href = "logout.php";
   });
});



for (let i = 1; i < table.querySelectorAll("tr").length; i++) {
   var row = table.querySelectorAll("tr");
   row[i].querySelectorAll("td")[0].addEventListener("dblclick", function () {
      console.log(parseInt(this.innerText), row[i].querySelectorAll("td")[1].innerText)
      new newEvent(parseInt(this.innerText), row[i].querySelectorAll("td")[1].innerText);
   }
   );
}