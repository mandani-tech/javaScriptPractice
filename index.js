// Exercise 42
//
// Use a standard JavaScript template. In your main function create the array below:
//
//     var squad = ["One", "Two", "Three", "Four", "Five"];
// Print the array squad in reverse without using an array method.

//
// var squad = ["One", "Two", "Three", "Four", "Five"];
// for (i=0; i<squad.length; i++)
//
// {
//     console.log(squad[i]);
// }
//
// for (j=squad.length; j>=0; j--)
//
// {
//     // console.log("test")
//     console.log(squad[j])
// }
// console.log("test")
// for (let j in squad)
//
// {
//     console.log(squad[j])
// }
//
// Exercise 43
//
// Use a standard JavaScript template. In your main function generate a random
// number from 1 to 100 (look it up). Ask the user to guess the random number.
// Tell the user if the random number is higher or lower than the guess. Quit when they guess the number and print GOT IT!!!.
//

function main() {
    var userInp = (prompt("Please enter a positive number to start count number there or press to q :" ));
    while (userInp !== "q") {
         userInp = (prompt("Please enter a positive number to start count number there or press q to quit:" ));
         console.log(userInp);

    }
}
main()


















