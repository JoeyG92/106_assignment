var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = true;
var isPanelVisible = true;

function toggleImportant(){
    console.log("Icon clicked!");

    if (isImportant) {
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    } else {
        $("iImportant").removeClass(nonImprtantIcon).addClass(importantIcon);
        isImportant = true;
    }
}

function toggleVisibility() {

    if(isPanelVisible) {
        $("#sect-form").hide();
        isPanelVisible = false;
    } else {
        $("#sect-form").show();
        isPanelVisible = true;
    }
}

function saveTask(){
    console.log("Saving task...");
    var title = $("#txtTitle").val();
    var desc = $("#txtDescription").val();
    var dueDate = $("#selStartDate").val();
    var startDate = $("#selStartDate").val();
    var category = $("#selCategory").val();
    var color = $("#selColor").val();

    console.log(title, desc, dueDate, startDate, category, color);
}
function init() {
    console.log("Task manager");

    $("#iImportant").click(toggleImportance);
    $("#btnTogglePanel").click(toggleVisibility);
    $("#btnSave").click(saveTask);
}


function test() {
    $.ajax({
        type:"GET",
        url: "https://restclass.azurewebsites.net/api/test",
        success: function(response){
            console.log("Server says:", response);
        },
        error: function(errorDetails){
            console.log(errorDetails);
        },
    });
}
window.onload = init;



















