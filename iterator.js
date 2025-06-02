//to make the object iteratable 
let person = {
  name: "Dalia",
  age: 80,
  city: "Greece",

  [Symbol.iterator]: function* () {
    let keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (typeof this[key] !== "function") {
        yield [key, this[key]];
      }
    }
  }
};

console.log("Person data:");
for (let [k, v] of person) {//k:key , v:value 
  console.log(k + ": " + v);
}