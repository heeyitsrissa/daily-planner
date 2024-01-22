// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDayEl = $('#currentDay');
const leadEl = $('.lead');
const saveBtnEl = $('.saveBtn');
const descriptionEl = $('.description');
const timeBlockEl = $('.time-block');



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  saveBtnEl.on('click', saveTextInput);
  function saveTextInput(){
    let textInput = document.querySelectorAll('.description').value;
    descriptionEl.textContent = textInput;
    localStorage.setItem('textInput', JSON.stringify(textInput));
    
  }
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  function timeTravel(){
    const presentHour = (new Date()).getHours();
    const blockedTime = timeBlockEl.attr('id');
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
    // $('.time-block').each(function(){
    //   const saveText = timeBlockEl.attr('id');
    //   const input = localStorage.getItem(saveText);
    //   timeBlockEl.children('.description').val(input);
    // })
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function timeDisplay () {
    const time = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(time);
  }
  timeTravel();

  setInterval(timeDisplay, 1000);
  
});
