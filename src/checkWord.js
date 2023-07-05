import * as Elements from "./elements.js";
import { initializeGame } from "./initGame";

export class CheckWord {
  static checkWordText = () => {
    let userWord = Elements.inputText.value.toLowerCase();

    if (!userWord) {
      Elements.dialog.show();
      Elements.dialog.style.display = "flex";
      Elements.homePage.classList.add("is-blurred");
      Elements.closeDialog.innerHTML = "Try again";
      return (Elements.dialogContent.innerHTML =
        "Please enter the word to check!");
    }

    if (userWord !== Elements.correctWord) {
      Elements.dialog.show();
      Elements.dialog.style.display = "flex";
      Elements.homePage.classList.add("is-blurred");
      Elements.closeDialog.innerHTML = "Try again";
      return (Elements.dialogContent.innerHTML = `Oops! ${userWord} is not a match!!`);
    } else {
      Elements.dialog.show();
      Elements.dialog.style.display = "flex";
      Elements.homePage.classList.add("is-blurred");
      Elements.closeDialog.innerHTML = "New Game";
      Elements.dialogContent.innerHTML = `Congrats! ${userWord} is the correct word.`;
      initializeGame();
    }
  };
}
