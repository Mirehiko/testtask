function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ID = function ID() {
  return "_".concat(Math.random().toString(36).substr(2, 9));
};

var Task =
/*#__PURE__*/
function () {
  function Task() {
    _classCallCheck(this, Task);
  }

  _createClass(Task, null, [{
    key: "getPage",
    value: function getPage(pageNumber) {
      var url = "/api/gettasks/?page=".concat(pageNumber);

      if (sortParams) {
        url += sortParams;
      }

      $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function success(response) {
          drawTaskList(response.taskList);
          paginator.setData(response);
        }
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      $.ajax({
        url: "/api/createtask/",
        type: "POST",
        data: data,
        dataType: "json",
        success: function success(response) {
          // console.log("response:", response);
          taskCreateForm.clearFormData();
          Task.getPage(paginator.currentPage);
        }
      });
    }
  }, {
    key: "update",
    value: function update(data) {
      console.log('before update', data);
      $.ajax({
        url: "/api/updatetask/",
        type: "POST",
        data: data,
        dataType: "json",
        success: function success(response) {
          if (response.status === "success") {
            // taskCreateForm.clearFormData();
            // Task.getPage(paginator.currentPage);
            var task = taskList.filter(function (task) {
              return task.data.taskid == data.taskid;
            });
            task[0].updateData(data);
            task[0].fillFileds();
          } else {
            console.error(response);
          }
        }
      });
    }
  }]);

  return Task;
}();

var TaskForm =
/*#__PURE__*/
function () {
  function TaskForm(params) {
    _classCallCheck(this, TaskForm);

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

  _createClass(TaskForm, [{
    key: "init",
    value: function init(params) {
      var _this = this;

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
      this.confirmBtn.on("click", function (e) {
        e.preventDefault();

        if (_this.data === null) {
          _this.data = {};
        }

        var data = _this.data;
        data["user"] = _this.formTaskUserName.val();
        data["email"] = _this.formTaskEmail.val();
        data["title"] = _this.formTaskTitle.val();
        data["description"] = _this.formTaskDescription.val();
        console.log('prepare', data);

        _this.action(data);
      });
      this.closeBtn.on("click", function () {
        if (_this.state === "visible") {
          _this.close();
        } else {
          _this.show();
        }
      });
    }
  }, {
    key: "setFormData",
    value: function setFormData(data) {
      this.data = data;
      console.log('formdata', this.data);
      this.formTaskTitle.val(data.title);
      this.formTaskDescription.val(data.description);
      this.formTaskUserName.val(data.user);
      this.formTaskEmail.val(data.email);
    }
  }, {
    key: "clearFormData",
    value: function clearFormData() {
      this.data = null;
      this.formTaskTitle.val("");
      this.formTaskDescription.val("");
      this.formTaskUserName.val("");
      this.formTaskEmail.val("");
    }
  }, {
    key: "show",
    value: function show() {
      this.state = "visible";
      this.form.attr("state", this.state);
    }
  }, {
    key: "close",
    value: function close() {
      this.state = "hidden";
      this.form.attr("state", this.state);
      this.clearFormData();
    }
  }]);

  return TaskForm;
}();

var TaskForms =
/*#__PURE__*/
function () {
  function TaskForms() {
    _classCallCheck(this, TaskForms);

    this.forms = {};
  }

  _createClass(TaskForms, [{
    key: "add",
    value: function add(form) {
      this.forms[form.id] = form;
    }
  }, {
    key: "closeForms",
    value: function closeForms() {
      for (var form in this.forms) {
        this.forms[form].close();
      }
    }
  }]);

  return TaskForms;
}();

var TaskListView =
/*#__PURE__*/
function () {
  function TaskListView(data) {
    _classCallCheck(this, TaskListView);

    this.updateData(data);
    this.state = "closed";
    this.init();
  }

  _createClass(TaskListView, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.task = $(document.createElement("div"));
      this.task.attr("taskid", this.data.taskid);
      this.task.addClass("task");

      if (this.data.is_cofirmed) {
        this.task.addClass("task-confirmed");
      }

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
      this.taskConfirm.append('<i class="far fa-check-square"></i>');

      if (this.data.is_cofirmed) {
        this.taskConfirm.find('i').addClass('fa-check-square');
      } else {
        this.taskConfirm.find('i').addClass('fa-square');
      }

      this.taskControls.append(this.taskConfirm);
      this.taskEdit = $(document.createElement("button"));
      this.taskEdit.attr("type", "button");
      this.taskEdit.attr("taskid", this.data.taskid);
      this.taskEdit.addClass("btn taskEdit");
      this.taskEdit.append('<i class="far fa-edit"></i>');
      this.taskControls.append(this.taskEdit);
      this.fillFileds();
      this.taskStateToggler.on("click", function () {
        if (_this2.state === "opened") {
          _this2.close();
        } else {
          _this2.open();
        }
      });
      this.taskConfirm.on("click", function () {
        confirmTask.call(this);
      });
      this.taskEdit.on("click", function () {
        taskForms.closeForms();
        taskUpdateForm.clearFormData();
        taskUpdateForm.setFormData(_this2.data);
        taskUpdateForm.show();
      });
    }
  }, {
    key: "updateData",
    value: function updateData(data) {
      this.data = data;
    }
  }, {
    key: "fillFileds",
    value: function fillFileds() {
      this.taskTitle.text(this.data.title);
      this.taskUser.text(this.data.user);
      this.taskEmail.text(this.data.email);
      this.taskDescription.text(this.data.description);

      if (this.data.is_cofirmed) {
        this.taskConfirm.find('i').removeClass('fa-square');
        this.taskConfirm.find('i').addClass('fa-check-square');
      } else {
        this.taskConfirm.find('i').removeClass('fa-check-square');
        this.taskConfirm.find('i').addClass('fa-square');
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.state = "opened";
      this.task.addClass("task-opened");
    }
  }, {
    key: "close",
    value: function close() {
      this.state = "closed";
      this.task.removeClass("task-opened");
    }
  }]);

  return TaskListView;
}();

