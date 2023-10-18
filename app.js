// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian_1 = "Trump";
console.log("The driver's name is " + Kalvian_1)

var Kalvian_2 = "Modi";
console.log("The navigator's name is " + Kalvian_2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var kalcount1 = 0;
var kalcount2 =0;

for (var i=0;i<Kalvian_1.length;i++){
  kalcount1 += 1;
}

for (var i=0;i<Kalvian_2.length;i++){
  kalcount2 += 1;
}

if(kalcount1 > kalcount2){
  console.log("The driver has the longest name, it has "+kalcount1 + " characters")
}

else if(kalcount2 > kalcount1){
  console.log("It seems that the navigator has the longest name it has "+kalcount2 + " characters")
}
else if(kalcount1 == kalcount2){
  console.log("It seems that the navigator has the longest name it has "+kalcount2 + " characters")
}






// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

var vowels = ["a", "e" , "i", "o", "u"];
var tot = '';


for (var i=0;i<Kalvian_1.length;i++){
  if(Kalvian_1[i] == vowels[0]){
    tot = tot + vowels[0] + ' ';
  }
  else if(Kalvian_1[i] == vowels[1]){
    tot = tot + vowels[1] + ' ';

  }
  else if(Kalvian_1[i] == vowels[2]){
    tot = tot + vowels[2] + ' ';

  }
  else if(Kalvian_1[i] == vowels[3]){
    tot = tot + vowels[3] + ' ';

  }
  else if(Kalvian_1[i] == vowels[4]){
    tot = tot + vowels[4] + ' ';
  }
}
for (var i=0;i<Kalvian_1.length;i++){
  if(Kalvian_1[i] == vowels[0]){
    tot = tot + i + ' ';
  }
  else if(Kalvian_1[i] == vowels[1]){
    tot = tot + i + ' ';
  }
  else if(Kalvian_1[i] == vowels[2]){
    tot = tot + i + ' ';
  }
  else if(Kalvian_1[i] == vowels[3]){
    tot = tot + i + ' ';
  }
  else if(Kalvian_1[i] == vowels[4]){
    tot = tot + i + ' ';
  }
}


var vowels1 = ["a", "e" , "i", "o", "u"];
var tot1 = '';

for (var i=0;i<Kalvian_2.length;i++){
  if(Kalvian_2[i] == vowels1[0]){
    tot = tot + vowels[0] + ' ';
  }
  else if(Kalvian_2[i] == vowels[1]){
    tot1 = tot1 + vowels1[1] + ' ';

  }
  else if(Kalvian_2[i] == vowels1[2]){
    tot1 = tot1 + vowels1[2] + ' ';

  }
  else if(Kalvian_2[i] == vowels1[3]){
    tot1 = tot1 + vowels1[3] + ' ';

  }
  else if(Kalvian_2[i] == vowels1[4]){
    tot1 = tot1 + vowels1[4] + ' ';
  }
}
for (var i=0;i<Kalvian_2.length;i++){
  if(Kalvian_1[i] == vowels1[0]){
    tot1 = tot1 + i + ' ';
  }
  else if(Kalvian_2[i] == vowels1[1]){
    tot1 = tot1 + i + ' ';
  }
  else if(Kalvian_2[i] == vowels1[2]){
    tot1 = tot1 + i + ' ';
  }
  else if(Kalvian_2[i] == vowels1[3]){
    tot1 = tot1 + i + ' ';
  }
  else if(Kalvian_2[i] == vowels1[4]){
    tot1 = tot1 + i + ' ';
  }
}
console.log(Kalvian_1 +' '+ tot);
console.log(Kalvian_2 +' '+ tot1);




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

var upcases = 0;
var lowcases =0 ;


for (var i=0;i<Kalvian_1.length;i++){
  if(Kalvian_1[i] == Kalvian_1[i].toLowerCase()){
    lowcases +=1;
  }
  else{
    upcases +=1;
  }
}
console.log("Upper cases in " +Kalvian_1+" = " + upcases)
console.log("Lower cases in " +Kalvian_1 + " = " + lowcases)

var upcases1 = 0;
var lowcases1 =0 ;


for (var i=0;i<Kalvian_2.length;i++){
  if(Kalvian_2[i] == Kalvian_2[i].toLowerCase()){
    lowcases1 +=1;
  }
  else{
    upcases1 +=1;
  }
}
console.log("Upper cases in " +Kalvian_2+" = " + upcases1)
console.log("Lower cases in " +Kalvian_2 + " = " + lowcases1)




// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

var space = '';
for (var j=0;j<Kalvian_1.length;j++){
    space += Kalvian_1[j] + ' ';
  }
  console.log(space)

  var space1 = '';
for (var i=0;i<Kalvian_2.length;i++){
    space1 += Kalvian_2[i] + ' ' ;
  }
  console.log(space1)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

var reverse = '';
for (var j = Kalvian_1.length - 1;j >= 0; j--){
  reverse += Kalvian_1[j] + ' ';
}
console.log(reverse)

var reverse1 = '';
for (var j = Kalvian_2.length - 1;j >= 0; j--){
  reverse1 += Kalvian_2[j] + ' ';
}
console.log(reverse1)

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

var DriverName = Kalvian_1;
var NavigatorName = Kalvian_2;

var mergedNames = DriverName + " " + NavigatorName;
console.log(mergedNames)
var array = mergedNames.split(" ");

// const array = [];
// array.push(nameArray);

reversedNames = array[1] + " " + array[0];

console.log(reversedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// var ascii = ''

let ascii = '';
for(var i=0;i<Kalvian_1.length;i++){
    ascii += Kalvian_1.charCodeAt(0)
    break
}
let ascii1 = '';
for(var i=0;i<Kalvian_2.length;i++){
    ascii1 += Kalvian_2.charCodeAt(0)
    break
}
if(ascii>ascii1){
    console.log("The "+Kalvian_1+"(driver) goes first.")
}
else if(ascii<ascii1){
    console.log("The "+Kalvian_2+"(navigator) goes first.")
}
else if(ascii == ascii1){
    console.log("What?! You both have the same name?")
}


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.


var loremipsum = "Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Nullam nec nisl eu ligula laoreet viverra. Praesent fermentum massa in eros dignissim, vel interdum ante volutpat."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl eu ligula laoreet viverra. Praesent fermentum massa in eros dignissim, vel interdum ante volutpat." +
"Lorem ipsum dolor sit et amet, consectetur adipiscing elit. Nullam nec nisl eu ligula et laoreet viverra. Praesent fermentum massa in eros dignissim, vel interdum ante volutpat."

var stringWithoutSpaces = loremipsum.split(' ');
console.log(stringWithoutSpaces.length)

// Make your program count the number of times the Latin word et appears.

// text = stringWithoutSpaces.toLowerCase();
// var etcounts = (text.match('et')).length

// console.log("The Latin word 'et' appears " + etcounts + " times.");

let count =0

for(let i=0;i<stringWithoutSpaces.length;i++){
    if(stringWithoutSpaces[i]=="et"){
        count++;
    }
}
console.log(count)
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 

const phraseToCheck = "step on no pets";
function isPalindrome(phraseToCheck) {
    
    const cleanString = phraseToCheck.replace(/[^A-Za-z0-9]/g, "").toLowerCase();


    for (let i = 0; i < cleanString.length / 2; i++) {
      if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  console.log("Is it a palindrome? " + isPalindrome(phraseToCheck));