//1) принимает на вход параметры
//2) parse(считываем параметры и преобразуем их в переменные)
//3) на основе типа операции проводим операцию вычисления результата
//4) выводим результат


// шаг 1
var input = process.argv.slice(2).toString();

// шаг 2 
// левая часть вычислений
var leftPart = undefined;

// правая часть вычислений
var rightPart = undefined;
// операция (+-/*)
var operation = undefined;
// результат вычислений
var result = undefined;

// метод - parse
// 1 - избавляемся от пробелов
input = input.replace(/ /g, '');
// при вызове функции value принимает значение которое определяется при вызове функции
// value = intut(4+21) 
function getParts(value) {
    // создаем локальную переменную parts c начальным значением пустой массив 
    var parts = [];
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes 
    var isPlus = value.includes("+");
    //работает только с булевыми значениями (true, false) ищет значение, если находит, считает с этим значением
    if (isPlus) {
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split  
        // "4+21+5-6".split("+") = ["4","21","5-6"] 
        parts = value.split("+");
        //  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        // ["4","21"].push ("+") = 4,21,+ Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива. 
        parts.push("+");
    }

    var isMinus = value.includes("-");
    if (isMinus) {

        parts = value.split("-");

        parts.push("-");
    }

    var isTosplit = value.includes("/");
    if (isTosplit) {

        parts = value.split("/");

        parts.push("/");
    }

    var isMultiply = value.includes("*");
    if (isMultiply) {

        parts = value.split("*");

        parts.push("*");
    }
    // возвращает значение parts
    return parts;
}
var parts1 = getParts(input);


// присваиваем переменным значения
// 4
leftPart = +parts1[0];

// +
operation = parts1[2];
// 21
rightPart = +parts1[1];

// вычисления шаг 3
if (operation === "+") {
    result = leftPart + rightPart;
}
if (operation === "-") {
    result = leftPart - rightPart;
}
if (operation === "*") {
    result = leftPart * rightPart;
}
if (operation === "/") {
    if (rightPart === 0) {
        result = "делить на 0 нельзя";
    } else {
        result = leftPart / rightPart;
    }

}
// шаг 4
console.log(result);

// шаг