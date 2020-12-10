let a = [1, 2, 3].reduce(function(a, b) {
    return a + b;

});

let b = [2, 4, 6].reduce(function(a, b) {
    return a + b;
});

result = a + b;

console.log(result);



// Обратный порядок о котором говорили

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// arr.reverse();
// console.log(arr);