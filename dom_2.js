//adding 20para
//#1
// for (let i =1; i<=20; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+i;

//     document.body.appendChild(newElement);
// }

//#2
// let myDiv =  document.createElement('div');

// for(let i=1; i<=20; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' +i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);

//measure how long your code take to run
//#1
// const t1 = performance.now();
// for (let i =1; i<=20; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('this took'+ (t2-t1) + 'ms');

//#2
// const t3 = performance.now();
// let myDiv =  document.createElement('div');

// for(let i=1; i<=20; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' +i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('this took'+ (t4-t3) + 'ms');

//document fragment
let fragment = document.createDocumentFragment();
for(let i=1; i<=20; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para' +i;

    fragment.appendChild(element);
}
document.body.appendChild(fragment); //1 Reflow , 1 Repaint


//setTimerOut() method
console.log('hii');
setTimeout(function(){
    console.log('hello')},5000);
console.log('xyz');
