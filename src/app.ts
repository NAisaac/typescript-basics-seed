// NUMBER type
const pizzaCost: number = 10;
const pizzaToppings: number = 3;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

// STRING type
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// BOOLEAN type
const pizzas: number = 5;

function shouldOfferDiscount(orders: number): boolean {
  return orders >= 3;
}

if (shouldOfferDiscount(pizzas)) {
  console.log('You get a discount!');
} else {
  console.log('Order 3 pizzas or more to get a discount!');
}

// ANY type should be used as a last resort

// implicit vs explicit types

// VOID type when the function doesn't return anything
let selected: string = 'extra cheese';

function selectTopping(topping: string): void {
  selected = topping;
}

selectTopping('bacon');

// NEVER type... extremely rare
function orderError(error: string) {
  throw new Error(error);
}

orderError('Something went wrong');

// NULL and UNDEFINED type
// can be explicitly allowed using pipes
let pizzaCoupon: string | null | undefined = 'pizza25';

function removeCoupon(): void {
  pizzaCoupon = null;
  pizzaCoupon = undefined;
}

console.log(pizzaCoupon);
removeCoupon();
console.log(pizzaCoupon);

// UNION and LITERAL types
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('small');
selectSize('xlarge');

// FUNCTION type
// more specific type than just the Function keyword i.e. let sumOrder: Function;
let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;

// OPTIONAL ARG and DEFAUT VALUE
let sumOrderOptArgument: (price: number, quantity?: number) => number;
sumOrderOptArgument = (x, y = 1) => x * y;


// OBJECT type
let pizza: {
  name: string,
  price: number,
  foo: string,
  getName(): string, 
};

pizza = {
  name: 'Hot Pepperoni',
  price: 20,
  foo: 'bar',
  getName() { return pizza.name; }
};

// ARRAY type
let sizes: number[];
sizes = [1, 2, 3];

let toppings: string[];
toppings = ['pineapple', 'mushroom'];

// TUPLE type is sort of like a union of types inside an array with strict adherence to order
let pie: [string, number, boolean];
pie = ['Apple', 3, true];

// TYPE ALIAS
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let shirtSize: Size = 'small';

const pickSize: Callback = (x) => {
  shirtSize = x;
};

pickSize('medium');

// TYPE ASSERTION
// 😵😵😵😵😵😵😵😵
// https://platform.ultimatecourses.com/courses/typescript-basics/lectures/4116878
type Pita = { name: string, toppings: number };

const pita: Pita = { name: 'original', toppings: 3 };

const serialized = JSON.stringify(pita);

function getNameFromJSON(x: string) {
  return (JSON.parse(x) as Pita).name;
}

getNameFromJSON(serialized);

// INTERFACE
// interface has some differences from type e.g. interface does not require an equal(=) sign 
interface Burrito {
  name: string;
  ingredients: string[];
  getIngredients(): string[];
}

let burrito: Burrito;

function createBurrito(name: string, ingredients: string[]): Burrito {
  return {
    name,
    ingredients,
    getIngredients() {
      return this.ingredients;
    }
  };
}

burrito = createBurrito('gigante', ['meat', 'veggie', 'sour cream', 'guac']);

// EXTENDING INTERFACE and OPTIONAL PROPERTIES
interface Ingredients {
  ingredients: string[];
}

interface Burrito extends Ingredients {
  name: string;
  size?: number;
  getIngredients(): string[];
}
// ... remainder of the code example same as above ...