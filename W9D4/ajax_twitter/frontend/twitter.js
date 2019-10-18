const FollowToggle = require('./follow_toggle.js');

window.addEventListener("DOMContentLoaded", function(){
  
  const $toggleButtons = $('.follow-toggle');
  for (let i = 0; i < $toggleButtons.length; i++) {
    new FollowToggle($toggleButtons[i]);
  }

});


