//studentName = Rizwana perveen
//Date = 18-02-2024
//Task 02 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName1:string = "Angila"
console.log(`Hello ${personName1}, would you like to learn some Python today?`);

//Task 03 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//studentName = Rizwana perveen
//Date = 18-02-2024
let myName:string = "Rizwana perveen"
console.log("lowercase:", myName.toLowerCase());
console.log("uppercase:", myName.toUpperCase());
console.log("titlecase:", myName.replace(/\b\w/g,c=> c.toUpperCase()));

//Task 04 
//studentName = Rizwana perveen
//Date = 18-02-2024
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote: string = "A person who never made a mistake never tried anything new.";
let author:string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

//Task 05 
//studentName = Rizwana perveen
//Date = 19-02-2024
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
let famous_person:string = "Albert Einstien";
let message1:string = "A person who never made a mistake never tried anything new"; 
console.log(`${famous_person} once said, "${message1}"`);

//Task 06
//Date = 20-02-2024
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const personName:string = "\n\tRobert Brown\t\n";
console.log(personName);
const without_Whitespace:string = personName.trim();
console.log(without_Whitespace);

//Task 07 & 08
//studentName = Rizwana perveen
//Date = 20-02-2024
//comment = These programs are simply Arthimatic operators.
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//You should create four lines that look like this:

//console.log(5 + 3)

//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4); //addition
console.log(12 - 4); //subtraction
console.log(2 * 4); //multiplication
console.log(48 / 6); //division

//Task 09
//studentName = Rizwana perveen
//Date = 20-02-2024
//comment = This is favourite number task.
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favourite_number : number = 2 ;
const message2 : string = 'Here is my favourite number ' + favourite_number ;
console.log(message2);

//Task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//studentName = Rizwana perveen
//Date = 20-02-2024
// This program perform square of the number.
console.log(5**5);

//This is division
console.log(460/4);

//Task 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Date = 20-02-2024
let names1 : string[] = ['Asma','Bushra','Erum','Farah','Shabana'];
for(let i=0; i<names1.length; i++) {
   console.log(names1[i]);
}

//Task 12
//Date = 20-02-2024
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names : string[] = ['Asma','Bushra','Erum','Farah','Shabana'];
let message : string = 'Welcom to Typescript class1: ' ;
for(let i=0; i<names.length; i++) {
    console.log(message + names[i]);
}

//Task 13
//Date = 20-02-2024
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let list : string[] = ['car','motorcycle','bus','ambulance', 'van','auto'];
for(let i=0; i<list.length; i++) {
   console.log("I would like to own a " + list[i]);
}

//Task 14
//Date = 20-02-2024
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guestlist1 : string[] = ["asma's family","bano's family","amber's family"];
for(let i=0; i<Guestlist1.length; i++){
   console.log("Dear miss." + Guestlist1[i] + ',\n\n It is my pleasure to invite you in our party.\n\n Thankyou\n\n')
  }

//Task 15
//Date = 20-02-2024
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Guestlist2 : string[] = ["Asma","Bano","Amber"];
for(let i=0; i<Guestlist2.length; i++){
   console.log("Dear miss." + Guestlist2[i] + ',\n\n It is my pleasure to invite you in our party.\n\n Thankyou\n\n')
}
  
  
  let absentGuest : string = "Bano";
  let newGuest : string = "Sadiqa";
  Guestlist2[1] = newGuest ;
  for(let i=0; i<Guestlist2.length; i++){
   console.log("Dear miss." + Guestlist2[i] + ',\n\n It is my pleasure to invite you in our party.\n\n Thankyou\n\n')//
}
  console.log(`miss. ${absentGuest} is not coming to the party.`);
  //Task 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 
let Guestlist3 : string[] = ["Asma","Bano","Amber"];
 
console.log("now it is a good news,because more guest will come on this big dinner");
  Guestlist3.unshift("Alia");
Guestlist3.splice(2, 0,"Sana");
Guestlist3.push("Maryam");
for(let i=0; i<Guestlist3.length; i++){
   console.log("Dear miss." + Guestlist3[i] + ',\n\n It is my pleasure to invite you in a big dinner table.\n\n Thankyou\n\n')
}
//Task 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guestlist4 : string[] = ["Alia","Asma","Sana","Bano","Amber","Maryam"];
console.log("sorry,we cannot arrange a big table for dinner,only two person are invited.");
while(Guestlist4.length > 2) {
 let remove_Guest = Guestlist4.pop();
 console.log(`\n sorry miss ${remove_Guest}, you are not invited for dinner,`);
}
for(let i=0; i<Guestlist4.length; i++){
 console.log('Dear miss ' + Guestlist4[i] + ',\n\nYou are still invited.\n\nThank You\n\n')
}
Guestlist4.splice(0, 2);
console.log(Guestlist4);
//Task 18 Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 let places : string[] = ['Makkah','Madina','Baghdad','Ajmer','palestine'];
 //print array in original array
 console.log('original: ' + places);
 //in alphabetcal order
 console.log('copy: ' + [...places].sort());
 //array is still in its original order
 console.log('original: ' + places);
