// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')

  let lessonsLeft = prompt('How many lessons are left in the day?')
  let secondsLeft = lessonsLeft*60*60
  alert('There are' +secondsLeft+ 'Secons in left in the day')
}
