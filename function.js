//function call or invoke 
run();
function run(){
    console.log('Running');
}


//Named function assignment
let stand = function walk(){
    console.log('walking');
};
stand();
let jump = stand;
jump();

//Anonymous function assignment
let stand2 = function(){
    console.log('walking');
};
stand2();

//
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//argument
function sum(a,b){
    console.log(arguments);
    return a+b;
}
let ans = sum(1,2,3,4,5,6); 


//
function sum(a,b){
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}
let ans2 = sum(1,2,3,5,6,7);
console.log(ans2);


//rest operator
function sum(num,value,...args){
    console.log(args);
}
sum(1,2,3,4,5,6,7,8); 

//default parameter
function interest(p,r=4,y=5){  //if user cant input the value then r=5 default value 
    return p*r*y/100;
}
console.log(interest(1000,5,9));  
   
//#2
function interest(p,r=4,y=5){
    return p*r*y/100;
}
console.log(interest(1000,undefined,9));


//GETTER SETTER
//getter -> access properties
//setter -> change or mutate properties

let person = {
    fName : 'Rutu',
    lName : 'Patel',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

person.fullName = 'Shreya Patel';
console.log(person.fullName);


// //try catch
let person2 = {
    fName : 'Rutu',
    lName : 'Patel',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        // if(typeof value !== String){
        //     throw new Error("You have not sent a string");
        // }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
try{
    person.fullName = true;
}
catch(e){
    alert('You have sent a number in fullName');
}
console.log(person.fullName);


//scope
for(let i=0; i<10; i++){

}
console.log(i);

for(var i=0; i<10; i++){

}
console.log(i);

if(true){
    let a=5;
}
console.log(a);

if(true){
    var a=6;
}
console.log(a);

function a(){
    const ab =5;
}
function b(){
    const ab=5 ;
}