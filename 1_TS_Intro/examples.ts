//  primitive types
const age: number = 20;
const aname: string = "John Doe";
const isAdult: boolean = true;

console.log(age);
console.log(typeof age);
console.log(aname);
console.log(typeof aname);
console.log(isAdult);

// arrays
const colors: string[] = ["red", "green", "blue"];
const ages: number[] = [20, 30, 40];

// objects
type Person = {
  name: string;
  age: number;
  isAdult: boolean;
};

const person: Person = {
  name: "John Doe",
  age: 20,
  isAdult: true,
};
