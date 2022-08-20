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
async function getdata()
{
  const user_data =  await pobj1;
  console.log(user_data);

  const user = await BioDate(user_data[5]);
  console.log(user);

  return user;
}

// let getuser = getdata();
// console.log(getuser)

// get object properties
let getuser = getdata().then((mydata)=>{
   
    console.log(mydata)
});