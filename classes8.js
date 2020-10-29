class Employee{
    constructor(name,age,id) {
        this.name=name
        this.age=age
        this.id=id
    }
    add(name){
        this.name.push(name);
        return this.name;
    }
};

const emps=new Employee(['Jack','Jill'],20,30,10)
emps.add('John')
console.log(emps.name)
