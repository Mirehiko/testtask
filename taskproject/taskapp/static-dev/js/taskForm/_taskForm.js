class TaskForm {
    constructor(params) {
        this.id = ID();
        this.form = null;
        this.formTitle = null;
        this.formTaskUserName = null;
        this.formTaskEmail = null;
        this.formTaskTitle = null;
        this.formTaskDescription = null;
        this.closeBtn = null;
        this.confirmBtn = null;

        this.state = "hidden";
        this.action = null;
        this.formName = "Форма";
        this.confirmBtnText = "Принять";
        this.init(params);
    }

    init(params) {
        this.action = params.action;
        this.formName = params.formName;
        this.confirmBtnText = params.confirmBtnText;

        this.form = $(document.createElement("form"));
        this.form.addClass("taskForm");

        this.formTitle = $(document.createElement("h2"));
        this.formTitle.addClass("taskTitle");
        this.formTitle.text(this.formName);
        this.form.append(this.formTitle);

        this.formTaskTitle = $(document.createElement("input"));
        this.formTaskTitle.attr("type", "text");
        this.formTaskTitle.attr("name", "title");
        this.formTaskTitle.attr("placeholder", "Имя задачи");
        this.formTaskTitle.addClass("inputField");

        this.formTaskDescription = $(document.createElement("textarea"));
        this.formTaskDescription.attr("type", "text");
        this.formTaskDescription.attr("name", "description");
        this.formTaskDescription.attr("placeholder", "Описание");
        this.formTaskDescription.addClass("inputField");

        this.formTaskUserName = $(document.createElement("input"));
        this.formTaskUserName.attr("type", "text");
        this.formTaskUserName.attr("name", "user");
        this.formTaskUserName.attr("placeholder", "ФИО");
        this.formTaskUserName.addClass("inputField");

        this.formTaskEmail = $(document.createElement("input"));
        this.formTaskEmail.attr("type", "email");
        this.formTaskEmail.attr("name", "email");
        this.formTaskEmail.attr("placeholder", "Email");
        this.formTaskEmail.addClass("inputField");

        this.form.append(this.formTaskTitle);
        this.form.append(this.formTaskDescription);
        this.form.append(this.formTaskUserName);
        this.form.append(this.formTaskEmail);

        this.confirmBtn = $(document.createElement("button"));
        this.confirmBtn.attr("type", "confirm");
        this.confirmBtn.addClass("btn btnConfirm");
        this.confirmBtn.text(this.confirmBtnText);
        this.form.append(this.confirmBtn);

        this.closeBtn = $(document.createElement("button"));
        this.closeBtn.attr("type", "button");
        this.closeBtn.addClass("btn btnClose");
        this.closeBtn.append('<i class="fas fa-times"></i>');
        this.form.append(this.closeBtn);

        this.confirmBtn.on("click", e => {
            e.preventDefault();
            if (this.data === null) {
                this.data = {};
            }
            let data = this.data;
            data["user"] = this.formTaskUserName.val();
            data["email"] = this.formTaskEmail.val();
            data["title"] = this.formTaskTitle.val();
            data["description"] = this.formTaskDescription.val();
            this.action(data);
        });

        this.closeBtn.on("click", () => {
            if (this.state === "visible") {
                this.close();
            } else {
                this.show();
            }
        });
    }

    setFormData(data) {
        this.data = data;
        // console.log('formdata', this.data)
        this.formTaskTitle.val(data.title);
        this.formTaskDescription.val(data.description);
        this.formTaskUserName.val(data.user);
        this.formTaskEmail.val(data.email);
    }

    clearFormData() {
        this.data = null;
        this.formTaskTitle.val("");
        this.formTaskDescription.val("");
        this.formTaskUserName.val("");
        this.formTaskEmail.val("");
    }

    show() {
        this.state = "visible";
        this.form.attr("state", this.state);
    }

    close() {
        this.state = "hidden";
        this.form.attr("state", this.state);
        this.clearFormData();
    }
}