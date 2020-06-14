var arr=["Apple","Banana","Chikoo"];
arr.push("Guava");
console.log(arr.length);
console.log(arr);
arr.pop();
console.log(arr.length);
console.log(arr);
console.log(arr.shift());
arr.unshift("Apple")
console.log(arr)
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let fruit of arr)
{
    console.log(fruit);
}
for (let fruit in arr)
{
    console.log(arr[fruit]);
}
