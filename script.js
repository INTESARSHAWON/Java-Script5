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




let marks=[85,97,44,37,76,60];

sum=0;

for (let value of marks){
    sum=sum+value;
    //console.log(sum);
 }
 let average= sum/marks.length;
 console.log(`average marks of the class is ${average}`);
// let totalMarks=85+97+44+37+76+60;
// let averageMarks=totalMarks/6;
// console.log(averageMarks);



