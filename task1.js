console.log('---------')
console.log('Задание 1')
console.log('---------')
const listOfProducts = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (const product of listOfProducts) {
    if (product === 'пиво')
        console.log('плохо')
    else console.log('хорошо')
}