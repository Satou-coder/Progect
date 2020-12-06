var input = process.argv.slice(2).toString();


var a = undefined;

var b = undefined;

var operation = undefined;

var result = undefined;


input = input.replace(/ /g, '');

var parts1 = input.split("*");

a = Number(parts1[0]);

b = Number(parts1[1]);

result = a * b;

console.log(result);