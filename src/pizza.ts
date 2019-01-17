// FUNCTION way 
function Pizza1(name: string) {
  this.name = name;
  this.toppings = [];
}

Pizza1.prototype.addTopping = function addTopping(topping: string) {
  this.toppings.push(topping);
};

// CLASS way
class Pizza {
  readonly name: string;
  private toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

  removeTopping() {
    this.toppings.pop();
  }
}

const myPizza = new Pizza('hawaiian');

// PRIVATE / PUBLIC / READONLY
// if private / public keywordsaren't assigned to the property, by default they are public
// readonly makes the property un-editable
// myPizza.name accessible because public but cannot be modified or reassigned because it's readonly
// myPizza.toppings NOT accessible because private
// myPizza.addTopping accessible because public
// myPizza.removeTopping accessible because public

// ACCESSORS: GETTERS and SETTERS
class Sizes {
  sizes: string[];

  constructor(sizes: string[]) {

  }
 
  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

const mySizes = new Sizes(['S', 'M']);
mySizes.availableSizes = ['L', 'XL'];

// INHERITANCE
class BigPizza extends Sizes implements PizzaInterace {
  readonly name: string;
  private toppings: string[] = [];

  constructor(name: string, sizes: string[]) {
    // super() when we want to pass arguments into the constructor of the class that is being extended
    super(sizes);
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

  removeTopping() {
    this.toppings.pop();
  }
}

const myBigPizza = new BigPizza('hawaiian', ['M', 'L']);

// ABSTRACT class - a kind of class that is meant to only be extended from and NOT instantiated on its own
abstract class exampleAbstract { ... }

// PROTECTED - when we need to edit/mutate a private property on an extended class
// https://platform.ultimatecourses.com/courses/typescript-basics/lectures/4149716

// INTERFACE with CLASS
// Keyword: 'implements'
// class BigPizza extends Sizes implements PizzaInterface { ... }
interface PizzaInterace {
  readonly name: string;
  private toppings: string[];
  addTopping(topping: string): void;
  removeTopping(): void;
}

// STATIC methods and properties
class Coupon {
  static allowed = ['pizza', 'calzone'];
  static create(percent: number): string {
    return `Coupon_${percent}`;
  }
}

// static methods and properties can be accessed WITHOUT creating and instance of 
Coupon.create(25);