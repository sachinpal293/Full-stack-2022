// In programming language we often say "An Object is an instance of a class"
// It mean that using class , i can create many objects and they all share methods and properties
// 
// since objects can be enhanced, there are many ways to create objects sharing methods and properties.
// But we want the simplest one.
// <script>

  class student{
    constructor(name,age,cls)
    {
      this.name = name;
      this.age = age;
      this.cls = cls;
    }

    ['bio'+'data']()
    {
      return `My name is ${this.name} and i am ${this.age} years old and I am in ${this.cls}`
    }
  }

   
  class Player extends student{
    constructor(name,age,cls,gamename)
    {
      super(name,age,cls);
      this.game = gamename;
    }
    player_bio()
    {
      return `${super.biodata()} and i play${this.game}`;
    }
  }


  let obj = new student("sachin",21,"B.tech");

  let p1 = new Player("Anurag",20,"B.tech","Football");

  console.log(obj.biodata());
  console.log(p1.player_bio());
  

  console.log(student.prototype.constructor)