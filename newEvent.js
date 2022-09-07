
function newEvent(id, fname) {
        this.id = id;
        this.fname = fname;
        
        
        this.container = document.createElement("div");
        this.container.className = "newEvent-container";

        this.container.innerHTML = `
        <div class="newEvent">
            <h1>New Event</h1>

            <div class="user-info">
                <div>
                    <label class="h6">Name : </label>
                    <span class="text-primary">${this.fname}</span>
                </div>

                <div>
                    <label class="h6">Id Number :</label>
                    <span class="text-primary">${this.id}</span>
                </div>
            </div>

            <div class="edit-client-inputs">
                <label class="h6">Event Name</label>
                <input type="text" id="evt-name" class="form-control">

                <label class="h6">Date</label>
                <input type="date" id="date"  class="form-control">

                <label class="h6">Time</label>
                <input type="text" id="time" placeholder="hh:mm:ss" class="form-control">

                <label class="h6">Description</label>
                <textarea type="text" id="data"  class="form-control"></textarea>
            </div>

            <div class="edit-form-buttons">
                <button class="btn btn-danger edit-form-cancel">Cancel</button>
                <button class="btn btn-success edit-form-save">Save</button>
            </div>

        </div>
        `;
        this.delete = function () {
            this.container.remove();
        }

        document.body.appendChild(this.container);

        this.container.querySelector(".edit-form-cancel").addEventListener("click", () => {
            this.delete();
        }
        );

        this.container.querySelector(".edit-form-save").addEventListener("click", () => {

            ConfirmDialog("New Client", "Are you sure you want to add this event?", () => {
                var evt = this.container.querySelector("#evt-name").value;
                var date = this.container.querySelector("#date").value + " ";
                var time = this.container.querySelector("#time").value;
                var data = this.container.querySelector("#data").value;

                var r = new XMLHttpRequest();
                r.open("GET", "newEvent.php?id=" + this.id + "&evt-name=" + evt + "&date=" + date + "&time=" + time + "&data=" + data + "", true);

                r.onreadystatechange = function () {
                    if (r.readyState == 4) {
                        if (r.responseText == "true") {
                            window.location.reload();
                        } else {
                            alert("Error");
                        }
                    }
                }
                r.send();
            });
        });


    }
