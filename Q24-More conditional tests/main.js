"use strict";
//Q24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//create a variable
let name1 = "Maryam";
let name2 = "MARYAM";
let num1 = 35;
let num2 = 50;
//Check equality of string
console.log(name1 == "Maryam");
//Check unequality of string
console.log(name1 != "Maryam");
//test using the lowercase funcyion for equality
console.log(name2.toLowerCase() == "maryam");
//test using the lowercase function for unequality
console.log(name2.toLowerCase() != "maryam");
//test a number for equality
console.log(num1 == 35);
//test a number fo unequality
console.log(num2 != 50);
//test a number greater than other number
console.log(num1 > 30);
//test a number is less than other number
console.log(num2 < 30);
//test a num greater or equal than other num
console.log(num1 >= 35);
//test a num less or equal than other num
console.log(num2 <= 35);
//test using && operator
console.log(num1 != 50 && num1 < 50);
console.log(num1 == 50 && num1 > 50);
//test using || operator
console.log(num2 > 50 || num2 == 50);
console.log(num2 < 50 || num2 != 50);
