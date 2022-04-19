/**
* Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
* во третьем и четвертом максимальное и умножить эти два числа
* @param {number} minFirst
* @param {number} minSecond
* @param {number} maxFirst
* @param {number} maxSecond
* @returns {number}
*/
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
	const maxResult = Math.max(maxFirst, maxSecond);
	const minResult = Math.min(minFirst, minSecond);
	const result = maxResult * minResult;
	return result;
};

/**
* Функция принимает один числовой аргумент, это радиус круга. Функция должна
* вернуть площадь круга, формулу найдите в интернете, если не помните
* и число пи используйте встроенное в js
* @param {number} radius
* @returns {number}
*/
export const getSquareOfCircle = (radius) => {
	const result = Math.PI * radius * radius;
	return result;
};

/**
* Функция принимает число и точность к которой нужно округлить
* Примеры можно смотреть в checks.js
* Нужно использовать Math.round
* @param {number} number
* @param {number} accuracy
* @returns {number}
*/
export const getFixedValue = (number, accuracy) => {
	const num = Math.pow(10 , accuracy);
	return Math.round(number * num) / num;
};

/**
* Если целая часть числа четная, то срабатывает Math.floor для этого числа
* если нечетное, то Math.ceil
* @param {number} number
* @returns {number}
*/
export const getFlooroCeil = (number) => {
	// return parseInt(number) % 2 === 0 ? Math.floor(number) : Math.ceil(number);
	const result = number.toFixed() % 2 === 0 ? Math.floor(number) : Math.ceil(number);
	return result;
};

/**
* Мы передаем два числа, от какого и до какого числа и функция должна
* выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
* Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
* @param {number} from
* @param {number} to
* @returns {number}
*/
export const randomizer = (from, to) => {
	const random = from + Math.random() * (to - from);
	return Math.trunc(random);
};
