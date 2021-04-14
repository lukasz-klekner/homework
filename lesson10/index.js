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

/*zadanie 3 */
function drivingACar(age, doYouHaveADrivingLicence){
    if(age < 18 || ( age >=18 && !doYouHaveADrivingLicence)) return console.log('Nie ma prawa jazdy.')

    if(age >=18 && doYouHaveADrivingLicence) return console.log('Możesz śmiało jeździć.')
}

function buyOrSell(string){
    switch(string){
        case 'Kup':
            return console.log('Widzę, że zrobić zakupy');
        case 'Sprzedaj':
            return console.log('Możesz tutaj swobodnie sprzedawać');
        default:
            return console.log('Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj');
    }
}

function infoAboutNumber(number){
    if(number > 0){
        return console.log('Liczba jest dodatnia')
    } else if(number < 0){
        return console.log('Liczba jest ujemna')
    } else {
        return console.log('Liczba jest równa 0')
    }
}

function infoAboutNumber2(number){
    if(number%3===0 && number%5 === 0){
        return console.log('FizzBuzz')
    } else if(number%3===0){
        return console.log('Fizz')
    } else if(number%5===0) {
        return console.log('Buzz')
    } else {
        return null;
    }
}

function canYouWatchAFilm(age,agreement=false){
    if(age > 15 || agreement) {
        return console.log('Możesz oglądac film!')
    } else {
        return console.log('Nie możesz ogladac filmu!')
    }
}

function yesOrNo(arg){
    return arg? 'Yes' : 'no';
}

function isEven(number){
    return number%2===0? 'Liczba jest parzysta' : 'Liczba jest nieparzysta';
}

/* zadanie 4 */
function isACarProduced({model, marka, yearOfProduction, isCabrio}){
    const date = new Date();
    if(yearOfProduction > date.getFullYear()) {
        return console.log('Car nie zostal wyprodukowany')
    } else {
        return console.log(`Samochód ${model}  ${marka} zostal wyprodukowany w ${yearOfProduction}. ${isCabrio? "Samochód jest kabrioletem":""}`)
    }
}

function howManyItems(array=[]){
    return array.length ? `Tablica ma ${array.length} elementow`: 'Pusta tablica'
}

function doYouLikeReadingBooks({imie, czyLubiCzytac, maTV}, {nazwaKsiazki, stronyKsiazki}){
    if(czyLubiCzytac){
        return console.log(`Cześć ${imie}, polecam Ci przeczytać ${nazwaKsiazki} książkę, ma tylko
        ${stronyKsiazki} stron`)
    } else if (!czyLubiCzytac && maTV){
        return console.log(`Poszedł oglądać tv`)
    } else if (!maTV) {
        return console.log('nie wiem co ci zaproponowac, moze... Rozbierz sie i pilnuj ubranie :)')
    }
}