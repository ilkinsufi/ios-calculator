const secondLine = document.querySelector(".second");
const minuteLine = document.querySelector(".minute");
const hoursLine = document.querySelector(".hours");
const time = document.querySelector(".time");
const weekdayDiv = document.querySelector(".weekdayDiv");

function weekday() {
  console.clear();
  let d = new Date();
  let day = d.getDay();
  let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
  console.log(day, hours, minute, second);
  time.textContent = `${hours}: ${minute}: ${second}`;
  switch (day) {
    case 1:
      weekdayDiv.textContent = "Birinci gün";
      break;
    case 2:
      weekdayDiv.textContent = "ikinci gün";
    case 3:
      weekdayDiv.textContent = "üçüncü gün";
    case 4:
      weekdayDiv.textContent = "dördüncü gün";
    case 5:
      weekdayDiv.textContent = "beşinci gün";
    case 6:
      weekdayDiv.textContent = "altıncı gün";
    case 7:
      weekdayDiv.textContent = "xadnoy gün";
    default:
      break;
  }
}
setInterval(() => {
  weekday();
}, 500);

function secondLineMove() {
  let d = new Date();
  let saniye = d.getSeconds() - 1;
  let degree = (saniye / 60) * 360 + 90;
  degree = degree + 6;
  console.log(saniye);
  secondLine.style.transform = `rotate(${degree}deg)`;
}
setInterval(() => {
  secondLineMove();
}, 1000);

function minuteLineMove() {
  let d = new Date();
  let deqiqe = d.getMinutes();
  let degree = (deqiqe / 60) * 360 + 90;
  degree = degree + 6 / 60;
  console.log(deqiqe);
  minuteLine.style.transform = `rotate(${degree}deg)`;
}
setInterval(() => {
  minuteLineMove();
}, 1000);

function hoursLineMove() {
  let d = new Date();
  let hour = d.getHours() % 12;
  let minute = d.getMinutes();
  let degree = ((hour + minute / 60) / 12) * 360 + 90;
  degree = degree + 30 / 3600;
  console.log(hour, minute);
  hoursLine.style.transform = `rotate(${degree}deg)`;
}
setInterval(() => {
  hoursLineMove();
}, 1000);
