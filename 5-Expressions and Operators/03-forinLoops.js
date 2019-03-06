/********************
  FOR IN LOOPS
 *******************/

 let student = {
     name: "Zach",
     awesome: true,
     degree: "JavaScript",
     week: 1
    }

    for (let item in student){
        // console.log(item)
        console.log(student[item])
        // square bracket notation
    }

    let catArray = ['tabby', 'british shorthair', 'burmese', 'maime coon', 'rag doll'];

    for (let cat in catArray) {
        console.log(cat);
    }

    let studentName = 'zAch'
    let capName;

    for (let x in studentName ) {
        if (x == 0) { 
            capName = studentName[x].toUpperCase();
        } else {
            capName += studentName[x].toLowerCase();
        }
  
    }
    console.log(capName)