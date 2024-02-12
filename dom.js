//add event listener
// document.addEventListener('click',function(){
//     console.log('i have clicked on the document');
// });

//remove event listener
// function print(){
//     console.log('hello everyone');
// };
// document.addEventListener('click',print);
// document.removeEventListener('click',print);

//the default action
// let links = document.querySelectorAll('a');
// let thirdLinks = links[2];

// thirdLinks.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('hello everyone');
// });

//avoid too many events
//#1
let myDiv = document.createElement('div');
function paraStatus(event){
    console.log('hello everyone');
}
for( let i=1; i<=10; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph' +i;

    newElement.addEventListener('click',paraStatus);
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

//#2
let myDiv2 = document.createElement('div');
function paraStatus(event){
    console.log('para + event.target.textcontent');
}
myDiv2.addEventListener('click',paraStatus);

for( let i=1; i<=10; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph' +i;

    myDiv2.appendChild(newElement);
}
document.body.appendChild(myDiv2);

//add event on specific tag
let Element = document.querySelector('#wrapper');
Element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
        console.log('only span'+ event.target.textContent);
    }
});
