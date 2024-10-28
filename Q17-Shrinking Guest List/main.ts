//Q17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

  //  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
    
   // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
    
  //  • Print a message to each of the two people still on your list, letting them know they’re still invited.
    
  //  • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

  
//create a Array of guests
let guest_list = ["Hania", "Ibad", "Mahnoor", "Ammar"];

//create a variale who cant come
let cantcome =guest_list [2];

guest_list.splice (2, 1, "Ayesha");

//Print a variable
console.log( cantcome,"can't come for diiner bcz of some issue.");

//Create a variable for announce a good news
let message = "Goode News! I have found a Bigger Table for Dinner.";

//print a message of good news
console.log(message);

//Add a person in starting of the list
guest_list.unshift("Mahira");

//Add a person in ending of the list
 guest_list.push("Bisma");

 //create a variable to add person in the middle of the list
 let middle_idx = Math.floor(guest_list.length / 2);
 
 //Print a person name in the middle
 guest_list.splice(middle_idx, 0, "Barirah");

 //Print The list for inviting the Dinner
guest_list.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?` ));

//Print message that you can invite only two guest for dinner
console.log("Unfortunately< the diiner table wont arrive on time so I can invite only two guests.");

//Remove guests and print message for apologize
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry, ${remove_guest} I can't invite you for dinner.`);
}

//print invition for the last two guests
console.log("Invitation for the last two guests");
guest_list.forEach(two_guest => console.log(`Luckily ${two_guest}, You are still invited to dinner`));

//remove last two guests
guest_list.pop();
guest_list.pop();

console.log("Empty List",guest_list);