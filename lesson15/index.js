/* zadanie 1 */
for(let i=1; i < 10; i++){
    console.log(i);
}

for(let i=9; i > 0; i--){
    console.log(i);
}

for(let i=5; i < 16; i++){
    console.log(i);
}

for(let i=0; i > -11; i--){
    console.log(i);
}

for(let i=1; i <= 20; i+=2){
    console.log(i);
}

for(let i=10; i >= -10; i-=4){
    console.log(i);
}

for(let i=1; i <= 100; i*=2){
    console.log(i);
}

/* zadanie 2 */
for(let i=0; i <= 20; i++){
    if(i%2===0) console.log(i);
}

for(let i=0; i <= 20; i++){
    if(i%2===1) console.log(i);
}

for(let i=0; i <= 20; i++){
    if(i%2===0) {
        console.log('liczba parzysta', i);
    } else {
    console.log('liczba nieparzysta', i);
    }
}

for(let i=1; i <= 30; i++){
    if(i%3===0 && i%5===0) {
        console.log('FizzBuzz', i);
    } else if(i%3==0) {
    console.log('Fizz', i);
    } else if(i%5==0) {
        console.log('Buzz', i);
        }
}

for(let i=100; i >= 0; i-=5){
    if(i%10===0) {
        console.log('Podzielna przez 10', i);
    } else {
        console.log(i)
    }
}

/* zadanie 3 */

function loop(end){
    for(let i=0; i<= end; i++){
        console.log(i);
    }
}

function loop2(start){
    for(let i=start; i<= 15; i++){
        console.log(i);
    }
}

function loop3(index){
    for(let i=0; i<= 15; i+=index){
        console.log(i);
    }
}

function loop4(start, end){
    for(let i=start; i<= end; i++){
        console.log(i);
    }
}

function loop5(start, end, index){
    for(let i=start; i<= end; i+=index){
        console.log(i);
    }
}

/* zadanie 4 */
const array=[1,2,3,4,5]

array.forEach(item => console.log(item));

const names=['mateusz', 'mati', 'matt']
names.forEach(item => console.log(`Czesc ${item}`));

const cars =[
    {
        model: "BWM",
        color: "black",
    },
    {
        model: "Fiat",
        color: "red",
    },
]

cars.forEach(({model, color}) => console.log(`Przed Wami stoi ${color} ${model}`))

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number%2===0)
evenNumbers.forEach(item => console.log(item));

const mix = [2,3,'elo', 'hello', 'blablabla']
const stringi = mix.filter(item => typeof item === 'string')
stringi.forEach(item => console.log(item));

const numberssss = mix.filter(item => typeof item === 'number')

/* zadanie 5 */
function total(array){
    const total =array.reduce((a,b) => a+b,0);
    return total;
}

let even=[];
let odd=[];

function divide(array){
    even = array.filter(number => number%2===0)
    odd = array.filter(number => number%2!==0)
}

function isItY(sentence){
    if(sentence.includes('y')) {
        return console.log('Jest!')
    } else {
        return console.log('nie ma')
    }
}

function silnia(n){
    if(n === 1){
     return 1;
    } else {
        return n*silnia(n-1);
    }
}

function concat(array, type){
    if(array.length === 0) {
        return console.log('Podaj tablice!')
    }

    if(type==='number'){
        return array.reduce((a,b) => a+b,0);
    } else if(type=== 'string'){
        if(type==='string'){
            return array.reduce((a,b) => a+b,'');
        }
    } else {
        return console.log('Drugi parametr jest nieprawidlowy!');
    }
}

const people = [
    {
        name: 'Lukasz',
        lastName: 'Klekner',
        hasCar: true,
        hasDrivingLicence: true,
    },
    {
        name: 'Jan',
        lastName: 'Kowalski',
        hasCar: false,
        hasDrivingLicence: true,
    },
    {
        name: 'Anna',
        lastName: 'Konopko',
        hasCar: false,
        hasDrivingLicence: false,
    },
    {
        name: 'Bonifacy',
        lastName: 'Kamien',
        hasCar: true,
        hasDrivingLicence: true
    },
]


function whoCanGiveMeAlLift(array){
    for (i = 0; i < array.length; i++) {
        if (array[i].hasDrivingLicence === true && array[i].hasCar === true) {
            console.log(`${array[i].name} ma prawo jazdy i samochod wiec moze Cie podwiezc`)
        } else if (array[i].hasDrivingLicence === true && array[i].hasCar === false) {
            console.log(`${array[i].name} ma prawo jazdy ale nie ma samochodu wiec nie moze Ciebie podwiezc swoim samochodem`)
        } else if (array[i].hasDrivingLicence === false && array[i].hasCar === true) {
            console.log(`${array[i].name} ma samochod, ale nie ma prawa jazdy, wiec nie moze Cie podwiezc`)
        } else {
            console.log(`${array[i].name} nie ma prawa jazdy ani samochodu wiec nie podwiezie Ciebie`)
        }
    }
}

function addNewElement(array, newElement){
    if(array.length > 0) {
        const isItInArray = array.find(item => item === newElement)
        console.log(isItInArray)

        if(!isItInArray) {
            return [...array, newElement];
        }

        return console.log('Taki elementu juz istnieje w tablicy!')

    } else {
        return console.log('Tablica jest pusta!')
    }
}

