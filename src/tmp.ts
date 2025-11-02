
function func(val: unknown) {
    if (typeof val === 'string') {
        val.toUpperCase();
        return val;
    }
    else {
      return typeof val;
    }
}

console.log(func("hello"));
console.log(func(undefined));
console.log(func(null));
console.log(func(123));