//in reverse alphabetical order
 console.log('copy: ' + [...places].sort().reverse());
//array is still in its original order
 console.log('original: ' + places);
//reverse order of list and print to show order has changed
console.log('original: ' + places.reverse());
//reverse again print to back its original order
console.log('original: ' + places.reverse());
//sort array and store in alphabetical order
 console.log('original: ' + places.sort());
//sort to change the array so it stored in reverse alphabetical order
 console.log('original: ' + places.sort().reverse());
//Task 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let invited_guest : string[] = ["Amber","Maryam"];
let count_invited_guest : number = invited_guest.length
console.log(`${count_invited_guest} guest will come to the dinner.`);

//Task 20Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 let rivers_list : string[] = ["Indus river","Hub river","Kabul river","Jehlum river"];
 console.log("List of rivers:")
 for(let i=0; i<rivers_list.length; i++){
 console.log(rivers_list[i]);
 }
//Task 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let person : {name:string,age:number}  = {name:"sadaf",age:29}
console.log(person);
//Task 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const days : string[] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//console.log(days{7})
console.log(days[5])
//Task 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car1 = 'subaru';

console.log("Is car1 == 'subaru'? I predict True.")

console.log(car1 == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
console.log("is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("car != 'honda city'? predict true")
console.log(car != 'honda city')
console.log("is car == 'subaru'? I predict False.")
console.log(car == 'Subaru')
console.log("is car == 'corolla'? I predict True.")
console.log(car == 'corolla') 
let carColor = "Blue";
console.log("is carColor == 'brown'? I predict False.")
console.log(carColor == 'brown')
console.log("is carColor != 'brown'? I predict True.")
console.log(carColor != 'brown')
console.log("is carColor == 'Blue'? I predict True.")
console.log(carColor == 'Blue')
 let carlength = 10
console.log("is carlength == '10' ? i predict true")
console.log(carlength == 10)
console.log("is carlength != '10' ? i predict true")
console.log(carlength != 10)
console.log("is carlength == '6'? i predict false")
console.log(carlength == 6)
//Task 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
//• Tests using the lower case function
//example 01
let sum : number = 2 + 2
console.log(sum)
if (sum == 4){
     console.log(true)
}
else{
  console.log(false)
}
//example 02
let name1:string = "Amna";
let name2:string = "Hafsa";
if(name1 == name2){
  console.log("equal")
}
else{
  console.log("not equal")
}
//• Tests using the lower case function
//example 01
 let person1 : string = "Faiz ahmed";
 let person2 : string = "jawad ahmed";
console.log("lowercase:", person1.toLowerCase());
 if(person1 == person2){
   console.log("lowercase")
 }
else{
  console.log("not lowercase");
}
//example 02
let childname1 : string = "bubloo";
let childname2 : string = "bubloo";
if(childname1 == childname2){
  console.log("equal")
}
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//example 01
let carname : string = "subaro";
if(carname == 'subaro'){
    console.log("equal")
}
else{
  console.log("not equal")
}
//example 02
let carcolor : string = "red";
if(carcolor != "blue"){
  console.log("False")
}
//example 03 greater or less
let age1 : number = 28
if(age1 < 20){
  console.log("you cannot vote")
}
else{
  console.log("you can vote")
}
//example 04
let age2 : number = 50
if(age2 > 40){
 console.log("greater than 40")
}
else{
 console.log("less than 40")
} 
//example 05
let marks : number = 95 
if(marks <= 90){
  console.log("grade A")
}
else{
  marks >= 90
  console.log("grade A+")
}
//example 06
let per : number = 64
if(per <= 80){
  console.log("grade A")
}
else{
  per >= 80
  console.log("grade B")
}
//• Tests using "and" and "or" operator
//example 01 or statement:
let a = 10
let b = 20
console.log(a > 10 || b > 10)  //true
console.log(a > 10 || b < 10)  //true although the b < 10 is false
console.log("a || b" , a < b || a == b);
//example 02 and statement:
let c = 20
let  d= 25
console.log(c > 5 && d > 5)  //true
console.log(c > 5 && d < 5)  //false  
//a > 5 is true, but b < 5 is false hence returns false
 
//• Test whether an item is in a array or not.
let subject : string[] = ["Urdu","Islamiat","Mathematics","Science"];
console.log(subject.includes("Urdu")); {
console.log("Urdu is in list");
}
console.log(subject.includes("Arabic")); {
  console.log("Arabic is not in list");
}