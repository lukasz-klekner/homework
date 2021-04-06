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


empty = [...empty, 'Łukasz'] /* I spread operator */
empty.push('Mateusz'); /* II metoda push */
console.log(empty)

/* zadanie 9 */
const emptyObject = {}
const person = {
    name: 'Iza'
}

const personDetails = {
    name: 'Łukasz',
    lastName: 'Klekner',
    age: 26,
    drivingLicence: true,
}

console.log(personDetails.age)
console.log(personDetails)

/* zadanie 10 */
function sum(a=0,b=0){
    return a+b
}

function displayString(a=""){
    return a;
}

function isBoolean(isTrue){
    if(isTrue === true || isTrue === false){
        return isTrue
    } else {
        console.log(`To nie jest boolean`);
    }
}

function remainder(a,b){
    return a%b;
}

function power2(a,b){
    return a**b;
}

function concatenation(a,b){
    return a+b;
}

function minutesToSeconds(minutes){
    return minutes*60;
}

function HoursToSeconds(hours){
    return hours*60*60;
}

function areaOfATriagnle(basis, height){
    return (basis*height)/2;
}

function yearsToDays(years){
    return years*365;
}

function power3(a){
    return a**a;
}

function longerSideOfATriangle(side1, side2){
    return side1-side2+1;
}

function hello(name){
    return console.log('Cześć, ', name)
}

function howOldAreYou(year){
    const date = new Date()
    return date.getFullYear() - year;
}

function score(x,y){
    return x*2+y*3;
}