// - Implicit Binding
// - Explicit Binding
// - `new` Binding
// - `window` Binding.


// - Implicit Binding
let person = {
    name: 'Abdullah',
    team: 'Front-End',
    age : 35,
    printPlayerName: function (){
        console.log(this.name);
    }
}

// person.printPlayerName();  // Abdullah


// ==================Example 2=================

const printPlayerNameFunc = function (obj){
    obj.printPlayerName = function (){
        console.log(this.name);
    }
}

let rakib = {
    name: 'Rakib',
    age: 35
}
let tamim = {
    name: 'Tamim',
    age: 32
}
 
/* printPlayerNameFunc(rakib);
printPlayerNameFunc(tamim);
rakib.printPlayerName();
tamim.printPlayerName() */

// ================Example 3=================
const player = function (name, age){
    return {
        name : name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name: 'Mr. Jalal Uddin',
            printName: function(){
                console.log(this.name);
            }
        }
    }
}

let sakib = player('Sakib', 35);
// sakib.printName(); // Sakib
// sakib.father.printName();  // Mr. Jalal Uddin


// - Explicit Binding

let player2 = function() {
    console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);
}

let mushfique = {
    name: 'Mushfique',
    age: 25
}

let v1 = 'All-rounder';
let v2 = 'Younger';
let v3 = 'Best Player';
const v = [v1, v2, v3];

// player2.call(mushfique, v1, v2, v3);
// player2.apply(mushfique, v);
var newFunc = player2.bind(mushfique, v1, v2, v3); // bind is used to return function // store function 
                                                        // in a variable.
newFunc();

// - `new` Binding

function player3 (name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

// const anik = new player3('Anik', 35);


// - `window` Binding.

const newPrintName = function (){
    // console.log(window === this); // if you see in chrome console it will shows true
    console.log(this); // here this refers full window
}

newPrintName();