var Paginator =
/*#__PURE__*/
function () {
  function Paginator() {
    _classCallCheck(this, Paginator);

    this.name = "";
    this.nextPage = 0;
    this.currentPage = 0;
    this.prevPage = 0;
    this.init();
  }

  _createClass(Paginator, [{
    key: "init",
    value: function init() {
      var _this3 = this;

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
      this.prevBtn.on("click", function (e) {
        e.preventDefault();
        Task.getPage(_this3.prevPage);
      });
      this.nextBtn.on("click", function (e) {
        e.preventDefault();
        Task.getPage(_this3.nextPage);
      });
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.currentPage = data.page;
      this.nextPage = data.next;
      this.prevPage = data.prev;
      this.current.text(this.currentPage);
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.prevPage) {
        this.prevBtn.attr("state", "visible");
      } else {
        this.prevBtn.attr("state", "hidden");
      }

      if (this.nextPage) {
        this.nextBtn.attr("state", "visible");
      } else {
        this.nextBtn.attr("state", "hidden");
      }
    }
  }]);

  return Paginator;
}();

function fillTaskList(data) {
  taskList = [];

  for (var taskid in data) {
    taskList.push(new TaskListView(data[taskid]));
  }
}

function drawTaskList(data) {
  fillTaskList(data);
  var fragment = $(document.createDocumentFragment());

  for (var taskid in data) {
    fragment.append(taskList[taskid].task);
  }

  $(".taskList").empty();
  $(".taskList").append(fragment);
}

function confirmTask() {
  var taskid = $(this).attr('taskid');
  var task = taskList.filter(function (task) {
    return task.data.taskid == taskid;
  });
  task = task[0].data;

  if (task.is_cofirmed) {
    task.is_cofirmed = false;
  } else {
    task.is_cofirmed = true;
  }

  Task.update(task);
} //==========================================================


var paginator = new Paginator();
paginator.setData(toPage);
$('#paginator').append(paginator.pagination);
var taskCreateForm = new TaskForm({
  action: Task.create,
  formName: "Создать задачу",
  confirmBtnText: "Создать"
});
var taskUpdateForm = new TaskForm({
  action: Task.update,
  formName: "Редактирование",
  confirmBtnText: "Сохранить"
});
var taskActions = $("#taskActions");
taskActions.append(taskCreateForm.form);
taskActions.append(taskUpdateForm.form);
var taskForms = new TaskForms();
taskForms.add(taskCreateForm);
taskForms.add(taskUpdateForm);
var sortParams = ''; //============================================

drawTaskList(taskList);
$("#createTask").on("click", function () {
  taskForms.closeForms();
  taskCreateForm.show();
});
$(".sortItem").on("click", function (e) {
  e.preventDefault();
  $(".sortItem").removeClass('active');
  $(this).addClass('active');
  sortParams = "&sortby=".concat($(this).attr('sortby'), "&sortkey=").concat($(this).attr('sortby'));
  Task.getPage(paginator.currentPage);
});