class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: Key;
  public tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(key: Key): void {
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
//як приклад пробуємо відкрити з неправильним ключем(не відкриються)
house.openDoor(new Key());
//відкриваємо з правильним ключем //// house.openDoor(person.getKey());
house.openDoor(key);
//людина може увійти
house.comeIn(person);

export {};
