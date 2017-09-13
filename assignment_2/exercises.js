/* Exercise #1

The fizz buzz challenge: Fizz buzz is a common entry level challenge that interviewers use to quickly guage someone's program background. Print the numbers from 1 to 100 to the console, however for every number that is a multiple of 5 print the word fizz, for every number that is a multiple of 3 print buzz. If a number is both a multiple of 5 and 3 (like 15) print the word fizzbuzz. Hint: use if/else statements. */

for(var i=1;i<=100;i++) {
    if (i%3 == 0) {
        if(i%5 == 0) {
            console.log("fizzbuzz");
        } else {
            console.log("buzz");
        }
    } else if(i%5 == 0) {
        if(i%3 == 0) {
            console.log("fizzbuzz");
        } else {
            console.log("fizz");
        }
    } else {
        console.log(i);
    }
}



/* Exercise #2

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # # 
 
 */

 for(i=1;i<=8;i++) {
     start = '#';

 }