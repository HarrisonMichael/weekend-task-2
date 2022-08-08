// filter
let numbers = [ 1, -1, -2, [[2, 3]]]

let filtered = numbers.filter (function(value) {
    return value >= 0;
})
 console.log(filtered);
 
// flat
let filtered2 = numbers.flat()
console.log(filtered2);

// findIndex
let findNumber = (element) => element < -1 ;

console.log(numbers.findIndex(findNumber))