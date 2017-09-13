/* Exercise 1:

Declare a variable called name.
Assign the variable name the String value of your name.
Use the console.log function to print "Hello name", where name is your name. */

var name;
name = "Ramandeep";
console.log("Hello " + name);



/* Exercise 2:

Assign the variable x the Integer value of 1125.
Assign the variable answer the result of x modulus 2.
Output the answer to console. */

var x = 1125;
var answer = x % 2;
console.log(answer);



/* Exercise 3:

The value of a is the Boolean true.
The value of b is the Boolean false.
The value of c is the Bolean true.
Find what a OR b OR c results in and print it to the console. */

var a = true;
var b = false;
var c = true;
console.log(a || b || c);



/* Exercise 4:

The value of a is the Boolean true.
The value of b is the Boolean false.
The value of c is the Boolean true.
Find what a AND b AND c results in and print it to the console. */

var a = true;
var b = false;
var c = true;
console.log(a && b && c);



/* Exercise 5:

Compute 10 - 3 * 5/4 + 202 % 3 and assign it to the variable answer1.
Compute 10 - (3 * (5/4) + (202 % 3)) and assign it to the variable answer2.
Print both of these answers. Why do you think they are different? Research the order of operations for JavaScript. */

var answer1 = 10 - 3 * 5/4 + 202 % 3; 
var answer2 = 10 - (3 * (5/4) + (202 % 3));

console.log(answer1, answer2);


/* Exercise 6:

Convert the Integer 12 into a String.
Convert the String "113" into an Integer.
Convert the String "1.12356" into a Float.
Convert the String "Hello World" into an Integer and save it to the variable x. Print x to the console. What do you see? Research the resulting value if you're not sure. */

console.log(String(12));
console.log(parseInt("113"));
console.log(parseFloat("1.12356"));
var x = parseInt("Hello World");
console.log(x);




/* Regular Expressions:

Match the string "BrainStation" when given the strings "I am a BrainStation student" and "I am a student." What is the resulting value? (HINT: Look at .search()).
Replace the string "BrainStation student" with the string "Junior Developer" when provided the string "I am a BrainStation student." (HINT: Look at .replace()). */