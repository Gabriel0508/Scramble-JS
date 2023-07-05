import * as Elements from "./elements.js";
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
    Elements.dialog.style.display = "none";
    Elements.homePage.classList.remove("is-blurred");
  }, 1000);
};
