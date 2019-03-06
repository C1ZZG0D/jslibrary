


/*
function hi() {
    console.log('Hi');
}

hi();
(1);

1- This is how we call, or 'invoke' our function

*/

function hi() {
    console.log('Hi')
}

hi();

// Functions give us reusable chunks of code

console.log(hi());

function lol() {

    for(let i=0; i<11;i+=1 ){
        console.log(i);
     }
}

lol();























let arr = ['This', 'is', 'really', 'cool'];

function lolz() {

    for (let words of arr) {
        console.log(words);
    }

}

lolz(); 


let first = ['Tom']
let last = ['McCloud']
let full = `${first} ${last}`;

function combine() {
    for (let names of first)
    console.log(`Hello, my name is ${first} ${last}.`);
  
}

combine();


// fat arrow functions


function coffee(){
    console.log('Coffee is good!');
}

let coffee = () => {
    console.log('I like Coffee!');
}

coffee();

let cats = (kitten,puppy) => { console.log(`I have ${kitten} cats and ${puppy} dogs`);
}

cats(2,4);


let apples = x => console.log(`There are ${x} apples.`);
apples(10);







































function lol() {

    for(let i=0; i<11;i+=1 ){
        console.log(i);
     }
}

lol();






// RETURN


// let wage = [15,45,37]

// function tip() {
//     for(let payments of wage )
// }


function tipCalc(bill){
    let tip = (bill) (0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);