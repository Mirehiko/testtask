

$('.taskStateToggler').on('click', function (e) {
    const task = $(`.task[taskid="${$(this).attr('taskid')}"]`);
    if (task.hasClass('task-opened')) {
        task.removeClass('task-opened');
    }
    else {
        task.addClass('task-opened');
    }
});

$('.taskEdit').on('click', function (e) {
    const taskid = $(this).attr('taskid');
    $(`.inputField[name="id"]`).val(taskid);
    $(`.inputField[name="username"]`).val(taskList[taskid].user);
    $(`.inputField[name="email"]`).val(taskList[taskid].email);
    $(`.inputField[name="title"]`).val(taskList[taskid].title);
    $(`.inputField[name="description"]`).text(taskList[taskid].description);
});

$('.taskConfirm').on('click', function (e) {

});
