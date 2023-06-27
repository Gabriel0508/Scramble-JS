import * as Elements from "./elements.js";
import { InitGame } from "./initGame";

export class CheckWord {
  static checkWordText = () => {
    let userWord = Elements.inputText.value.toLowerCase();

    if (!userWord) {
      return alert("Please enter the word to check!");
    }
    if (userWord !== Elements.correctWord) {
      return alert(`Oops! ${userWord} is not a match`);
    } else {
      return alert(`Congrats!`);
    }
  };
}
