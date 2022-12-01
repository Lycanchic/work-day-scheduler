// Current date displayed at the top of the page
var today = new Date();
var day = today.getDay();


var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector(".day").innerHTML = "Today is : " + dayList[day];

let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;

console.log("Today is : " + dayList[day]);

//var workDayHours = [
  //  moment().hour(0800).format('HHmm'),
   // moment().hour(0900).format('HHmm'),
   // moment().hour(1000).format('HHmm'),
   // moment().hour(1100).format('HHmm'),
   // moment().hour(1200).format('HHmm'),
   // moment().hour(1300).format('HHmm'),
   // moment().hour(1400).format('HHmm'),
   // moment().hour(1500).format('HHmm'),
   // moment().hour(1600).format('HHmm'),
   // moment().hour(1700).format('HHmm'),
   // moment().hour(1800).format('HHmm'),
//]

//var timeBlockHour = $('col-1 hour')

//$(document).ready(function () {
   //saveBtn.click listener 
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
        
    // loop over time blocks
 // Audit each time block to display past, current and future timeblocks
  //var auditTime = function () {
   //var currentTime = moment().format("HH:mm:ss");
   //  $("#currentDay").text(currentTime);
    // console.log(currentTime)

     function timeTracker() {
        //get current number of hours.

       //Retrieve the current time 
        var timeNow = moment().hour();
        console.log(currentTime)

        // loop over time blocks
       $(".time-block").each(function () {
         var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
       if (blockTime < timeNow) {
           $(document).ready(function () {
           })
         }
       })
    }
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
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

    // Local Storage text retrieval
    $("#hour0800 .description").val(localStorage.getItem("hour0800"))
    $("#hour0900 .description").val(localStorage.getItem("hour0900"));
    $("#hour1000 .description").val(localStorage.getItem("hour1000"));
    $("#hour1100 .description").val(localStorage.getItem("hour1100"));
    $("#hour1200 .description").val(localStorage.getItem("hour1200"));
    $("#hour1300 .description").val(localStorage.getItem("hour1300"));
    $("#hour1400 .description").val(localStorage.getItem("hour1400"));
    $("#hour1500 .description").val(localStorage.getItem("hour1500"));
    $("#hour1600 .description").val(localStorage.getItem("hour1600"));
    $("#hour1700 .description").val(localStorage.getItem("hour1700"));
    $("#hour1800 .description").val(localStorage.getItem("hour1800"));

   // timeTracker();
    
   