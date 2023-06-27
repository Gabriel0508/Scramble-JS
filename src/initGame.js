import * as Words from "./text.js";
import * as Elements from "./elements.js";
import { timer } from "./countDown.js";

export const initializeGame = () => {
 // timer("ten-countdown", 1, 0);
  let randomObj = Words.words[Math.floor(Math.random() * Words.words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  Elements.wordText.innerText = wordArray.join("");
  Elements.hintText.innerText = randomObj.hint;
  Elements.correctWord = randomObj.word.toLowerCase();
  Elements.inputText.value = "";
  Elements.inputText.setAttribute("maxlength", Elements.correctWord.length);
};
