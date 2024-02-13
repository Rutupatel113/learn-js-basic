// let myPromise = new Promise(function(resolve,result){
//     setTimeout(function(){
//         console.log('i am inside the promise');
//     },5000);
//     resolve(2233);
//     // reject(new Error('error generate'))
// });
// console.log('first error');

//#2
// let myPromise1 = new Promise(function(resolve,result){
//     setTimeout(function(){
//         console.log('i am inside the promise1');
//     },5000);
//     resolve(2233);
//     // reject(new Error('error generate'))
// });
// let myPromise2 = new Promise(function(resolve,result){
//     setTimeout(function(){
//         console.log('i am inside the promise2');
//     },2000);
//     resolve(2233);
//     // reject(new Error('error generate'))
// });
// console.log('first promise');



//value handle
// let myPromise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside the promise');
//     },5000);
//     resolve(1234556789);
// }); 
// myPromise3.then((value) => { console.log(value)});
// console.log('first error');


//error handle
// let myPromise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside the promise');
//     },5000);
//     // resolve(1234556789);
//     reject(new Error('error generated'))
// }); 
// // myPromise3.then((value) => { console.log(value)});
// myPromise4.catch((error) => {console.log('Recieved an Error')});
// console.log('first error');

//value example 
// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     },4000);
//     resolve(true);
// })
// let output = promise1.then(() => {
//     let promise2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         },2000);
//         resolve('promise2 resolved');
//     })
//     return promise2;
// })
// output.then((value) => console.log(value));



//async function create
//#1
//async function always create a promise
// async function abcd(){
//     return 7;
// }
// console.log (abcd());


//async function
//#2
// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi is capital of india");
//         },2000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hydrabad is cool");
//         },3000);
//     });

//     let dM =  delhiMausam;
//     let hM =  hydMausam;

//     return [dM, hM];
// };
// console.log(utility());



//async/await function
// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi is capital of india");
//         },1000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hydrabad is cool");
//         },2000);
//     });

//     let dM =  await delhiMausam;
//     let hM =  await hydMausam;

//     return [dM, hM];
// };
// console.log(utility());



//fatch API
//get call
// async function utility(){
//     let content = await fetch ('https://jsonplaceholder.typicode.com/todos/1'); //link -->https://jsonplaceholder.typicode.com/ 
//     let output = await content.json();
//     console.log(output);
// }
// utility();


//post call
// async function helper() {
//     let options =  {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let responce = content.json();
//     return responce;
// }
// console.log(helper());


//closure
//#1
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();


//#2
function myfun1(){
    let name = 'rutu';
    function myfun2(){
        let name = 'dhruvi';
        function myfun3(){
            console.log(name);
            function myfun4(){
                let name = 'disha';
            }
        }
        return name;
    }
    return myfun2();
}
let myfun = myfun1();
console.log(myfun);

