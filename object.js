console.log('hello good morning');
//using factory function
//object create
let rectangle={
    length:10,
    breadth:20,

    draw: function(){
        console.log('drawing rectangle')
    }
};

function createRectangle(len,bre){
     
    return rectangle={
        length:len,
        breadth:bre,

        draw() {
            console.log('good morning');
        }
    };
}

let rectangleObj1 = createRectangle(5,4);
let rectangle2 = createRectangle(3,8);
let rectangle3 = createRectangle(7,9); 





//camelcase --> numberOfStudents
//us   ing constructor function  -->  Pascal Notation -->  first letter of every word is capital--> NumberOfStudent  
//object creation
// constructor function --> property/methoods --> initialise/define
function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');
    }
}

//object creation using constructor function
// let rectanglleObject = new Rectangle(4,9);

//dynamic nature of object
// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('drawing');
//         }
// }

// let rectangleObject = new Rectangle(4,6);
// rectangleObject.color = 'yellow';


// delete rectangleObject.color;
// colsole.log(rectangleObject);

//primitive types js
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

//reference types js
// let a = {value: 10};
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);  


//pass by reference
let a= {value:10};
function inc(a){
    a.value++;
}
inc(a);
console.log(a)

// for-in loop
//   
  

// for-of loop
let rectangle4 ={
    length:2,
    breadth:4
};

for(let key of Object.keys(rectangle4)){
    console.log(key);
}
for(let key of Object.entries(rectangle4)){
    console.log(key);
}

if('length' in rectangle4){
    console.log('Present');
}
else{
    console.log('absent');
}

//object-clone #1 using iteration
let src ={
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}
console.log(dest);  


//object-clone #2 using assign
let src2 ={
    a:10,
    b:20,
    c:30
};
let dest2 = Object.assign({}, src2);
console.log(dest2);

//object-clone #3 using spread
let src3 ={
    a:10,
    b:20,
    c:30
};
let dest3 = {...src3};
console.log(dest3); 
 
let message = 'this is \'my first message';
console.log(message);

let firstName = `my 
name is
 rutu`;
console.log(firstName);

//date and time
let date = new Date();
console.log(date);

let date2 = new Date('Mar 11 2004 12:00');
console.log(date2);

let date3 = new Date(2004, 2, 11, 12);
console.log(date3);