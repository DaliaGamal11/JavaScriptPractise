//custom method instead of the ordinary Replace , replaceall
let myShort = {
  [Symbol.replace](text) {
    if (text.length > 15) {
      return text.substring(0, 15) + "...";
    } else {
      return text;
    }
  }
};

console.log("Shortened:");
console.log("Cats are domesticated carnivorous mammals belonging to the family Felidae".replace(myShort));
console.log("Hello world".replace(myShort));