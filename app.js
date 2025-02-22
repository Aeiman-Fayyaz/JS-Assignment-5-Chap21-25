// QUESTION 1
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// ANSWER

/*let firstName = prompt("Enter your first name")

let lastName = prompt("Enter your last name")

alert("Welcome " + firstName + "  " + lastName);*/

// QUESTION 2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// ANSWER

/*let userDevice = prompt("Enter your favorite mobile device")
    document.write("My favourite phone is " + userDevice + "<br/>" 
    + "Length of String = " + userDevice.length
    )
*/

// QUESTION 3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// ANSWER

/*let country = "Welcome to Pakistani"

document.write("String = " + country + "<br/>" + "Index of 'n' = " + country.indexOf("n"));*/


// QUESTION 4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

// ANSWER

/*let greeting = "Hello World"

document.write("String = " + greeting + "<br/>" + "Last Index of 'l' = " + greeting.lastIndexOf("l"))*/

// QUESTION 5
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// ANSWER

/*let nationality = "Pakistani"

document.write("<h3>Find the character at 3rd index in word: </h3>" + "<br/>" + nationality);

document.write("<h3>The character at 3rd index is: </h3>" + "<br/>" + nationality.charAt(3));*/


// QUESTION 6
// Repeat Q1 using string concat() method.

/*let firstName = prompt("Enter your first name")

let lastName = prompt("Enter your last name")

alert("Welcome " + firstName.concat  (lastName));*/

// ANSWER

// QUESTION 7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// ANSWER

/*let cityName = "Hyderabad"

document.write("<h4>Before replacement: </h4>" + "<br/>" + cityName + "<br/>")

document.write("<h4>After replacement: </h4>" + "<br/>" + cityName.replace ("Hyder" , "Islam"))*/

// QUESTION 8
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// ANSWER

/*let message = "Ali and Sami are best friends. They play cricket and football together."

document.write("<h4>Before replacement: </h4>" + "<br/>" + message + "<br/>")

document.write("<h4>After replacement: </h4>" + "<br/>" + message.replace ("and" , "&") + "<br/>")*/


// QUESTION 9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// ANSWER

/*let numInString = "472"

document.write("<h4>Value:</h4>" + numInString + "<br/>" + "<h4>Type:</h4>" + typeof numInString)

document.write("<h4>Value:</h4>" + numInString + "<br/>" + "<h4>Type:</h4>" + typeof +numInString)*/


// QUESTION 10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// ANSWER

/*let userInput = prompt("Enter some text")

document.write("<h4>User Input</h4>" + "<br/>" + userInput + "<br/>" + "<h4>Upper Case:</h4>" + "<br/>" + userInput.toUpperCase())*/

// QUESTION 11
// Write a program that takes user input. Convert and
// show the input in title case.

// ANSWER

/*let anotherUserInput = prompt("Enter some text")

let capitalized = anotherUserInput[0]

document.write("<h4>User Input:</h4>" + "<br/>" + anotherUserInput + "<h4>Capitalized:</h4>" + "<br/>" + capitalized.toUpperCase() + anotherUserInput.toLowerCase())*/

// QUESTION 12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// ANSWER

// let number = 35.36
// document.write("<h4>Number: </h4>" + "<br/>" + number)
// document.write("<h4>Type:</h4>" + "<br/>" + number.toString());



// QUESTION 13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// ANSWER

/*let inputUserName = prompt ("Enter username")

let specialCharacter = "! , . @ "

if(inputUserName !== specialCharacter){
    alert("Enter a valid username")
}
alert("Correct username")*/


// QUESTION 14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// ANSWER

/*let myBakery = ["cake", "apple pie", "cookie" , "chips" , "patties"]

let userWant = prompt("Welcome to Aeiman's bakery... \nWhat you want?")

let userWantCap = userWant[0]

let flag = false

// userWantCap.toUpperCase + userWant.toLowerCase

// userWant.toLowerCase() + userWant.toUpperCase()

for(let i = 0 ; i < myBakery.length ; i++){
    if (myBakery[i] == userWant){
        flag = true
        document.write(userWant + " is available")
        break;
    }
    if(!flag){
        document.write("Sorry! We don't have " + userWant) 
        break
    }
}*/


// QUESTION 15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// ANSWER



// QUESTION 16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// ANSWER

/*let uniName = "University of Karachi"

let universityName = uniName.split("")

document.write(universityName);*/


// QUESTION 17
// Write a program to display the last character of a user
// input

// ANSWER

// QUESTION 18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// ANSWER

