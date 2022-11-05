const num = new Object(42);
const str = new Object('abc');

console.log(num);
console.log(str);
console.log(num.constructor);
console.log(str.constructor);
console.log(num.constructor.name);
console.log(str.constructor.name);

class Latte {
    constructor() {
        this.name = 'latte';
    }
}
class Espresso {
    constructor() {
        this.name = 'Espresso';
    }
}
class Milk {
    constructor() {
        this.name = 'Milk';
    }
}

class MilkFactory {
    static createCoffee() {
        return new Milk();
    }
}
class LatteFactory {
    static createCoffee() {
        return new Latte();
    }
}
class EspressoFactory {
    static createCoffee() {
        return new Espresso();
    }
}
const factoryList = { LatteFactory, EspressoFactory, MilkFactory };

class CoffeeFactory {
    static createCoffee(type) {
        const factory = factoryList[type];
        return factory.createCoffee();
    }
}
const order = (factory) => {
    const coffee = CoffeeFactory.createCoffee(factory);

    console.log(coffee);
    console.log(coffee.name); // latte
};
console.log(factoryList);
order('LatteFactory');
order('MilkFactory');
