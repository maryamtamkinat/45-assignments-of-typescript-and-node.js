//Q31-No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["Mahira", "Maryam","Admin", "Bisma", "Ismal"];
userNames = [];

if(userNames.length === 0){
    console.log("The list is empty, you need to find some users.")
}else{
    userNames.forEach(user => {
        if(user === "Admin"){
            console.log(`Hello ${user}, would you like to see a status report?`);
        }else{
            console.log(`Thankyou ${user},for logging in again`);
        }
    })
};