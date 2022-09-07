//create a confirm dialog object
function ConfirmDialog(title, message, callback) {
    this.message = message;
    this.callback = callback;
    this.dialog;

        //create the dialog
        this.dialog = document.createElement("div");

        this.dialog.className = "dialog-container";
        this.dialog.innerHTML = `
            <div class="dialog">
            <div class="dialog-header">
                <h3>${title}</h3>
            </div>
            
            <div class="dialog-body">
                <p>${this.message}</p>
            </div>
            <br>
            <div class="dialog-footer">
                <button class="btn btn-danger dialog-button-cancel">Cancel</button>
                <button class="btn btn-primary dialog-button-confirm">Confirm</button>
            </div>
            </div>
        `;

        //add the dialog to the body
        document.body.appendChild(this.dialog);

        //add the event listeners
        this.dialog.querySelector(".dialog-button-cancel").addEventListener("click", () => {
            this.dialog.remove();
        });
        this.dialog.querySelector(".dialog-button-confirm").addEventListener("click", () => {
            
            this.callback();
            this.dialog.remove();
        });
    
        this.remove = () => {
            this.dialog.remove();
        }
    }

  