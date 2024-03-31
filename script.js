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




// let marks=[85,100,44,37,76,60];

// for(let i=0; i<marks.length;i++){
//     extra= marks[i]/10;
//     let newmarks= marks[i]+extra;
//     console.log(`After adding 10% number with each number, the mark is ${newmarks}`);
// }




// let items=[250,645,300,900,50];

// for (let i=0; i<items.length; i++){
//      let offer= items[i]/10;
//      let newprice= items[i]- offer;
//      console.log(`after 10% of discount, the price is ${newprice}`);
// }



// let items=[250,645,300,900,50];

// for (let value of items){
//     let offer= value/10;
//     value= value-offer;
//     console.log(value);
// }




//array methods

// let fruits=["apple", "orange", "grape", "palm", "guava"];

// fruits.push("banana", "lemon", "watermelon", "jackfruit");
// //eigula sob last a push hoise,ebar pop korbo, pop last theke hoy, pop return value-o dey..., array change kore fele eigula...,
// console.log(fruits);

// let deletedFruits= fruits.pop();
// console.log("deleted fruits=",deletedFruits);
// console.log(fruits);




// let fruits=["apple", "orange", "grape", "palm", "guava"];

// fruits.unshift("banana", "lemon", "watermelon", "jackfruit");
// //eigula sob shurute geche, etai push er sathe unshift er parthokkho
// //ebar shift korbo, shift return value o dey...,shift shuru theke hoy, etai pop er sathe er parthoko, array change kore fele eigula...,
// console.log(fruits);

// let deletedFruits= fruits.shift();
// console.log("deleted fruits=",deletedFruits);
// console.log(fruits);



// let fruits=["apple", "orange", "grape", "palm", "guava"];
// console.log("show all fruits=",fruits); 
// // splice (startidx, delcount, new element)
// console.log ("show deleted fruits",fruits.splice(1,3,"watermelon", "mango"));
// console.log("show fruits after splice with replacemnt=",fruits);
// // splice diye jekono jaygay kichu add kora jabe, kono ekta jinish delete kora jabe, replace kora jabe
// // push(), pop () last a kaj kore, unshift(), shift() prothome kaj kore, splice jekono jaygay kaj kore



// let fruits=["apple", "orange", "grape", "palm", "guava"];
// console.log(fruits); 
// console.log (fruits.slice(1,4));
// // fruits.slice() eta string jemne slice kore omnei slice kore jottuk dorkar dekhay 



// push(),pop(),unshift(),shift(),spice()-- eigular excercise
// let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log("all the companies=", companies);
// let delCompanies= companies.shift();
// console.log("the removing companies=", delCompanies);
// console.log("after removing the first companies=", companies);
// companies.splice(1,1,"Ola");
// console.log("after removing uber and add ola=", companies);
// companies.push("Amazon");
// console.log("after adding Amazon=", companies);




let fruits=["apple", "orange", "grape", "palm", "guava"];
console.log(fruits); // array print hoise, 
console.log(fruits.toString()); //string akare print hoise, etai fruits.toString() er kaj 







