// ----------------------------------------------- String
let userName: string = "Blaise";
// userName = 34;
userName = "Max";

// ----------------------------------------------- Number
let userAge: number = 34;

// ----------------------------------------------- Boolean
let isInvalid: boolean = true;

// ----------------------------------------------- Union
let userID: string | number = "abc1";
userID = 123;

// ----------------------------------------------- Object
let user: { name: string; age: number; isAdmin: boolean; id: string | number };

user = {
  name: "Blaise",
  age: 12,
  isAdmin: true,
  id: 45678,
};

// ----------------------------------------------- Array
let hobbies: string[];
hobbies = ["Traveling", "Manga", "Drawing"];

// number[], boolean[], (string | number)[]
// {name: string; age: number; hobbies: string[]; isAdmin: boolean}[]

// ----------------------------------------------- Adding types to function parmeter
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

console.log(add(2, 5));

// ----------------------------------------------- Defining function types
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
): void {
  calcFn(a, b);
}

calculate(2, 5, add);
