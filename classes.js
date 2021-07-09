class Person{

    constructor(){
        console.log("I am in super");
    }
}

class Employee extends Person{
    constructor(){
        super();
        console.log("In child constructor");
    }
}

e=new Employee();
