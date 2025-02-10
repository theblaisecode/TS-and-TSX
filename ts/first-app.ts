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

function sub(a: number, b: number): number {
  const result = a - b;
  return result;
}

console.log(add(2, 5));
console.log(sub(5, 2));

// ----------------------------------------------- Defining function types
function calculateSum(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
): void {
  calcFn(a, b);
}

console.log(calculateSum(2, 5, add));
console.log(calculateSum(12, 5, sub));

// ----------------------------------------------- Type Alias
type AddFn = (a: number, b: number) => number;

function calculateSum2(a: number, b: number, calcFn: AddFn): void {
  calcFn(a, b);
}

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user2: User;

// ----------------------------------------------- Object Types with Interfaces
interface Credentials {
  username: string;
  email: string;
  password: string;
}

let creds: Credentials;

creds = {
  username: "Blaise",
  email: "theblaisecode@gmail.com",
  password: "1234Blaise",
};

// ----------------------------------------------- Interfaces vs Type Alias

// ----------------------------------------------- Merging multiple types
type Admin = {
  permission: string[];
};

type AppUser = {
  username: string;
};

type AppAdmin = Admin & AppUser;

const newUser: AppAdmin = {
  permission: ["login", "logout"],
  username: "Blaise",
};

// --------- using interface

interface Admin2 {
  permission: string[];
}

interface AppUser2 {
  username: string;
}

interface AppAdmin2 extends Admin2, AppUser2 {
  email: string;
}

const newUser2: AppAdmin2 = {
  permission: ["login", "logout"],
  username: "Blaise",
  email: "theblaisecode@gmail.com",
};

// ----------------------------------------------- Literal Types
let role: "admin" | "user" | "editor" | 1;

role = 1;
role = "admin";
role = "editor";
role = "user";
// role = 23

// ----------------------------------------------- Type Guard (typeof, if statement)
type Role = "admin" | "user" | "editor" | 1;

function performAction(action: string | number, role: Role): void {
  if (role === "admin" && typeof action === "number") {
    console.log("olla");
  }
}

// ----------------------------------------------- Generic Type

