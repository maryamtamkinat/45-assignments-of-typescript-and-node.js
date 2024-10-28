// Q3-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name: string = "Maryam tamkinat";

console.log(person_name.toUpperCase());

console.log(person_name.toLowerCase());

console.log(person_name.replace(/\b\w/g, (char)=>char.toUpperCase()));
