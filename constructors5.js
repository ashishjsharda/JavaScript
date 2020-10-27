class Student{
    constructor(name,subject) {
        this.name=name
        this.subject=subject
    }
    display(){
        console.log(`Student Name is ${this.name} and his subject is ${this.subject}`)
    }
}

john=new Student("Amir","Science")
john.display()
