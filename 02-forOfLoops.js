/********************
  FOR OF LOOPS
 *******************/

 var student = {
     name: "Peter",
     awesome: true,
     degree: "JavaScript",
     week: 1
 };

 for (item of student) {
     console.log(item);
 }

//  For in is great for objects, For Of is better for arrays, however, you can use For in for arrays

let catArray = [ 'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat, 'says meow')
}



