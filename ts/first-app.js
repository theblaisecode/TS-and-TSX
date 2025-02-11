var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
// ----------------------------------------------- String
var userName = "Blaise";
// userName = 34;
userName = "Max";
// ----------------------------------------------- Number
var userAge = 34;
// ----------------------------------------------- Boolean
var isInvalid = true;
// ----------------------------------------------- Union
var userID = "abc1";
userID = 123;
// ----------------------------------------------- Object
var user;
user = {
  name: "Blaise",
  age: 12,
  isAdmin: true,
  id: 45678,
};
// ----------------------------------------------- Array
var hobbies;
hobbies = ["Traveling", "Manga", "Drawing"];
// number[], boolean[], (string | number)[]
// {name: string; age: number; hobbies: string[]; isAdmin: boolean}[]
// ----------------------------------------------- Adding types to function parmeter
function add(a, b) {
  var result = a + b;
  return result;
}
function sub(a, b) {
  var result = a - b;
  return result;
}
console.log(add(2, 5));
console.log(sub(5, 2));
// ----------------------------------------------- Defining function types
function calculateSum(a, b, calcFn) {
  calcFn(a, b);
}
calculateSum(2, 5, add);
calculateSum(12, 5, sub);
function calculateSum2(a, b, calcFn) {
  calcFn(a, b);
}
var user2;
var creds;
creds = {
  username: "Blaise",
  email: "theblaisecode@gmail.com",
  password: "1234Blaise",
};
var newUser = {
  permission: ["login", "logout"],
  username: "Blaise",
};
var newUser2 = {
  permission: ["login", "logout"],
  username: "Blaise",
  email: "theblaisecode@gmail.com",
};
// ----------------------------------------------- Literal Types
var role;
role = 1;
role = "admin";
role = "editor";
role = "user";
function performAction(action, role) {
  if (role === "admin" && typeof action === "number") {
    console.log("olla");
  }
}
var textStorage = {
  storage: [],
  add: function (data) {
    this.storage.push(data);
  },
};
var userStorage = {
  storage: [],
  add: function (user) {},
};
// ------------ creating custom generic functions
function merge(a, b) {
  return __assign(__assign({}, a), b);
}
var newestUser = merge({ name: "Blaise" }, { age: 12 });
newestUser.age;
newestUser.name;
