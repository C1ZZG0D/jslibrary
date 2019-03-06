let weather = 75;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}



let name = 'Cardiel';
if(name == 'Cardiel'){
    console.log('Hello, my name is',name);
} else {
    console.log('Hello, is your name', name+'?');
}



let name = 'aUTuMN'

let chars = name.split('');
console.log(chars[0]);
if(chars[0] = 'A'
){
    console.log('Hi.');
}





let age = 21


if(age >= 25){
    console.log("Yay, you can rent a car.");
} else if(age >= 21){
    console.log("Yay, you can drink.");
}
  else if(age >= 18){
        console.log("Yay, you can vote.");
    } 
    else{
        console.log("Sorry, you can't do anything.");
    }




// Switch Statements

let friend = "Bob";

switch (friend) {
    case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
    case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
    case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);// string 
    // interpolation, backticks, under the escape key
}


let dessert = "strudels"

switch (dessert) {
    case "cake":
    console.log("Cake is great.");
    break;
    case "pie": 
    console.log("Pie, pie, me oh my.")
    break;
    case "ice cream":
    console.log("I scream for ice cream!")
    break;
    default:
    console.log("Not on the menu.")
}