"use strict";
{
    // Q.2  Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
    let personName1 = "Gujjar Sb";
    console.log(`Hello ${personName1}, would you like to learn some Python today?`);
}
{
    //Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
    let name1 = "Naveed";
    console.log(name1.toLowerCase());
    console.log(name1.toUpperCase());
    console.log(name1.replace(/\b\w/g, (letter) => letter.toUpperCase()));
}
{
    //Q.4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
    let message1 = "Albert Einstein once said, ''Two things are infinite the universe and human stupidity and I'm not sure about the universe.''";
    console.log(message1);
}
{
    //Q.5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
    let famous_person1 = "Andrew Tate";
    let message2 = "You are exactly where you deserve to be. Change who you are and you will change how you live.";
    console.log(`${famous_person1} once said, "${message2}"`);
}
{
    //Q.6 Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
    let personName2 = "\t\n   Jeff Bozo   \n\t";
    console.log(`Name with whitespaces is: ${personName2}`);
    console.log(`Name without whitespaces is: ${personName2.trim()}`);
}
{
    //Q.7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
    // Author: Muhammad Ali
    // Date: 11, September, 2023
    // This program is made to Write addition, subtraction, multiplication, and division operations that each result in the number 8.
    console.log(5 + 3); // Addition
    console.log(16 - 8); // Subtraction
    console.log(2 * 4); // Multiplication
    console.log(64 / 8); // Division
}
{
    //Q.9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
    // Author: Muhammad Ali
    // Date: 11, September, 2023
    // This program is made to Store my favorite number in a variable. Then, using that variable, create a message that reveals my favorite number.
    let Favorite = 8;
    console.log(`My fav number is ${Favorite}`);
}
//Q.10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Done
// Q.11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Ali", "Khan", "Usman", "Sohail"];
for (let i = 0; i < names.length; i++) {
    console.log(names[3]);
}
//Q.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(`Hey ${names[2]} How are you?`);
//Q.13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const transportation = ["Honda 125", "Mehran", "GTR", "F1"];
for (const item of transportation) {
    console.log(`I would like to own ${item}.`);
}
//Q.14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guest1 = ["Arham", "Saad", "Yaseen"];
for (const guest of guest1) {
    console.log(`Dear ${guest}, I would like to invite you to dinner at my place.`);
}
//Q.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log(`Unfortunately, ${guest1[1]} Cant make it to the dinner`);
guest1[1] = "Ali";
console.log(`Dear ${guest1[1]}, I would like to invite you to dinner at my place.  `);
//Q.16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("I was able to find a bigger dinner table.");
guest1.unshift("Subhan");
guest1.splice(2, 0, "Emaad");
guest1.push("Aleej");
console.log("Here is our updated list with new Guests");
for (const guest of guest1) {
    console.log(`Dear ${guest}, I would like to invite you to dinner at my place.`);
}
//Q.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("Unfortunately, I can only invite 2 guests for dinner.");
console.log(`Dear ${guest1[5]}, I'm sorry to inform you that I can't invite you to dinner.`);
guest1.pop();
console.log(`Dear ${guest1[4]}, I'm sorry to inform you that I can't invite you to dinner.`);
guest1.pop();
console.log(`Dear ${guest1[3]}, I'm sorry to inform you that I can't invite you to dinner.`);
guest1.pop();
console.log(`Dear ${guest1[2]}, I'm sorry to inform you that I can't invite you to dinner.`);
guest1.pop();
for (const guest of guest1) {
    console.log(`Dear ${guest}, I would like to invite you to dinner at my place.`);
}
guest1.pop();
guest1.pop();
//Q.18  Think of at least five places in the world you’d like to visit.
let places = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Faisalabad",
    "Multan",
];
let sortedplaces = [...places].sort();
console.log(places);
console.log("Places in Alphabetical order");
console.log(sortedplaces);
console.log("Places in orignal order");
console.log(places);
let reverseplaces = [...sortedplaces.reverse()];
console.log("Places in Reverse order");
console.log(reverseplaces);
console.log("Places in Orignal order");
console.log(places);
console.log("Reverse orignal list");
console.log(places.reverse());
console.log("Reversed again and now its back to orignal order");
console.log(places.reverse());
console.log("Again order changed");
console.log(places.sort());
console.log("Order again changed");
console.log(places.reverse());
//Q.19  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Number of people invited are ${guest1.length}`);
//Q.20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Pakistan", "India", "America"];
console.log("A list of countries");
let asiaCountry = {
    name: "Pakistan",
    asiaOrEurope: "Asia",
};
console.log("Here is an object representing a country:", asiaCountry);
//Intentional Error:
const countries1 = ["Pakistan", "India", "America"];
console.log(countries1[3]);
//Conditional Tests:
let car1 = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car1 == "subaru");
console.log("Is car != 'kia'? I predict True.");
console.log(car1 != "kia");
console.log("Is car != 'audi'? I predict True.");
console.log(car1 != "audi");
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car1 !== "Subaru");
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car1.toLowerCase() == "subaru");
console.log("Is car != 'subaru'? I predict False.");
console.log(car1 != "subaru");
console.log("Is car === 'Subaru'? I predict False.");
console.log(car1 === "Subaru");
console.log("Is car.toUpperCase() == 'SUBARU'? I predict False.");
console.log(car1.toUpperCase() == "SUbARU");
console.log("Is car.length > 11? I predict False.");
console.log(car1.length > 11);
console.log("Is car.length < 3? I predict False.");
console.log(car1.length < 3);
//Q.25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("player just earned 5 points");
}
var alien_color2 = "green";
if (alien_color2 == "red") {
    console.log("player just earned 5 points");
}
else {
    console.log("\t");
}
//Q.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("player just earned 5 points.");
}
//
var alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("player just earned 10 points.");
}
else if (alien_color3 != "green") {
    console.log(" player just earned 10 points.");
}
//Q.27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
let alien_color7 = "red";
if (alien_color7 == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color7 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien_color7 == "red") {
    console.log("The player earned 15 points.");
}
//Q.28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 21;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
//Q.29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
const favorite_fruits = ["mango", "apple", "banana"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
//Q.30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const userNames7 = ["admin", "saleem", "ali", "saad", "sohail"];
for (const username of userNames7) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q.31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames1 = [];
if (usernames1.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (const username of usernames1) {
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
//Q.32  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
const current_users = ["admin", "saleem", "Ali", "saad", "sohail"];
const new_users = ["Naveed", "Ali", "Huzaifa", "Sombal", "Ayesha"];
for (const new_user of new_users) {
    if (current_users
        .map((user) => user.toLowerCase())
        .includes(new_user.toLowerCase())) {
        console.log(`The username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
//Q.33  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers5) {
    if (number == 1) {
        console.log("1st");
    }
    else if (number == 2) {
        console.log("2nd");
    }
    else if (number == 3) {
        console.log("3rd");
    }
    else {
        console.log(`${number}th`);
    }
}
//Q.34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const pizzas = ["Marinara", "Capricciosa", "Pepperoni"];
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
//Q.35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["car", "dog", "mouse"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//Q.36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt1(size, text) {
    console.log(`The shirt is size ${size} and has the message '${text}' printed on it.`);
}
make_shirt1("S", "YOU'R A GEEK!");
//Q.37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = "L", text = "I hate you") {
    console.log(`The shirt is size ${size} and has the message '${text}' printed on it.`);
}
make_shirt2();
make_shirt2("M");
make_shirt2("S", "Hello");
//Q.38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Q.39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Tokyo", "Japan"));
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Bohemia", "Same Beef"));
console.log(make_album("Bohemia", "Ajj Kal"));
console.log(make_album("Bohemia", "Kali Denali", 2));
//Q.41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicians1 = ["Baldwin, Samri", "Archer, John", "Bavli, Guy"];
function show_magicians1(magicians1) {
    for (const magician of magicians1) {
        console.log(magician);
    }
}
show_magicians1(magicians1);
//Q.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians2 = ["Baldwin, Samri", "Archer, John", "Bavli, Guy"];
function make_great1(magicians2) {
    for (let i = 0; i < magicians2.length; i++) {
        magicians2[i] = `${magicians2[i]} the Great`;
    }
}
function show_magicians2(magicians2) {
    for (const magician2 of magicians2) {
        console.log(magician2);
    }
}
make_great1(magicians2);
show_magicians2(magicians2);
//Q.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicians3 = ["Baldwin, Samri", "Archer, John", "Bavli, Guy"];
function show_magicians(magicians3) {
    for (const magician of magicians3) {
        console.log(magician);
    }
}
function make_great(magicians3) {
    const great_magicians = [];
    for (const magician of magicians3) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}
const great_magicians = make_great(magicians3);
console.log("Original magicians:");
show_magicians(magicians3);
console.log("Great magicians:");
show_magicians(great_magicians);
//Q.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("Making sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
make_sandwich("tomato", "mayo", "bacon");
make_sandwich("turkey", "cheese", "bacon", "mayo");
make_sandwich("peanut butter", "turkey");
function make_car(manufacturer, model, ...properties) {
    const car = { manufacturer, model };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const car = make_car("Toyota", "Supra", ["color", "pearlgold"], ["abs", true]);
console.log(car);
