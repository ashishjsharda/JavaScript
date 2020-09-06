let promise=new Promise((resolve, reject) => {
    var a=1
    if(a+1==2){
        resolve("Success")
    }
    else {
        reject("Failure")
    }

});
promise.then((message)=>console.log(message)).catch((message) =>console.log(message))
