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

var timeBlockHour = $('col-1 hour')

$(document).ready(function () {
   // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    // Log user input into local storage //
        localStorage.setItem(time, text);
    })
      
    //Retrieve the current time 
     //var currentHour = moment().hour();
     //console.log(currentHour);
        
    // loop over time blocks
 // Audit each time block to display past, current and future timeblocks
//var auditTime = function () {
   var currentTime = moment().format("HH:mm:ss");
     $("#currentDay").text(currentTime);
     console.log(currentTime)

    // Verify time and set appropriate color
    if (currentTime === hour0800) {
        $("#time-block0800").addClass("present");
    }
    else if (currentTime > hour0800) {
        $("#time-block0800").addClass("past");
    }
    else {
        $("#time-block0800").addClass("future");
    }
    // Verify time and set appropriate color
    if (currentTime === hour0900) {
        $("#time-block0900").addClass("present");
    }
    else if (currentTime > hour0900) {
        $("#time-block0900").addClass("past");
    }
    else {
        $("#time-block0900").addClass("future");
    }

   // Verify time and set appropriate color
    if ((currentTime === hour1000)) {
        $("#timeblock1000").addClass("present");
    }
    else if (currentTime > hour1000) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

   // Verify time and set appropriate color
    if (currentTime === hour1100) {
        $("#timeblock11").addClass("present");
    }
    else if (currentTime > hour1100) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

 // Verify time and set appropriate color
    if (currentTime === hour1200) {
        $("#timeblock12").addClass("present");
    }
    else if (currentTime > hour1200) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    // Verify time and set appropriate color
    if (currentTime === hour1300) {
        $("#timeblock13").addClass("present");
    }
    else if (currentTime > hour1300) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

// Verify time and set appropriate color
    if (currentTime === hour1400) {
        $("#timeblock14").addClass("present");
    }
    else if (currentTime > hour1400) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("#timeblock14").addClass("future");
    }

    // Verify time and set appropriate color
    if (currentTime === hour1500) {
        $("#timeblock15").addClass("present");
    }
    else if (currentTime > hour1500) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }

    // Verify time and set appropriate color
    if (currentTime === hour1600) {
        $("#timeblock16").addClass("present");
    }
    else if (currentTime > hour1600) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }

    // Verify time and set appropriate color
    if (currentTime === hour1700) {
        $("#row-time-block17").addClass("present");
    }
    else if (currentTime > hour1700) {
        $("row-time-block17").addClass("past");
    }
    else {
        $("row-time-block17").addClass("future");
   
        // Verify time and set appropriate color
    if (currentTime === hour1800) {
        $("#hour1800").addClass("present");
    }
    else if (currentTime > hour0900) {
        $("#rowtimeblock1800").addClass("past");
    }
    else {
        $("#rowtimeblock1800").addClass("future");
    } 
    };
},

// End Audit Timeblock

    // Local Storage text retrieval
    $("#hour0800 .description").val(localStorage.getItem("hour0800")))
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
  
