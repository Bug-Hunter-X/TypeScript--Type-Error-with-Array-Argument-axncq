function greeter(person: string[]): string {
  return "Hello, " + person.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Correct: Hello, Jane Doe, John Smith

//Alternative solution
function greeterSingle(person: string): string {
  return "Hello, " + person;
}

let userSingle = "Jane Doe";

console.log(greeterSingle(userSingle)); // Correct: Hello, Jane Doe