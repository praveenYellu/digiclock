function updateClock() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial update to avoid delay
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
