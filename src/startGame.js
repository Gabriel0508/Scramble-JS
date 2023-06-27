import * as Elements from "./elements.js";
import { initializeGame } from "./initGame.js";
import { timer } from "./countDown.js";

export class StartGame {
  static startGame() {
    Elements.home.style.display = "none";
    Elements.game.style.display = "flex";

    initializeGame();

    timer("ten-countdown", 1, 0);
  }
}
