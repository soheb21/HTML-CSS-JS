// let tom = "rain";
// if (tom == "rain") {
//     console.log("Take a Raincot");
// }
// else {
//     console.log("No Need");
// }

/*let table = 12;
for (let i = 1; i <= 10; i++) {
    // console.log(table + "*" + i + "=" + table * i); //Tradition tarika
    console.log(` ${table} * ${i} = ${table * i}`) // Modern Tarika
}
*/
/*function sum(a,b=a){
    let s=a+b;
    return `the sum of two number is ${s}`;
}
console.log(sum(5)) */

//Array
// let frnd = ['shoeb','shantanu','shorab','kaif'];
// //  console.log(frnd[frnd.length-1])

// for(let i=0;i<frnd.length;i++){
//     console.log(`${i} with ${frnd[i]}`);
// }

// for(let elements in frnd){
//     console.log(elements);
// }
// for(let elements of frnd){
//     console.log(elements);

// }

// frnd.forEach(function(element,index,array){
//     console.log(`${element} with : ${index} and array is ${array}`);
// })
// frnd.forEach((element,index,array)=>{
//     console.log(`${element} with : ${index} and array is ${array}`);

// })

/*const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july'];
//const newmonth=months.splice(months.length,0,'dec'); // add dec in the last of an array
// const updateMonth=months.splice(1,1,'Febrarury') // 1. update the value
const indexOfMonth = months.indexOf('feb');
if (true) {
    if (indexOfMonth != -1) {
        const updateMonth = months.splice(indexOfMonth, 1, 'Febrarury') // 1. update the value
        console.log(months);
    }
    else{
        console.log('No such data found')

    }
} */
// let arr=[1,2,3,4,5,6,7];
// let newarr=arr.map((curElm,index,arr)=>{
// return `index no = ${index} and the value is ${curElm} belongs to ${arr}`
// })
// console.log(newarr) 
//  let arr=[2,3,4,5,6,7,8];
//  let arr2= arr.map((curElmn)=>{
//     return curElmn*2;
//  }).filter((curElmn)=>{
//     return curElmn >10;
//  })
// console.log(arr2);

/*let arr=[2,3,4,5,6,7,8];
let arr2=arr.reduce((accumulator,curElmn)=>{
    debugger;
    return accumulator+=curElmn;
})
console.log(arr2) */

//String*****************

/*let myName ='Ansari Shoeb';
console.log(myName.length)
console.log(myName.concat(' Ahmed')) */

/*let anySent='Im learning "Javascript" from YT';
console.log(anySent) */

/*const myName ='My Name is Shoeb Ahmed';
console.log(myName.indexOf('Shoeb'));// indexOf Method is Case sensitive in JS.
console.log(myName.indexOf('h')); */

// const myName ='My Name is Shoeb Ahmed';
// console.log(myName.search('Shoeb')); // Positipn dega

// let str ='Apple,Banana,Grapes';
// // let res=str.slice(0,5)
// let res=str.slice(5)
// console.log(res)

// let myTwets='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
// let displaytwets=myTwets.slice(0,279);
// console.log(displaytwets)

// substring() method bhi simliar hi slice() method ka bs negstive index nhi leta.

// let str ='Apple,Banana,Grapes';
// let res = str.substr(-9); //substr() similar to slice() bs piche se tarverse krna tho sahi method h.
// console.log(res);
// let str ='HELLO WORLD';
// console.log(str.charAt(9));
// console.log(str.charCodeAt(0)); // return the unicode of that alphaabet.
// console.log(str.toLowerCase());

// var str='            Hello World      ';
// console.log(str);
// console.log(str.trim());

// Date and time in JS**********************

/*let currTime = new Date();
// console.log(currTime);
console.log(new Date().toLocaleString());// exact time 
console.log(new Date().toString());
*/
// let d= new Date(2021,11,24,22,33,30,0);
// console.log(d.toLocaleString());

// let currdate=new Date();
// console.log(currdate.getFullYear());
// console.log(currdate.getDate());
// console.log(currdate.getDay());
//same as set 

// Math Object********
// console.log(Math.PI); // Pi Value
// let num = 19.9090
// console.log(Math.round(num));
// console.log(Math.pow(2,3)); // 2 t the power of 3
// console.log(2**3); // same as pow() Method .
// console.log(Math.sqrt(25));
// console.log(Math.abs(-787))// convert - to +
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.99));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)); //0 to 9
// console.log(Math.trunc(-22.8));

// DOM,BOM ******************

//OOPs************************
// let obj1={
//     myName:"Ansari Shoeb",
//     myAge:19,
//     getData(){
//         console.log(`My Name is ${obj1.myName} and my Age is ${obj1.myAge}`);
//     }
// }
// console.log(obj1.myName);
// console.log(obj1.myAge);
// console.log(obj1.getData());

//this*************

// console.log(this.alert("Awesome"));

