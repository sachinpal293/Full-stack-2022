// 1. Create constructor function
function user(name)
{
    this.name = name;
}
// a function prototype has construtor by default,
// so we don't need to create it
// console.log(user==user.prototype.constructor);

// 2. Add the method to prototype
user.prototype.sayhii = function(){
    console.log(this.name);
}

let u = new user("Sachin")
u.sayhii();