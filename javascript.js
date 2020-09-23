// setting a varible to show current day 
var day = moment().format('MMMM Do YYYY, h:mm:ss a');
//setting time to miltary time
var time = moment().format("H");
console.log("time", time);
//making a color change function
function colorchange(){
    if(time > 12){
        time - 12; 
    }
    if(time > moment().hour(9)){
        $("#timeC").addClass(".Past");
    }
}

// making a function for my current day
$("#currentDay").text(day);

/// putting all button into one varible
$(".saveBtn").on("click", function(){
    var task1 = $("#task1").val()
    localStorage.setItem("task1", task1);

    var task2 = $("#task2").val()
    localStorage.setItem("task2", task2);

    var task3 = $("#task3").val()
    localStorage.setItem("task3", task3);

    var task4 = $("#task4").val()
    localStorage.setItem("task4", task4);

    var task5 = $("#task5").val()
    localStorage.setItem("task5", task5);

    var task6 = $("#task6").val()
    localStorage.setItem("task6", task6);

    var task7 = $("#task7").val()
    localStorage.setItem("task7", task7);

    var task8 = $("#task8").val()
    localStorage.setItem("task8", task8);

    console.log({task1, task2, task3, task4, task5});
})



$(".saveBtn").text(function(){
    $("#task1").val(localStorage.getItem("task1"));
    $("#task2").val(localStorage.getItem("task2"));
    $("#task3").val(localStorage.getItem("task3"));
    $("#task4").val(localStorage.getItem("task4"));
    $("#task5").val(localStorage.getItem("task5"));
    $("#task6").val(localStorage.getItem("task6"));
    $("#task7").val(localStorage.getItem("task7"));
    $("#task8").val(localStorage.getItem("task8"));
});



colorchange();

//making a user inpu
var toDo = "";


function createTmeRow(time, id) {
    return `
    
    `
}

    


   
    
