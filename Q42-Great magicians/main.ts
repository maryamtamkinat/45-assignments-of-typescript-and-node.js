//Q42-Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//create a funx that modify the list of magicians
function show_magicians(magicians : string[]){
    magicians.forEach(name  => console.log(name)
        
    );
}

//funx to make magician great through .map() it will modify array.
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
//crete an array of magicians names.
let magician_names = ["Alice", "David", "Chris"]

//call the make great function to modify magician names.
let great_magicians = make_great(magician_names)

//call the shoe magicians that show modified the list of great magicians.
show_magicians(great_magicians)
