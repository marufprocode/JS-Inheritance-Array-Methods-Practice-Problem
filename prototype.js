// Prototype হল জাভাস্ক্রিপ্টের যেকোন ফাংশন এর একটি property যেটা একটা Object কে পয়েন্ট করে। 

function Person (name, age){
    let person = Object.create (Person.prototype);
    person.name = name;
    person.age = age;

    return person;
}


Person.prototype = {
    eat(){
        console.log(`Person is Eating`);
    },
    sleep(){
        console.log(`Person is Sleeping`);  
    },
    play(){
        console.log(`Person is Playing`);
    }
}

const sakib = Person('Sakib', 35);
sakib.play(); 
// console.log(sakib);
const Rakib = Person('Rakib', 28);
Rakib.sleep();
