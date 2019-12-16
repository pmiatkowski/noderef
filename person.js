
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get greeting() {
        console.log(`Hello ${this.name} and i'm ${this.age}`);
    }
}

module.exports = Person;