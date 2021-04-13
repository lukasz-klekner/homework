/*zadanie 1*/

function sum(a,b,c){
    return a+b+c;
}

function poleTrojkata(a,h){
    const pole = (a*h)/2
    return `Pole trójkąta to ${pole }, czyli ma on ${a} długości podstawy i ${h}
    wysokości`;
}

function ileLat(age, howOldAreYouWhenPassAnExam) {
    return age-howOldAreYouWhenPassAnExam;
}

function doZaplaty(priceFor100Km, distance){
    return (distance/100)*priceFor100Km;
}

function displayInfo(name, age, howManyChildren){
    return `${name} ma ${age} lata i ${howManyChildren} dzieci`
}

/* zadanie 2 */
function returnArray(array){
    return array;
}

function returnSecondItem(array){
    return array[1];
}

function returnInfoAboutArray(array){
    return `Przekazana tablica ma ${array.length} elementów, a elementem nr 3 jest ${array[2]}`
}

function addElements(item){
    return emptyArray.push(item);
}

const emptyArray = [];
addElements('swinka')

function displayPersonName({name}){
    return name
}

const person = {
    name: 'Lukasz',
    surname: 'Klekner',
    age: 26,
    height: 172,
}

displayPersonName(person);

function displayInfoAboutPerson({name, surname, age, height}){
    return `${name} ${surname} ma ${age} lat
    i ${height} cm wzrostu`
}

displayInfoAboutPerson(person);

function changeAge(person, ageToAdd){
    return { ...person,
             age: ageToAdd
            }
}

const newPerson = changeAge(person, 28);
console.table(newPerson);