// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDayEl = $('#currentDay');
const leadEl = $('.lead');
const saveBtnEl = $('.saveBtn');
const descriptionEl = $('.description');
const timeBlockEl = $('.time-block');
// const textEl = $('#text');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
saveBtnEl.on('click', function(){
  let textInput = $(this).parents('.time-block').find('.description').val();
  let index = $(this).parents('.time-block'). children('.hour').text();
 localStorage.setItem(textInput, index);
})


  
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  function timeTravel(){
    const presentHour = (new Date()).getHours();
    $('.time-block').addClass(function() {
      return +this.id === presentHour ? 'present' : +this.id < presentHour ? 'past' : 'future'; 
    });
}
  
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
    function renderSchedule(){
      let textInput = $(this).parents('.time-block').find('.description').val();
      let index = $(this).parents('.time-block'). children('.hour').text();
      localStorage.getItem(JSON.parse(textInput, index))
    }

    function sumbitSchedule(e){
      e.preventDefault();
      const scheduledToDo = descriptionEl.val();
      
      const schedule = renderSchedule();
      schedule.push(scheduledToDo);
    }
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function timeDisplay () {
    const time = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(time);
  }
  timeTravel();
  sumbitSchedule();

  setInterval(timeDisplay, 1000);
  
});
