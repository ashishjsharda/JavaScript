function fact(x) {
  return x == 1 ? 1 : x * fact(x - 1);
}

var n = fact(3);
console.log(n);
