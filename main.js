// Дан массив из чисел
// - Сделайте из него массив, состоящий из квадратов этих чисел.
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item ** 2);
console.log(newArr);

// Дан массив из чисел
// - Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
const dubl = [1, 2, 1, 3];
const notDubl = new Set(dubl);
console.log(notDubl);

// Дан массив из чисел
// - Проверьте то, что все элементы в массиве больше нуля (результат - true/false).
const ziro = [1, 2, 7, 0 ,8];
const notZiro = ziro.every((item) => item > 0);
console.log(notZiro);

// Дан массив из чисел
// - Оставьте в массиве только отрицательные числа.
const whisNegotive = [-1, 2, -5, 0, -6, 2];
const negotive = whisNegotive.filter((item) => item < 0);
console.log(negotive);

// Дан массив из чисел
// - Найдите сумму элементов массива.
const whisOutSum = [9, 6, 4, 1];
const whisSum = whisOutSum.reduce((item, sum) => item + sum);
console.log(whisSum);

// Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}]). Оставьте в нем только подмассивы.
const arrWhisArr = [1, 2, [3, 4], 5, {a: 7}];
const arrOnlyArr = arrWhisArr.filter(Array.isArray);
console.log(arrOnlyArr);

// - Верните количество слов в строке, длина которых больше 4 символов.
const str = 'efgedf dhs sdsd dgfgdfgdfg  gdfgdfgdf'
const HowManyStr = str.split(' ').filter((item) => item.length >4).length
console.log(HowManyStr);

// - Если в строке имеется шестизначное число(ни больше, ни меньше) - верните его, как результат функции. Число может быть не отделено от других символов пробелами. 
const s = 'abcdef'
result = s.match(/(^|[^\d])(\d{6})([^\d]|$)/);
console.log(result);
if (result !== null){
    alert(result[2]);
} else{
    alert(false)
}

