// 2. Написати функцію, яка отримує в якості аргументів числа, якщо чисел менше 10, повертає суму всіх чисел, якщо більше 10 повертає масив. Якщо запустити функцію без параметрів, видає помилку.  // використати псевдомасив arguments
function sumArg() {

  console.log(list);
  let kilkist = 0;
  kilkist = list.length;

  if (kilkist === 0) {
    alert('масив порожній, введіть числа!');
    console.log('масив порожній, введіть числа!');

  } else if (kilkist >= 10) {

    console.log("Результат =", list);
    return list;
  } else {

    let sum = 0;
    const sumToTen = function () {

      console.log(list.length);

      for (let i = 0; i < list.length; i++) {
        console.log("елемент на поточному кроці", list[i]);
        sum += list[i];
        console.log("сума на поточному кроці", sum);
      }
      console.log("сума всіх чисел = ", sum);
    }
    sumToTen(list);
    return sum;
  }
}
//const list = [-1, 2, 3];
const list = [];
//const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArg(list));