// call back function bolte h 
// const adds = (a,b)=>{
//     return a+b;
// }
// const mul = (a,b)=>{
//     return a*b;
// }
// const calculator = (num1,num2,operator)=>{
//     return operator(num1,num2);
// }
// console.log(calculator(5,3,adds));
// console.log(calculator(5,3,mul));

// Lexical Scoping
//mtlb Parent function children k function ko use nhi kr skte but child function can use parent fuction is know as lexical scoping.
// let a = 'Hello Guys ';// Global Scope

// const first = () => {
//     let b = 'Hwo are you ';
//     const second = () => {
//         let c = 'Hi My Name is Shoeb';
//         console.log(a+b+c);
//     }
//     second();
// }
// first();

// const greet=()=>{ return "Good Morning"};
// console.log(greet());

// const greet=()=>"Good Morning";
// console.log(greet());

// const greet=()=>({name:"shoeb"});
// console.log(greet());

// const greet = (name,end)=>"Good Morning "+name+end;
// console.log(greet('shoeb ','byy'))
//============================================================================>
// Promis
// let promise = new Promise(function (resolve, reject) {
//     alert("Hello Alert")
//     resolve(56)
// })

// console.log("hello World");
// setTimeout(func = () => {
//     console.log("Hello after 2 sec")
// },3000);
// console.log("My name is " + "Shoeb");
// console.log(promise)

// 1. Syntax 
// let promise = new Promise(function(resolve, reject) {

// })
// let p1 = new Promise(funct = (resolve, reject) => {
//     console.log("Promise is Pending")
//     setTimeout(()=>{
//         console.log("I am a promise and i m fullfilled")
//         resolve(true)

//     },2000)
// });

// let p2 = new Promise(funct = (resolve, reject) => {
//     console.log("Promise is Pending")
//     setTimeout(()=>{
//         console.log("I am a promise and i m reject")
//         // resolve(true)
//         reject(new Error("I'm an Error"))
//     },2000)
// });
// p1.then((value)=>{
//     console.log(value);
// })
// p2.catch((error)=>{
//     console.log("some error occure")
// })

// let p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("resolve after 2 sec");
//             resolve(56);
//         },2000)
// });
// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("Promise 2")},2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("We are done");

// })
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         alert("Hey i'm Resolve");
//         resolve(1);
//     }, 2000)
// }).then((value)=>{console.log(value)})

// p1.then((value)=>{
//     console.log("Congrats We Done!")
// })
// p1.then(()=>{
//     console.log("Hurray!")
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Value-1");
//     },1000);
// });
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Value-2");
//         reject(new Error("Error"));
//     },2000);
// });
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Value-3");
//     },3000);
// });

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })
// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// ASync Await: kisi bhi function ko bana async await skte hai uake baad uske andr promise ko await kr skte .
//,kisi bhi function m agar async hua tho ye ensure hota h ki ye  promise return krega 

// async function harry() {
//     let mumbaiWheather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27-deg")
//         }, 1000)
//     })
//     let bangloreWheather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("38-deg")
//         }, 2000)
//     })
//     // mumbaiWheather.then(alert)
//     // bangloreWheather.then(alert)
//     let mumbaiW = await mumbaiWheather 
//     console.log(mumbaiW)
//     let bW= await bangloreWheather
//     console.log(bW)
//     return[mumbaiW,bW]
// }
// const cherry =async ()=>{
//     console.log("I'm Cherry ")
// }
// const main1 = async ()=>{
//     console.log("Welcome to Whtaher Report")
//     let a = await harry();
//     let b = await cherry();
// }
// main1();

// custom Error
// try {
// let age = prompt("Enter yoyr age: ")
//     age=Number.parseInt(age)
//     if(age>30){
//         throw Error("We are not accpected this age.")
//     }
// } catch (err) {
//     console.log("error", err.name)
//     console.log("error", err.message)
// }
// console.log("Scrpit is still loading")

// Finally
// Finally: agar tyr aur catch m bhi error aaye then finally hamsha chalega
// try {
//     let a = 0;
//     console.
//         log(programm)
//     console.log("Prograss ran Successfully")
// } catch (err) {
//     console.log("This is an Error");
//     console.log(p)
// } finally {
//     console.log("I'm a good boy");
// 
// practice

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = (() => {
//             resolve(src)
//         })
//         document.head.append(script);
//     })
// }
// let a =  await loadScript("url")

// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Plese thie not accpecteable"))
//         }, 3000)
//     })
// }
// let a = async () => {
//     try {
//         let c = await p();
//         console.log(c)
//     }
//     catch(error){
//         console.log("We found an error"+error)
//     }
// }
// a();

// let p1 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 2000)
//     })
// }
// let p2 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(20)
//         }, 1000)
//     })
// }
// let p3 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(30)
//         }, 3000)
//     })
// }

// const res = async () => {
//     console.time("run")
//     let a1 = p1();
//     let a2 = p2();
//     let a3 = p3();
//     let a1a2a3= await Promise.all([a1,a2,a3]);
//     console.log(a1a2a3)
//     console.timeEnd("run")
// }
// res();
