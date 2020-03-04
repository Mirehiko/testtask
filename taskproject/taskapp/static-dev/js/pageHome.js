class Task {
    static getPage(pageNumber) {
        let url = `/api/gettasks/?page=${pageNumber}`;
        if (sortParams) {
            url += sortParams;
        }
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function (response) {
                drawTaskList(response);
            }
        });
    }
    static create(data) {
        $.ajax({
            url: "/api/createtask/",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (response) {
                // console.log("response:", response);
                taskCreateForm.clearFormData();
                Task.getPage(paginator.currentPage);
            }
        });
    }
    static update(data) {
        console.log(data)
        $.ajax({
            url: "/api/updatetask/",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    taskCreateForm.clearFormData();
                    Task.getPage(paginator.currentPage);
                    // updateTask(data);
                    // console.log(response);
                } else {
                    console.error(response);
                }
            }
        });
    }
}

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
            console.log(this.data)
            console.log(this)
            if (this.data === null) {
                this.data = {};
            }
            this.data["username"] = this.formTaskUserName.val();
            this.data["email"] = this.formTaskEmail.val();
            this.data["title"] = this.formTaskTitle.val();
            this.data["description"] = this.formTaskDescription.val();
            this.action(this.data);
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
        console.log('formdata', this.data)
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

class TaskForms {
    constructor() {
        this.forms = {};
    }
    add(form) {
        this.forms[form.id] = form;
    }
    closeForms() {
        for (let form in this.forms) {
            this.forms[form].close();
        }
    }
}

class TaskListView {
    constructor(data) {
        this.data = data;
        this.state = "closed";
        this.init();
    }
    init() {
        this.task = $(document.createElement("div"));
        this.task.attr("taskid", this.data.taskid);
        this.task.addClass("task");

        this.taskHeader = $(document.createElement("div"));
        this.taskHeader.addClass("taskHeader");
        this.task.append(this.taskHeader);

        this.taskTitle = $(document.createElement("span"));
        this.taskTitle.addClass("taskHeader__item taskTitle");
        this.taskHeader.append(this.taskTitle);

        this.taskUser = $(document.createElement("span"));
        this.taskUser.addClass("taskHeader__item taskUser");
        this.taskHeader.append(this.taskUser);

        this.taskEmail = $(document.createElement("span"));
        this.taskEmail.addClass("taskHeader__item taskEmail");
        this.taskHeader.append(this.taskEmail);

        this.taskStateToggler = $(document.createElement("button"));
        this.taskStateToggler.attr("type", "button");
        this.taskStateToggler.addClass("taskHeader__item taskStateToggler");
        this.taskStateToggler.append('<i class="fas fa-chevron-down"></i>');
        this.taskHeader.append(this.taskStateToggler);

        this.taskBody = $(document.createElement("div"));
        this.taskBody.addClass("taskBody");
        this.task.append(this.taskBody);

        this.taskControls = $(document.createElement("div"));
        this.taskControls.addClass("taskControls");
        this.taskBody.append(this.taskControls);

        this.taskDescription = $(document.createElement("div"));
        this.taskBody.append(this.taskDescription);

        this.taskConfirm = $(document.createElement("button"));
        this.taskConfirm.attr("type", "button");
        this.taskConfirm.attr("taskid", this.data.taskid);
        this.taskConfirm.addClass("btn taskConfirm");
        if (this.data.is_confimed) {
            this.taskConfirm.append('<i class="far fa-check-square"></i>');
        }
        else {
            this.taskConfirm.append('<i class="far fa-square"></i>');
        }
        this.taskControls.append(this.taskConfirm);

        this.taskEdit = $(document.createElement("button"));
        this.taskEdit.attr("type", "button");
        this.taskEdit.attr("taskid", this.data.taskid);
        this.taskEdit.addClass("btn taskEdit");
        this.taskEdit.append('<i class="far fa-edit"></i>');
        this.taskControls.append(this.taskEdit);

        this.fillFileds();

        this.taskStateToggler.on("click", () => {
            if (this.state === "opened") {
                this.close();
            } else {
                this.open();
            }
        });

        this.taskConfirm.on("click", function () {
            confirmTask.call(this)
        });

        this.taskEdit.on("click", () => {
            taskForms.closeForms();
            taskUpdateForm.clearFormData();
            taskUpdateForm.setFormData(this.data);
            taskUpdateForm.show();
        });
    }
    updateData(data) {
        this.data = data;
        this.fillFileds();
    }
    fillFileds() {
        console.log(this)
        this.taskTitle.text(this.data.title);
        this.taskUser.text(this.data.user);
        this.taskEmail.append(this.data.email);
        this.taskDescription.text(this.data.description);
    }
    open() {
        this.state = "opened";
        this.task.addClass("task-opened");
    }
    close() {
        this.state = "closed";
        this.task.removeClass("task-opened");
    }
}


