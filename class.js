// The things we did with prototype, now we will do it more simple way using class 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`Person is Eating`);
    }
    sleep(){
        console.log(`Person is Sleeping`);  
    }
    play(){
        console.log(`Person is Playing`);
    }
    
}


const sakib = new Person('Sakib', 35);
sakib.play(); 

const Rakib = new Person('Rakib', 28);
Rakib.sleep();
