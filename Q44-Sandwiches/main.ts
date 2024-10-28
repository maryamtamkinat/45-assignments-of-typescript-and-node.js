//Q44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items : string []){
    console.log("\nMaking a sandwich with the following items:")
    items.forEach(item => console.log(item))
    console.log("Now Enjoy Sandwich")
}

makeSandwich("Bread", "Chicken", "Cheese", "Mayo")
makeSandwich("Bread", "Kabab", "Ketchup")
makeSandwich("Bread", "Chicken", "Cheese", "Tomato","Ketchup", "Mayo")