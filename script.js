// Array in Javascript

// let marks=[45,54,67,87,98,33];
// console.log(marks[3]); //87
// console.log(marks);
// console.log(marks.length);
// marks[2], eshob diye colsole a value change kora jay array te, string a vuleo jaito na, notun arekta string khola lagto
// string-> immuateable->change kora jay na
// array-> mutable-> change kora jay



// let heroes=["spiderman", "superman", "batman", "hulk", "ironman"];
// console.log(heroes);
// console.log(heroes.length);



// Loops over in Array
// normal loop

// let heroes=["spiderman", "superman", "batman", "hulk", "ironman"];
// for (let index=0; index<heroes.length; index++){
//     console.log(heroes[index]);
// }




// for of loop
// let heroes=["spiderman", "superman", "batman", "hulk", "ironman"];

// for (hero of heroes){
//     console.log(hero.toUpperCase());
// }




// let marks=[85,97,44,37,76,60];

// sum=0;

// for (let value of marks){
//     sum=sum+value;
//     //console.log(sum);
//  }
//  let average= sum/marks.length;
//  console.log(`average marks of the class is ${average}`);
// let totalMarks=85+97+44+37+76+60;
// let averageMarks=totalMarks/6;
// console.log(averageMarks);




// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0; i<marks.length;i++){
//     sum= sum+ marks[i];
// }
// let average= sum/ marks.length;
// console.log(`the average mark of the class is ${average}`);




// let marks=[85,97,44,37,76,60];

// for(let i=0; i<marks.length;i++){
//     let extra= marks[i]+10;
//     console.log(extra);

// }




let marks=[85,100,44,37,76,60];

for(let i=0; i<marks.length;i++){
    extra= marks[i]/10;
    let newmarks= marks[i]+extra;
    console.log(`After adding 10% number with each number, the mark is ${newmarks}`);
}





