//Task 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("the player just earned 5 points.");
}
var alien_color2 = "yellow";
if (alien_color2 == "yellow") {
    console.log("the player just earned 20 points.");
}
else {
    console.log("the player just earned 10 points");
}
//Task 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
// let alien_color3 : string = "green";
// if (alien_color3 == "green"){
//     console.log(" the player earned 5 points.");
// }
// else{
//     console.log("the player just earned 10 points.");
// }
//Write one version of this program that runs the if block and another that runs the else block.
//  let alien_color4 : string = "red";
//  if (alien_color4 == "red"){
//      console.log(" the player earned 0 points.");
//  }
//  else{
//      console.log("the player just earned 10 points.");
// }
// let alien_color5 : string = "yellow";
// if(alien_color5 != "yellow"){
//     console.log("the player just earned 10 points.");
// }
// else{
// console.log("the player just earned 20 points.")
// }
//Task 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
// let alien_color6 : string = "green";
// if(alien_color6 != "green"){
// console.log("the player not earned")
// }else{
//     console.log(" the player earned 5 points")
// }
//• If the alien is yellow, print a message that the player earned 10 points.
// let alien_color7 : string = "yellow";
// if(alien_color7 == "yellow"){
//     console.log("the player earned 10 points.")
// }else{
//     console.log("the player not earned")
// }
//• If the alien is red, print a message that the player earned 15 points.
// let alien_color8 : string = "red";
// if(alien_color8 == "red"){
//     console.log("the player earned 15 points.")
// }else{
//     console.log("the player not earned")
// }
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Task 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
// let age : number = 30;
//  if(age <= 2){
//      console.log("the person is a baby")
//  }
//  else if(age >= 2 && age < 4){
//      console.log("the person is a toddler")
// }
// else if(age >= 4 && age < 13) {
//     console.log("the person is a kid")  
//  }
//  else if(age >= 13 && age <= 20) {
//     console.log("the person is a teenager")
//  }
//  else if(age >= 20 && age < 65){
//     console.log("the person is an adult")
//  }
//  else{
//     console.log("the person is an elder")
//  }
//Task 29 Favorite Fruit: Make  a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in youer array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits : string[] = ["apple","peach","banana"];
// if(favorite_fruits.includes("apple")){
// console.log("you really like apples");
// }
// if(favorite_fruits.includes("peach")){
//     console.log("you really like peaches");
// }
// if(favorite_fruits.includes("banana")){
//     console.log("you really like bananas");
// }
// if(favorite_fruits.includes("mango")){
//     console.log("you don't like mangoes");  
// }
// if(favorite_fruits.includes("cherry")){
//     console.log("you don't like cherries");  
// }
//Task 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let usernames : string[] = ["Admin","Tony","Alif","Eric","John","Sam","Mac"];
// for(let username of usernames){
//     if(username === "Admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }
//     else{
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
//Task 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
// let users : string[] = ["Alia","Asma","Aina"];
// console.log(users);
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// users.splice(0,3);
// console.log(users);
// if(users.length == 0){
//     console.log("We need to find some users!")
// }
//Task 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make anotherlist of five usernames called new_users. Make sure one or two of the new usernames are also in the current_username.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the user is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users : string[] = ["hassan","ali","Raza","Shahryar","Faisal"];
// let new_users : string[] = ["hassan","ali","Sam","Shehzad","Faizan"];
// let current_users_lower : string[] = current_users.map(user => user.toLowerCase())
// for(let new_user of new_users)
//     if(current_users_lower.includes(new_user.toLowerCase())){
//         console.log(`${new_user} will need to enter a new username.`)
//     }else{
//         console.log("the user is available.")
//     }
//Task 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers : number[] = [1,2,3,4,5,6,7,8,9];
// for(let number of numbers){
// if(number === 1){
//     console.log(`${number}st`)
// }else if(number === 2){
//     console.log(`${number}nd`) 
// }else if(number === 3){
//     console.log(`${number}rd`)
// }else{
//     console.l+og(`${number}th`)
// }
// }
//Task34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let fav_pizzas : string[] = ["peppperoni pizza","BBQ chicken pizza","veggie pizza"];
// for(let fav_pizza of fav_pizzas){
// console.log(`I really like ${fav_pizza} so much!`)
// }
// console.log("I love all Pizza");
//Task 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let list_animals : string[] = ["Lamb","Goat","Cow"];
// for(let animal of list_animals){
//     console.log(`${animal} give milk and wool.`);
// }
// console.log("They all are herbivorous animals.")
//Task36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string,text:string): void {
//     console.log(`You ordered a ${size} shirt that says ${text}`)
// }
// make_shirt('small','"I like Mango!"');
// make_shirt('medium','"Good Luck!"');
//Task37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt2(size:string = "large",text:string = "I love Typescript."): void{
//     console.log(`You ordered a ${size} shirt that says ${text}`)
// }
// make_shirt2()
// make_shirt2("medium")
// make_shirt2("small","HEART")
//Task 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city_name:string,country_name:string = "Pakistan"):void{
//     console.log(`${city_name} is the city of ${country_name}`)
// }
// describe_city("Karachi");
// describe_city("Tokyo","Japan");
// describe_city("Madina","Saudi Arabia");
//Task39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string,country:string):string{
//     return`${city},${country}`
// }
// let city1 = city_country('Peshawar','Pakistan');
// let city2 = city_country('Ghaza','Palestien');
// let city3 = city_country('Dhaka','Bangladesh');
// console.log(city1)
// console.log(city2)
// console.log(city3)
//Task40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//   function make_album(artist:string,title: string,tracks:number): {artist:string,title:string,tracks:number} {
//    const dictionaries = { 
//        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//        title: title.charAt(0).toLocaleUpperCase() + title.slice(1),
//        tracks: tracks
//     };
//     return dictionaries;
//   }
// let album = make_album("Tony","Wave",8)
// console.log(album)
// album = make_album("Jojo","Seashore",7)
// console.log(album)
// album = make_album("John","Java",6)
// console.log(album)
//Task 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//    function show_magicians(magicians: string[]): void {
//           for(const magician of magicians) {
//            console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//           }
//   }
//   const magician:string[] = ["sam","yoyo","shaggie"];
//  show_magicians(magician);
//Task42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by addin the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// function make_great(magicians:string[]):void {
//         for(let i=0; i < magicians.length; i++){
//                 magicians[i] = magicians[i]  +   " the great "
//         }
// }
// const magicians2:string[] = ["sam","yoyo","shaggie"];
// make_great(magicians2)
// show_magicians(magicians2)
//Task 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of //magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function make_great2(magicians:string[]) : string[] {
//         const greatMagicians:string[] = [];
//         for(let i=0; i < magicians2.length; i++) {
//                 greatMagicians.push(magicians[i] +  " The Great");
//         }
//         return greatMagicians;
// }
// const magicians3:string[] = ["sam","yoyo","shaggie"];
// const greatMagicians2:string[] = make_great2(magicians3)
// show_magicians(magicians3);
// show_magicians(greatMagicians2);
//Task44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function sandwich(...items:string[]): void {
//         console.log("enjoy your sandwich:")
//         for(let i=0; i<items.length; i++) {
//             console.log(`- ${items[i]}`)    
//         }
// }
// sandwich("capsicum","tomato","chicken");
// sandwich("beef","veggie","garlic");
// sandwich("shami","mayo","mutton");
//Task45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// type car = {
//         manufacture : string
//         model : string
//         [key : string] : any;
// }
// function creatCar(manufacture : string,model : string,optional : Record < string,any>):car {
//         return{
//                 manufacture,
//                 model,
//                 ...optional
//         }
// }
// const mycar : car = creatCar("toyota","corolla",{color:"silver",year:"2024"})
// console.log(mycar)
