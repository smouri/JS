const enterWord = prompt("Enter a word");
if (enterWord === "" || enterWord === null || enterWord.trim() === "") {
  alert("invalid input");
} else if (enterWord.length % 2 === 0) {
  alert(enterWord.slice(enterWord.length / 2 - 1, enterWord.length / 2 + 1));
} else {
  alert(enterWord.charAt(enterWord.length / 2));
}
