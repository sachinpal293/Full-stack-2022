// example of synchronous
const f = () =>{
    const time = new Date().getTime();
    while( new Date().getTime()-time<5000);
    console.log("Hai bhai aagaya swad");
}
// Example of asynchronous
const fun1 = () =>{
    setTimeout( () =>{
        console.log("Function 1 is starting");
    },3000)
   
}

const fun2 = () =>{
    console.log("Function 2 is starting");
    fun1();
    console.log("Function 2 is end");
}

fun2();