//Q16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

  //  • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    
  //  • Add one new guest to the beginning of your array.
    
  //  • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


  //create a Array of guests
  let guest_list = ["Hania", "Ibad", "Mahnoor", "Ammar"];

  //create a variale who cant come
  let cantcome =guest_list [2];

  guest_list.splice (2, 1, "Ayesha");

  //Print a variable
  console.log( cantcome,"can't come for diiner bcz of some issue.");
  
  //Create a variable for announce a good news
  let message = "Good News! I have found a Bigger Table for Dinner.";
  
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