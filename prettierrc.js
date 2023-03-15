// Задача №1

// Напиши код, який отримає масив і використовує цикл for,

// який для кожного елемента масиву буде виводити в консоль повідомлення у форматі:

/* < номер елемента > - <значення елемента >. */



//Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масива['Mango', 'Poly', 'Ajax']

// з індексом 0 буде виведено  1 - Mango,

// а для індекса 2 выведет 3 - Ajax.



// const users = ["Mango", "Poly", "Ajax"];



// const users = ["1 - Mango", "3 - Ajax", "2 - Poly"];

// for (let i = 0; i < users.length; i += 1) {
//   console.log(users[i]);
// }
// for (const user of users) {
//   console.log(user)
  
// }
// ......................



// Задача №2

// Визначення типу значення, оператор typeof


// const productName = 'Mango';
// console.log(typeof productName )
// const pricePerItem = 150;
// console.log(typeof pricePerItem )
// const isOnSale = false;
// console.log(typeof isOnSale )
// const error = null;
// console.log(typeof error )
// let quantity;
// console.log(typeof quantity )


// .....................

// Задача №3

// Шаблонні строки

// // Написати фразу за допомогою шаблонних строк Привіт, меня  звати < імя >, мні  < стільки-то > 

// років і мені подобається < хоббі >, де дані з < ..... > - змінні вставлені в строку.



const name = 'Vlad';

const age = 15;

const hobby = 'It';

const message = `Привіт, меня  звати ${name} мні ${age } років і мені подобається ${hobby}`;



console.log(message);