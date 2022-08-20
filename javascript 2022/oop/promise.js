/*
executor :- a function to be executed by the constructor, during the process of constructing the 
promise_object. 
The executor is custom code that ties an outcome to a promise.
you, the programmer, write the executor.
*/

// Promise Produce
// using function constructor
const pobj1 = new Promise(/*this is executor*/(resolve,reject)=>{

    setTimeout(()=>{
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        reject("error while communicating");
    },2000)
})

//using Object
const BioDate = (indexdata) =>{
    return new Promise((resolve,reject) =>{
     setTimeout((indexdata)=>{
       let user = {
        name:"Sachin Kumar Pal",
        age:21
       }
       resolve(`My Roll no is ${indexdata}.
                My name is ${user.name} and I am ${user.age} years old.`);
     },2000,indexdata)
    });
}
// Promise consume
pobj1.then((roll)=>{
    console.log(roll);
    return BioDate(roll[1])
}).then((kuchbhi)=>{
    console.log(kuchbhi);
})
.catch((error)=>{
    console.log(error)
})