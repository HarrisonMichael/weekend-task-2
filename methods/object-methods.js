// Object.assign
let tutor = {livinus: 10, joshua: 9, groovy: 10}
let students = {gift: 8, joshuaJunior: 10, OG: 9}

let returned = Object.assign(tutor, students);
console.log(returned);

// object.create
let chimereze = {
    age: 9,
    isHuman: false,
    intro: function () {
        console.log(`My name is ${this.name}. I am ${this.age}. I am a human= ${this.isHuman}`);
    }
}

let mySelf = Object.create(chimereze);

mySelf.name = "Chimereze";
mySelf.age = 14;
mySelf.isHuman = true;

mySelf.intro();

// Object.is()
let chicken = "Oviparous animals"
let goat = "mammals"
let cow = "mammals"
console.log(Object.is(chicken, cow))
console.log(Object.is(goat, cow))