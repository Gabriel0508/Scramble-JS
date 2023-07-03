import * as Elements from "./elements.js";

// export const timer = (elementName, minutes, seconds) => {
//   let element, endTime, hours, mins, msLeft, time;

//   function twoDigits(n) {
//     return n <= 9 ? "0" + n : n;
//   }

//   function updateTimer() {
//     msLeft = endTime - +new Date();
//     if (msLeft < 1000) {
//       alert(element.innerHTML = "Time is up!");
//       Elements.home.style.display = "flex";
//       Elements.game.style.display = "none";
//     } else {
//       time = new Date(msLeft);
//       hours = time.getUTCHours();
//       mins = time.getUTCMinutes();
//       element.innerHTML =
//         "Time Left:" +
//         " " +
//         (hours ? hours + ":" + twoDigits(mins) : mins) +
//         ":" +
//         twoDigits(time.getUTCSeconds());

//       setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
//     }
//   }

//   element = document.getElementById(elementName);
//   endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
//   updateTimer();
// };
let timer;

export const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (Elements.timeText.innerText = maxTime);
    }

    Elements.home.style.display = "flex";
    Elements.game.style.display = "none";
  }, 1000);
};
