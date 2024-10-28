"use strict";
//Q37-Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Medium", printMessage = "I Love TypeScript") {
    console.log(`You selected ${size} size with ${printMessage} prints on shirt`);
}
make_shirt();
//Call a function with large siza and default msg
make_shirt("Large");
//Call a function with samall siza but diffrent msg
make_shirt("Small", "JK");
