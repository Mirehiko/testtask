//= include paginator/_paginator.js
//= include sort/_sort.js
//= include taskForm/_taskForm.js


const ID = function () {
    return `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
};

class Task {
    static getPage(page) {
        let data = {
            page: page,
            sortKey: activeSortField,
            sortWay: sortableFields[activeSortField]
        };

        $.ajax({
            url: `/api/gettasks/`,
            type: "GET",
            data: data,
            dataType: "json",
            success: function (response) {
                drawTaskList(response.taskList);
                paginator.setData(response);
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
                taskCreateForm.clearFormData();
                activeSortField = 'pub_date';
                sortableFields[activeSortField] = 'dec';
                Task.getPage();
            }
        });
    }

    static update(data) {
        $.ajax({
            url: "/api/updatetask/",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    let task = taskList.filter(task => task.data.taskid == data.taskid);
                    task[0].updateData(data);
                    task[0].fillFileds();
                } else {
                    console.error(response);
                }
            }
        });
    }

    static removeTask(taskid) {
        $.ajax({
            url: "/api/removetask/",
            type: "POST",
            data: { 'taskid': taskid },
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    Task.getPage();
                } else {
                    console.error(response);
                }
            }
        });
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
        this.updateData(data);
        this.state = "closed";
        this.init();
    }
    init() {
        this.task = $(document.createElement("div"));
        this.task.attr("taskid", this.data.taskid);
        this.task.addClass("task");
        if (this.data.is_cofirmed) {
            this.task.addClass("task-confirmed");
        }

        this.taskHeader = $(document.createElement("div"));
        this.taskHeader.addClass("taskHeader");
        this.task.append(this.taskHeader);

        this.taskMsg = $(document.createElement("span"));
        this.taskMsg.addClass("taskMsg");
        this.taskMsg.text('Отредактировано администратором');
        this.task.append(this.taskMsg);


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

        if (is_authorized) {
            this.taskControls = $(document.createElement("div"));
            this.taskControls.addClass("taskControls");
            this.taskBody.append(this.taskControls);

            this.taskConfirm = $(document.createElement("button"));
            this.taskConfirm.attr("type", "button");
            this.taskConfirm.attr("taskid", this.data.taskid);
            this.taskConfirm.addClass("btn taskConfirm");
            this.taskConfirm.append('<i class="far fa-check-square"></i>');
            if (this.data.is_cofirmed) {
                this.taskConfirm.find('i').addClass('fa-check-square');
            }
            else {
                this.taskConfirm.find('i').addClass('fa-square');
            }
            this.taskControls.append(this.taskConfirm);

            this.taskEdit = $(document.createElement("button"));
            this.taskEdit.attr("type", "button");
            this.taskEdit.attr("taskid", this.data.taskid);
            this.taskEdit.addClass("btn taskEdit");
            this.taskEdit.append('<i class="far fa-edit"></i>');
            this.taskControls.append(this.taskEdit);

            this.taskRemove = $(document.createElement("button"));
            this.taskRemove.attr("type", "button");
            this.taskRemove.attr("taskid", this.data.taskid);
            this.taskRemove.addClass("btn taskRemove");
            this.taskRemove.append('<i class="far fa-trash-alt"></i>');
            this.taskControls.append(this.taskRemove);

            this.taskConfirm.on("click", function () {
                confirmTask.call(this)
            });

            this.taskRemove.on("click", () => {
                Task.removeTask(this.data.taskid);
            });

            this.taskEdit.on("click", () => {
                taskForms.closeForms();
                taskUpdateForm.clearFormData();
                taskUpdateForm.setFormData(this.data);
                taskUpdateForm.show();
            });
        }

        this.taskDescription = $(document.createElement("div"));
        this.taskBody.append(this.taskDescription);

        this.fillFileds();

        this.taskStateToggler.on("click", () => {
            if (this.state === "opened") {
                this.close();
            } else {
                this.open();
            }
        });


    }
    updateData(data) {
        this.data = data;
    }
    fillFileds() {
        this.taskTitle.text(this.data.title);
        this.taskUser.text(this.data.user);
        this.taskEmail.text(this.data.email);
        this.taskDescription.text(this.data.description);

        if (this.data.is_cofirmed) {
            this.taskMsg.addClass("taskMsg-visible");
        }
        else {
            this.taskMsg.removeClass("taskMsg-visible");
        }

        if (is_authorized) {
            if (this.data.is_cofirmed) {
                this.task.addClass("task-confirmed");
                this.taskConfirm.find('i').removeClass('fa-square');
                this.taskConfirm.find('i').addClass('fa-check-square');
            }
            else {
                this.task.removeClass("task-confirmed");
                this.taskConfirm.find('i').removeClass('fa-check-square');
                this.taskConfirm.find('i').addClass('fa-square');
            }
        }
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

function fillTaskList(data) {
    taskList = [];
    for (let taskid in data) {
        taskList.push(new TaskListView(data[taskid]));
    }
}

function drawTaskList(data) {
    fillTaskList(data);
    let fragment = $(document.createDocumentFragment());
    for (let taskid in data) {
        fragment.append(taskList[taskid].task);
    }
    $(".taskList").empty();
    $(".taskList").append(fragment);
}

function confirmTask() {
    const taskid = $(this).attr('taskid');
    let task = taskList.filter(task => task.data.taskid == taskid);
    task = task[0].data;
    if (task.is_cofirmed) {
        task.is_cofirmed = false;
    }
    else {
        task.is_cofirmed = true;
    }
    Task.update(task);
}

//==========================================================

const paginator = new Paginator();
paginator.setData(toPage);
$('#paginator').append(paginator.pagination);

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

let sortParams = '';

//============================================

drawTaskList(taskList);

$("#createTask").on("click", function () {
    taskForms.closeForms();
    taskCreateForm.show();
});

$(".sortItem").on("click", function (e) {
    e.preventDefault();
    $(".sortItem").removeClass('active')
    $(this).addClass('active')

    sortParams = `&sortby=${$(this).attr('sortby')}&sortkey=${$(this).attr('sortby')}`;
    Task.getPage();
});


$('.sortBtn').on('click', function () {
    setActiveSort.call(this);
    Task.getPage(1);
});


