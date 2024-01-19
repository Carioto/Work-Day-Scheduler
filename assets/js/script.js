var thisDay = dayjs();
var displayDate = document.querySelector("#currentDay");
var btnClick = $('.saveBtn');
var localDesc = document.querySelector(".description");    


$(document).ready(function () {
  displayDate.textContent = thisDay.format('MMMM DD, YYYY');
  var nowHour = thisDay.format('[hour-]HH');
  
  $(".time-block").each(function() {
    var hourBlock = $(this).attr("id")
    var commentBlock = localStorage.getItem($(this).attr("id"));
    if (nowHour > hourBlock){
      
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).children(".description").val(commentBlock);

    }
    else if (nowHour === hourBlock){
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).children(".description").val(commentBlock);

    }
    else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    $(this).children(".description").val(commentBlock);
    }});

  
    
  
  
  
  
  
  
  
  
  
  
  
  btnClick.on("click", function(){

   var appTime = $(this).parent().attr("id");
   var apptText = $(this).siblings(".description").val();
    console.log(appTime);
    console.log(apptText);
   localStorage.setItem(appTime,apptText);
   
  })
   


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 });
