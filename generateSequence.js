function * generateSequence(){
    yield 10;
        yield 20;
        yield 30
}

for (let value of generateSequence()){
    console.log(value)
}
