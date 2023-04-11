// Get the current time and display it in the clock
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM'; // Check if it's afternoon or morning
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[now.getDay()];
  
    // Convert from 24-hour to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12' in 12-hour time
  
    // Add leading zeros to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Update the clock display
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('day').innerHTML = dayOfWeek;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  