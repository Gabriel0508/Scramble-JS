import "./styles/common.scss";
import * as Elements from "./elements.js";
import { StartGame } from "./startGame";
import { initializeGame } from "./initGame";
import { CheckWord } from "./checkWord";

Elements.startBtn.addEventListener("click", StartGame.startGame);
Elements.refreshBtn.addEventListener("click", initializeGame);
Elements.checkBtn.addEventListener("click", CheckWord.checkWordText);

/**
 * Close the dialog
 */
Elements.closeDialog.addEventListener("click", (event) => {
  event.preventDefault();
  Elements.dialog.close();
  Elements.dialog.style.display = "none";
  Elements.homePage.classList.remove("is-blurred");
});
