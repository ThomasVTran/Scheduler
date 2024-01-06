// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = dayjs()
var currentHour = parseInt(currentDay.format('H'))
var hourIndex = 0
var hourEl = $('.time-block').children("div").text()
var hourBlock = $('.time-block')

var hourHour = []

console.log(currentDay.format('H') == hourEl);
console.log(parseInt(currentDay.format('H')))

$('.time-block').each(function () {
  var divIds =parseInt($(this).attr('id').split('-').pop());
  hourHour.push(divIds)
})

console.log(hourHour);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
   $('.saveBtn').on('click' ,function() {
    var userInput = $(this).siblings().eq(1).val()
    var hoursId = $(this).parent().attr('id')
    localStorage.setItem(hoursId, userInput)
    console.log(userInput);
    console.log(hoursId);
    }
    )

    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (let i = 0; i < hourBlock.length; i++) {


   if (currentHour === hourHour[i]) {
    $(hourBlock[i]).addClass('present')
  } else if (currentHour < hourHour[i]) {
    $(hourBlock[i]).addClass('future')
  } else if (currentHour > hourHour[i]) {
    $(hourBlock[i]).addClass('past')
  };
  }
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
  // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(currentDay.format('dddd MMM D, YYYY'))
});
