/* zadanie 1 */
const name = 'Karol';
const age = 40;
let isOpen = true;
const stringBoolean = 'true';
const stringNumber = '100';

/* zadanie 2 */
console.log('Michał');
console.log('Hello Ania');
console.log(4);
console.log(false);

/* zadanie 3 */
console.log(name);
console.log(age);
console.log(isOpen);
console.log(stringBoolean);
console.log(stringNumber);

/* zadanie 4 */
console.log(2+2);
console.log('Michał '+'Kowalski');
console.log(2+2*2);

/* zadanie 5 */
const total = 2+2
console.log('wynik,',total);

/* zadanie 6 */
let number = 1;
number = 2;
console.log(number);

/* zadanie 7 */
function add(){
    return 2+2;
}

function sayHello(){
    return `Hello World!`;
}

function isTrue(){
    return true;
}

function modulo(){
    return 6%4;
}

function power(){
    return 3**4;
}

function greeting(){
    return 'Hello, '+ 'how are you?';
}

function multiple(){
    return 5*60;
}

function multiple2(){
    return 3*3600;
}

function calculate(){
    return 10*9/2;
}

function substraction(){
    return 200-10;
}

/* zadanie 8 */
const numbers = [1,2,3];
const cars = ['BMW,','Jeep','Honda', 'KIA', 'Peugeot']
const booleans = [true, false, true]
let empty = []
const mixture = [2, 'true', true, ' ', [1,2,3,4,5]]
console.log(mixture[1]);

const myArray = [2,4,6]
console.log(myArray.length)


empty = [...empty, 'Łukasz']
empty.push('Mateusz');
console.log(empty)