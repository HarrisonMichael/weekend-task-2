// String.prototype.includes()
let intro = "My name is chimereze"

let name = "chimereze";
let surname = "michael";

console.log(`The name "${name}" ${intro.includes(name) ? 'is' : 'is not'} included in the intro`);
console.log(`The surname "${surname}" ${intro.includes(surname) ? 'is' : 'is not'} included in the intro`);

// String.prototype.at()
let index = 9;

console.log(`Using an index of ${index} the character returned is ${intro.at(index)}`);

// String.prototype.repeat()
console.log(`intro of myself: ${intro.repeat(3)}`);