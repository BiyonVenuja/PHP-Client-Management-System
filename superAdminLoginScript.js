

document.getElementById("loginButton").addEventListener("click", function () {
    var login = document.getElementById("login");
    var errmsg = document.getElementById("errorMsg");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var param = "id=" + username + "&password=" + password;

    var r = new XMLHttpRequest();
    r.open("POST", "super-AdminLoginProcess.php", true);
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send(param);
    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            if (r.responseText == "true") {
                window.location.href = "super-admin.php";
                
            } else {
                errmsg.style.display = "block";
                login.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
                setTimeout(() => {
                    login.style.animation = "";
                }, 1000);
                setTimeout(() => {
                    errmsg.style.display = "none";
                }, 2000);

            }
        }
    }
    
});

document.getElementById("username").addEventListener("keydown", function (event) {
    //consume space
    if (event.keyCode == 32) {
        event.preventDefault();
        return false;
    }
});