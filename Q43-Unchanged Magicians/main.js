//Q43-Unchanged Magicians:Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//create a funx that modify the list of magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//funx to make magician great through .map() it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//crete an array of magicians names.
var magician_names = ["Alice", "David", "Chris"];
//Making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names
var copy_gret_magicians = make_great(copy_magician_names);
//Show original array
show_magicians(magician_names);
//Show copied array
show_magicians(copy_gret_magicians);
