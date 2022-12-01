// Current date displayed at the top of the page
var today = new Date();
var day = today.getDay();


var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector(".day").innerHTML = "Today is : " + dayList[day];

let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;

console.log("Today is : " + dayList[day]);

   //saveBtn.click event listener 
   $(".saveBtn").on("click", function () {
  
    // Get nearby values of the description in JQuery
       var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

    // Log user input into local storage //
       localStorage.setItem(time, text);
   })
      
    //Retrieve the current time 
     var currentHour = moment().hour();
     console.log(currentHour);
        
   
     function timeTracker() {
       

       //Retrieve the current time 
        var timeNow = moment().hour();
        console.log(currentTime)

        // Time Block loop over
       $(".time-block").each(function () {
         var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

     //  Verifying the current time and comparing it to the timeblocks
       if (blockTime < timeNow) {
           $(document).ready(function () {
           })
         }
       })
    }
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

     // Verifying the time and applying the correct time class to each time block
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
     })
     
    // End Timeblock verification

    // Text retrieval from Local Storage
    $("#hour8 .description").val(localStorage.getItem("hour8"))
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

  
    
   