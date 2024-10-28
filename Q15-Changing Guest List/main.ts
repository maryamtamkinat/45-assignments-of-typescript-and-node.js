//Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Hania", "Ibad", "Mahnoor", "Ammar"];

let cantattend = guestList[2];

console.log(cantattend,"can't attend the dinner with us.");
guestList.splice(2, 1, "Ayesha");
guestList.forEach(guest => console.log(`Salam ${guest},Today would you like to dinner with us.`));

