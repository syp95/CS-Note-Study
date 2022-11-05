class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    getInstance() {
        return this;
    }
    hi() {
        console.log('hi');
    }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
a.hi();
b.hi();

class NotSingleton {
    hi() {
        console.log('hi2');
    }
}

const c = new NotSingleton();
const d = new NotSingleton();
console.log(c === d);

console.log(Singleton);
console.log(Singleton.instance);
console.log(NotSingleton);
console.log(NotSingleton.instance);
