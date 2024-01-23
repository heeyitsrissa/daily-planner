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

   saveBtnEl.on('click', function(){
      let textInput = $(this).parents('.time-block').find('.description').val();
      let index = $(this).parents('.time-block').attr('id');
      localStorage.setItem(index, textInput);
    })

    function getSchedule(){
      for(let i = 0; i < timeBlockEl.length; i++){
        
        let index = parseInt($(timeBlockEl[i]).attr('id'));
    console.log(typeof index)
        if((i + 9)=== index){
          const scheduleEl = localStorage.getItem(index);
          console.log(scheduleEl)
          $(timeBlockEl[i]).children('.description').val(scheduleEl);
        } 
      }
      
      
    }
    getSchedule();
  
  // TODO: Add code to apply the past, present, or future class to each time
  function timeTravel(){
    const presentHour = (new Date()).getHours();
    $('.time-block').addClass(function() {
      return +this.id === presentHour ? 'present' : +this.id < presentHour ? 'past' : 'future'; 
    });
    if('.past'){
      localStorage.clear(getSchedule);
    } else {
      return;
    }
}
  
  // TODO: Add code to display the current date in the header of the page.
  function timeDisplay () {
    const time = dayjs('').format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(time);
  }
  timeTravel();

  setInterval(timeDisplay, 1000);
  
});