function drawTaskList(data) {
    taskList = {};
    let fragment = $(document.createDocumentFragment());
    for (let task in data.taskList) {
        taskList[task] = new TaskListView(data.taskList[task]);
        fragment.append(taskList[task].task);
    }
    $(".taskList").empty();
    $(".taskList").append(fragment);

    paginator.setData(data);
}

class Paginator {
    constructor() {
        this.name = "";
        this.nextPage = 0;
        this.currentPage = 0;
        this.prevPage = 0;
        this.init();
    }

    init() {
        this.pagination = $(document.createElement("div"));
        this.pagination.addClass("taskControls pagination");

        this.prevBtn = $(document.createElement("a"));
        this.prevBtn.attr("type", "button");
        this.prevBtn.addClass("btn taskControl pageControl js-goto");
        this.prevBtn.append('<i class="fas fa-chevron-left"></i>');
        this.pagination.append(this.prevBtn);

        this.current = $(document.createElement("span"));
        this.current.attr("type", "button");
        this.current.addClass("btn taskControl");
        this.current.text(this.currentPage);
        this.pagination.append(this.current);

        this.nextBtn = $(document.createElement("a"));
        this.nextBtn.attr("type", "button");
        this.nextBtn.addClass("btn taskControl pageControl js-goto");
        this.nextBtn.append('<i class="fas fa-chevron-right"></i>');
        this.pagination.append(this.nextBtn);

        this.prevBtn.on("click", e => {
            e.preventDefault();
            Task.getPage(this.prevPage);
        });

        this.nextBtn.on("click", e => {
            e.preventDefault();
            Task.getPage(this.nextPage);
        });
    }

    setData(data) {
        this.currentPage = data.page;
        this.nextPage = data.next;
        this.prevPage = data.prev;
        this.current.text(this.currentPage);
        this.draw();
    }
    draw() {
        if (this.prevPage) {
            this.prevBtn.attr("state", "visible");
        }
        else {
            this.prevBtn.attr("state", "hidden");
        }

        if (this.nextPage) {
            this.nextBtn.attr("state", "visible");
        }
        else {
            this.nextBtn.attr("state", "hidden");
        }
    }
}

// let taskList = {};
const paginator = new Paginator();
paginator.setData(toPage);
$('#paginator').append(paginator.pagination);
//draw

// function updateTask(task, data) {
//     task.updateData(data);
// }

const ID = function () {
    return `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
};

const taskCreateForm = new TaskForm({
    action: Task.create,
    formName: "Создать задачу",
    confirmBtnText: "Создать"
});

const taskUpdateForm = new TaskForm({
    action: Task.update,
    formName: "Редактирование",
    confirmBtnText: "Сохранить"
});

const taskActions = $("#taskActions");
taskActions.append(taskCreateForm.form);
taskActions.append(taskUpdateForm.form);

const taskForms = new TaskForms();
taskForms.add(taskCreateForm);
taskForms.add(taskUpdateForm);

$("#createTask").on("click", function () {
    taskForms.closeForms();
    taskCreateForm.show();
});

$(".taskStateToggler").on("click", function (e) {
    const task = $(`.task[taskid="${$(this).attr("taskid")}"]`);
    if (task.hasClass("task-opened")) {
        task.removeClass("task-opened");
    } else {
        task.addClass("task-opened");
    }
});

$(".taskEdit").on("click", function (e) {
    const taskid = $(this).attr("taskid");
    taskForms.closeForms();
    taskUpdateForm.setFormData(taskList[taskid]);
    taskUpdateForm.show();
});

let sortParams = '';

$(".sortItem").on("click", function (e) {
    e.preventDefault();
    $(".sortItem").removeClass('active')
    $(this).addClass('active')

    sortParams = `&sortby=${$(this).attr('sortby')}&sortkey=${$(this).attr('sortby')}`;
    Task.getPage(paginator.currentPage);
});

$('.taskConfirm').on('click', confirmTask);

function confirmTask() {
    const taskid = $(this).attr('taskid');
    console.log(taskid)
    console.log(taskList)
    console.log(taskList[taskid])
    if (taskList[taskid].is_confimed) {
        taskList[taskid].is_confimed = false;
        $(this).removeClass('fa-check-square');
        $(this).addClass('fa-square');
    }
    else {
        $(this).addClass('fa-check-square');
        $(this).removeClass('fa-square');
        taskList[taskid].is_confimed = true;
    }
    Task.update(taskList[taskid]);
}
