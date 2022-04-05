import { User } from './user.js';

let name = 'Ivan';
name = 'Oksana';

const isAdmin = 'true';

// Примитивы - строки, числа, boolean
// Объекты - Объекты, Массивы, Прототипы
// null 
// undefined

const Types = {
    Stringg: 'String',
    StringList: 'StringList',
    // ...
}

const _type = Types.StringList;

// switch (_type) {
// 	case Types.Stringg:
// 		console.log('Строковый тип');
// 		break;

// 	case Types.StringList:
// 		console.log('Списочный тип строк');
// 		break;

//     case Types.StringList:
//     console.log('Списочный тип строк');
// 		break;

//     case Types.StringList:
// 		console.log('Списочный тип строк');
// 		break;

//     case Types.StringList:
// 		console.log('Списочный тип строк');
// 		break;

// 	default: console.log('Без значения');
// }

// console.log(typeof {});

/**
 * Todo
 */
function todoSmth(callback) {
    if (callback) {
        callback();
    } else {
        throw new Error('Тип параметра не функция');
    }
}

// try {
//     todoSmth();
// } catch (error) {
//     console.error(error);
// } finally {
//     console.log('Выведи сообщение')
// }


const user = {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    patronymic: 'Ivanovich',
    age: 18,
    gender: 'male',
    // options: {
    //     isAdmin: true
    // },
    getFullName() {
        return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    }
};

function printUser(user) {
    const { firstName, lastName, patronymic } = user;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(patronymic);
}

const array = ['qqq', 'www'];
array[0]; //qqq
array[1];// www
array.length
array[array.length - 1];


printUser(user);

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i <= numbers.length; i++) {
	// тело цикла
	console.log(`Индекс: ${i}`);
	console.log(`Значение: ${numbers[i]}`);
}

for (let item of numbers) {
	console.log(`Значение: ${item}`);
}

for (let key in user) {
	console.log(`Ключ: ${key}`);
	console.log(`Значение: ${user[key]}`)
}

let count = 0;

while (count <= 5) {
	// Выводим в консоль значение переменной count
	console.log(count);

	// Увеличиваем значение переменной на 1;
	count++;
}

'sad'.toLowerCase();