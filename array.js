//adding new element(insertion) 
//on primitives
//end
let numbers4 = [10,20,30,40,50];
numbers.push(70);
console.log(numbers);

// //begin
// let numbers2 = [1,2,3,4,5];
// numbers2.unshift(0);
// console.log(numbers2);

// //middle
// let firstNames = ['Rutu','Shreya','Khyati'];
// firstNames.splice(2,0,'Nishi');
// console.log(firstNames);

//find element
//on primitives
// let numbers4 = [1,2,3,4,5];
// console.log(numbers4);
// console.log(numbers4.indexOf(3));
// console.log(numbers4);
// console.log(numbers4.includes(7));

//on references
// let names = [
//     {no:1 , Name:'Rutu'},
//     {no:2 , Name:'Shreya'}
// ];
// console.log(names);
// let names2 = names.find(function(names){
//     return names.Name === 'Rutu';
// });
// console.log(names2);

// //using arrow function(CALLBACK function)
// let names2 = names.find(names => names.Name==='Rutu');
// console.log(names2); 


// //removing element 
// //end
// let numbers3 = [1,2,3,4,5];
// numbers3.pop();
// console.log(numbers3);

// let names3 = [
//     {no:1 , Name:'Rutu'},
//     {no:2 , Name:'Shreya'}
// ];
// names3.unshift({no:0, Name:'Taksh'});
// console.log(names3);

//splitting element(emptying an array)
//#1
// Numbers = [10,20,30,40,50];
// Numbers2 = Numbers;
// Numbers = [];
// console.log(Numbers);

// //#2
// Numbers2 = [20,40,60,80];
// Numbers2.length = 0;
// console.log(Numbers2);

// //#3
// Numbers3 = [10,30,50,70];
// Numbers3.splice(0,Numbers3.length);
// console.log(Numbers3);

// //combining and slicing
// //#1
// //combined
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

// //2
let First = [10,20,30];
let Second = [40,50,60];
let combined2 = [...First, ...Second];
console.log(combined2);
//if we want to copy this array then
let another = [...combined2];
console.log(another);

// //slicing
// let numbers = [2,4,6,8,10,12];
// let sliced = numbers.slice(2,5);
// //2 - start index
// //5 - end index + 1
// console.log(sliced);

// //iterating an array
// let arr = [10,20,30,40,50];
// //#1
// for (let value of arr ){
//     console.log(value);
// }
// //#2
// arr.forEach(function (numbers){
//     console.log(numbers);
// });

// arr.forEach(numbers=>console.log(numbers));//(arrow function)



// //joining arrays
let numbers2 = [10,20,30,40,50];
let joined = numbers2.join(' ');
console.log(joined);
 
//split arrays
let message = 'this is my first message';
let parts = message.split(' ');
console.log(parts);

let joined2 = parts.join('_');
console.log(joined2); 
  

// //sorting array
// //#1
let Numbers = [20,40,10,50,20];
console.log(Numbers);
Numbers.sort();
console.log(Numbers);

//#2

let names = [
    {no:3 , Name:'Rutu'},
    {no:1 , Name:'Shreya'},
    {no:4 , Name:'Taksh'},
    {no:2 , Name:'jimmy'},
 ];
    console.log(names);
    names.sort((a , b) => a.no - b.no);
    console.log(names);

//filtered array
let numbers3 = [1,3,-3,-6];
let filtered = numbers3.filter(function(value){
    return value>= 0;
});
console.log(filtered);

//mapping array
let numbers = [7,8,9,10];
console.log(numbers);
let items = numbers.map(function(value){
    return 'student_no'+ value;
});
console.log(items);
       
 
//reducing an array
let arr = [1,2,3,4];
let total = 0; 
for(let value of arr){
    total = total + value;
};
console.log(total);

  



