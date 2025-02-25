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

/*let number = 35.36

// Change in number to string

let numStringConv = number.toString()

// Remove . 

let remvDot = numStringConv.indexOf(".")

// Output

let output = numStringConv.slice(0 , remvDot) + numStringConv.slice(remvDot +1)

document.write("<h4>Number:</h4>" + "<br/>" + number + "<br/>" + "<h4>Number to String:</h4>" + output)*/

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

let specialCharacter 

for(let i = 0 ; i < inputUserName.length ; i++){
    specialCharacter = inputUserName.charCodeAt(i)
    if(specialCharacter === 33 || specialCharacter === 44 || specialCharacter === 46 || specialCharacter === 64){
        alert("Please enter a valid username")
    }
}*/



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

userWant = userWant.toLowerCase()

let flag = false

for(let i = 0 ; i < myBakery.length ; i++){
    if (userWant === myBakery[i]){
        document.write(myBakery[i] + " is available at index " + i + " in our bakery")
        flag = true
    }
}
if(flag === false){
    document.write("Sorry! We don't have " + userWant) 
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

/*let userPassword = prompt("Enter your password")

// a. It should contain alphabets and numbers

let password_num_letters_length = false

// b. It should not start with a number

let numChar = false

// c. It must at least 6 characters long

let passwordChar = false

// Password Start

let passwordStart = true

// a. Checking alphaphet charCode

for (let i = 0 ; i < userPassword.length ; i++){
    let charValue = userPassword[i].charCodeAt(0)    
}

// Alphabet in upperCase

if (charValue >= 65 && charValue <= 90 ){
    numChar = true;
}

// Alphabet in lowerCase

else if (charValue >= 97 && charValue <= 122 ){
    numChar = true;
}

// numbers

for(let i = 0 ; i < userPassword.length ; i++){
    var charValue = userPassword[i].charCodeAt(0);  
    if (charValue >= 48 && charValue <= 57 ){
        numChar = true;
    }
}

// First Letter

charValue = userPassword.charCodeAt(0)
if (charValue >= 48 && charValue <= 57 ){
    passwordStart = false;
}

// Length check

if(userPassword.length >= 6){
    password_num_letters_length = true;
}

if(passwordChar === false || numChar === false || password_num_letters_length === false || passwordStart === false){
    alert("Enter valid Password");
}

else{
    alert("Password Approved");
}*/

// QUESTION 16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// ANSWER

/*let uniName = "University of Karachi"

document.write("<h4>Making Array:</h4>" + uniName.split())

document.write("<h4>Array Split:</h4>" + uniName.split(""))

// Loop

document.write("<h4>Loop Method:</h4>")

for(let i = 0 ; i < uniName.length ; i++){
    document.write(uniName[i] + "<br/>")
}*/

// QUESTION 17
// Write a program to display the last character of a user
// input

// ANSWER

/*let userWord = prompt("Enter any word")

document.write("<h4>User given word:</h4>" + "<br/>" + userWord + "<h4>Last character of user given word:</h4>" + userWord[userWord.length-1])*/

// QUESTION 18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// ANSWER

/*let str = "The quick brown fox jumps over the lazy dog"

let counter = str.match("the")

let strLength = counter.length

document.write("<h4>Text:</h4>" + "<br/>" + str + "<br/>" + "<h4>Check Ouurence:</h4>" + "<br/>" + " There are " + strLength + " occurrence(s) of word “the”")*/