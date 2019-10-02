window.addEventListener('load', () => {
  // Gets the text from each paragraph, then clears the contents of each
  // paragraph so that they can be retyped one character at a time
  let loreParagraphs = document.querySelectorAll(".lore p");
  let textArr = [];
  for (let i = 0; i < loreParagraphs.length; i++) {
    textArr.push(loreParagraphs[i].innerHTML);
    loreParagraphs[i].innerHTML = "";
  }
  
  /*
   * Types one character of lore.
   */
  let paragraphIndex = 0;
  let charIndex = 0;
  function typeChar() {
    // If we are done typing, do nothing
    if (paragraphIndex == textArr.length) {
      return;
    }
    loreParagraphs[paragraphIndex].innerHTML += textArr[paragraphIndex].charAt(charIndex);
    charIndex++;
    // If we have reached the end of a paragraph, go to the beginning of the
    // next paragraph
    if (charIndex >= textArr[paragraphIndex].length) {
      charIndex = 0;
      paragraphIndex++;
    }
  }

  setInterval(typeChar, 20);
  
});
