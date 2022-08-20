const getRollno = () =>{
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5];
        console.log(roll_no)

        setTimeout((rollno)=>{
           let user = {
            name :"Sachin",
            age:21
           }

           console.log(`My name is ${user.name} and I am ${user.age} old and My Roll no. is ${rollno}`)
        
           setTimeout((name)=>{
            user.gender = "Male";

            console.log(`My name is ${name} and I am a ${user.gender} my age is ${user.age}`)
           },2000,user.name)
        },2000,roll_no[2])
    },2000)
}

getRollno()