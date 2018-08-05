$("#priority").on("change", addTask);

function addTask() {

	var taskName = $("#task")[0].value;
	var rating = $("#priority")[0].options[priority.options.selectedIndex].value;

	if(taskName) {
		$("#taskList").append("<div class='col-6 py-5'><h3 class='display-4'>" + taskName + "</h3></div>");
		$("#taskList").append("<div class='col-6 py-5'><h3 class='display-4'>" + rating + " stars</h3></div>");
	}

};