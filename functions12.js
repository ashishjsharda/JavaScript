function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.speak=function () {
    console.log(`My name is ${this.name}`)
}
const Bill=new Person("Bill", 50);
Bill.speak()
console.log(Bill)
