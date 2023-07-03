import * as Elements from "./elements.js";
import { initializeGame } from "./initGame.js";

export class StartGame {
  static startGame() {
    Elements.home.style.display = "none";
    Elements.game.style.display = "flex";

    initializeGame();
  }
}
