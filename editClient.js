function EditClient(id, fname, email, pass, contact) {
    this.id = id;
    this.fname = fname;
    this.email = email;
    this.pass = pass;
    this.contact = contact;   
        this.container = document.createElement("div");
        this.container.className = "editClient-container";

        this.container.innerHTML = `
        <div class="editClient">
            <h1>Edit Client</h1>

            <div class="edit-client-inputs">
                <label class="h6">Name</label>
                <input type="text" id="name" value="${this.fname}" class="form-control">

                <label class="h6">Id Number</label>
                 <input type="text" id="id" value="${this.id}" class="form-control">

                <label class="h6">Email</label>
                <input type="email" id="email" value="${this.email}" class="form-control">

                <label class="h6">Password</label>
                <input type="text" id="pass" value="${this.pass}" class="form-control">

                <label class="h6">Contact</label>
                <input type="text" id="contact" value="${this.contact}" class="form-control">
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

            ConfirmDialog("Edit Client", "Are you sure you want to edit this client?", () => {
                var fname_edited = this.container.querySelector("#name").value;
                var id_edited = this.container.querySelector("#id").value;
                var email_edited = this.container.querySelector("#email").value;
                var pass_edited = this.container.querySelector("#pass").value;
                var contact_edited = this.container.querySelector("#contact").value;

                var r = new XMLHttpRequest();
                r.open("GET", "editClient.php?id=" +id_edited+ "&name=" + fname_edited + "&email=" + email_edited + "&pass=" + pass_edited + "&contact=" + contact_edited+"&preID="+this.id+"", true);

                r.onreadystatechange = function () {
                    if (r.readyState == 4) {
                        if (r.responseText == "true") {
                            window.location.reload();
                        } else {
                            alert(r.responseText);
                        }
                    }
                }
                r.send();
            });
        });
        

    }