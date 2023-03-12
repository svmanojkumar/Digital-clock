const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const amorpmEl = document.getElementById('amorpm');

function changetime() {
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  // let second = date.getSeconds();
  let ampm = '';

  if (hour >= 12) {
    ampm = 'PM';
  } else {
    ampm = 'AM';
  }
  amorpmEl.textContent = ampm;
  if (hour > 12) {
    hour = hour - 12;
  }

  hoursEl.textContent = hour;
  minutesEl.textContent = minute;
  secondsEl.textContent = second;
  // if (second < 10) {
  //   second = '0' + second;
  // }
  // secondsEl.textContent = second;
}
setInterval(changetime, 1000);
