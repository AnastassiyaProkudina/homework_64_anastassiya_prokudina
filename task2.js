function calcAvg(array) {
    let total = 0;
    let count = 0;
    array.forEach(function (item) {
        total += item;
        count++;

    });
    return total / count;
}

const array1 = [1, 5, 12, 4, 3];
const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [3, 10, 17];

console.log('---------')
console.log('Задание 2')
console.log('---------')
console.log(calcAvg(array1))
console.log(calcAvg(array2))
console.log(calcAvg(array3))