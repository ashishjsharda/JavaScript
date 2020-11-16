const person={
    name:"Max",
    age:45
};

//Using Destructuring
const name=({name})=>{
    console.log(name);
}

name(person);
