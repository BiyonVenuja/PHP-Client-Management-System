function NewClientForm() {


        this.div = document.createElement("div")
        this.div.classList.add("newclient");

        this.div_container = document.createElement("div");
        this.div_container.classList.add("newclient-container");


        //title
        this.title = document.createElement("h1")
        this.title.innerHTML = "New Client";
        this.title.style.left = "20";
        this.title.style.top = "30";
        
        
        //Name Label
        this.label_name = document.createElement("label");
        this.label_name.innerHTML = "Name";
        
        this.label_name.classList.add("h6");
        //Name Input
        this.input_name = document.createElement("input");
        this.input_name.type = "text";
        this.input_name.id = "name";
        this.input_name.classList.add("form-control");

        //Id label
       
        this.label_id = document.createElement("label");
        this.label_id.innerHTML = "Id Number";
        this.label_id.classList.add("h6");
        //Id Input
        this.input_id = document.createElement("input");
        this.input_id.type = "text";
        this.input_id.id = "id";
        this.input_id.classList.add("form-control");

        //Email label
        this.label_email = document.createElement("label");
        this.label_email.innerHTML = "Email";
        this.label_email.classList.add("h6");
        //Email Inp_email.type = "email";
        this.input_email = document.createElement("input");
        this.input_email.id = "email";
        this.input_email.type = "email";
        this.input_email.classList.add("form-control");

        //Password Label       
        this.label_pass = document.createElement("label");
        this.label_pass.innerHTML = "Password";
        this.label_pass.classList.add("h6");
        //Id Input
        this.input_pass = document.createElement("input");
        this.input_pass.type = "text";
        this.input_pass.id = "pass";
        this.input_pass.classList.add("form-control");

        //Contact Label       
        this.label_contact = document.createElement("label");
        this.label_contact.innerHTML = "Contact";
        this.label_contact.classList.add("h6");
        //contact Input
        this.input_contact = document.createElement("input");
        this.input_contact.type = "text";
        this.input_contact.id = "contact";
        this.input_contact.classList.add("form-control");



        //close button
        this.btn = document.createElement("button");
        this.btn.innerHTML = "close";
        this.btn.classList.add("btn");
        this.btn.classList.add("btn-danger");
        this.btn.setAttribute("data-type", "close");
        //Submit button
        this.submit_btn = document.createElement("button");
        this.submit_btn.innerHTML = "Submit";
        this.submit_btn.classList.add("btn");
        this.submit_btn.classList.add("btn-success");
        this.submit_btn.classList.add("submit-btn");
        this.submit_btn.setAttribute("data-type", "submit");
        this.submit_btn.addEventListener('click', () => {
            //create a confirm dialog
            console.log("hello")
            ConfirmDialog("Confirm", "Are you sure you want to add this client?", () => {
                var name = this.input_name.value;
                var id = this.input_id.value;
                var email = this.input_email.value;
                var pass = this.input_pass.value;
                var contact = this.input_contact.value;
                //create an ajax request to the database
                var r = new XMLHttpRequest();
                r.open("GET", "addClient.php?name=" + name + "&id=" + id + "&email=" + email + "&pass=" + pass + "&contact=" + contact +"", true);
                r.onreadystatechange = function () {
                    if(r.readyState == 4){
                        if(r.responseText == "true"){
                            alert("Client added successfully");
                            window.location.reload();
                        }else{
                            
                            if(r.responseText.includes("Duplicate")){
                                alert("Client already exists");
                            } else {
                                alert(r.responseText);
                                alert("Client not added");
                            }
                        }
                    }
                }
                r.send();
           });
            
               
               
            
            
        }
            
        );

        document.body.appendChild(this.div_container);
        this.div_container.appendChild(this.div);
        this.div.appendChild(this.title);
        this.div.appendChild(this.label_name);
        this.div.appendChild(this.input_name);
        this.div.appendChild(this.label_id);
        this.div.appendChild(this.input_id);
        this.div.appendChild(this.label_email);
        this.div.appendChild(this.input_email);
        this.div.appendChild(this.label_pass);
        this.div.appendChild(this.input_pass);
        this.div.appendChild(this.label_contact);
        this.div.appendChild(this.input_contact);
        this.div.appendChild(this.submit_btn);
        this.div.appendChild(this.btn);

        this.btn.addEventListener('click', () => {
            this.div_container.remove();
        });


    }
    this.delete = function () {
        this.div_container.remove();
    }

    //add an event listener to the submit button



