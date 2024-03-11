class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    constructor(key) {
        super(key);
    }
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}
//створюємо ключ
const key = new Key();
//створюємо людину з цим ключем
const person = new Person(key);
//створюємо будинок з цим ключем
const house = new MyHouse(key);
//людина захоче увійти, але двері закриті
house.comeIn(person);
//пробуємо відкрити з неправильним ключем(не відкриються)
house.openDoor(new Key());
//відкриваємо з правильним ключем //// house.openDoor(person.getKey());
house.openDoor(key);
//людина може увійти
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map