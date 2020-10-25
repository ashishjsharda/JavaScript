class Person{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log(`My name is ${this.name}`)
        console.log(`My age is ${this.age}`)
    }

};
const bill=new Person("Bill",55);
bill.speak()
