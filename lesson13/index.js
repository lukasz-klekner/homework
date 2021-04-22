/* zadanie 1 */
function info(marka, model, rok_produkcji){
    return console.log(`Samochód ${marka} ${model} - ${rok_produkcji}`)
}

function info2(car){
    return console.log(`Samochód ${car.marka} ${car.model} - ${car.rok_produkcji}`)
}

/* zadanie 2 */
const car = {
    marka : "Volkswagen",
    model : "Golf",
    rok_produkcji: 1985,
}

const {marka, model, rok_produkcji} = car;

/* zadanie 3 */
function info3({marka, model, rok_produkcji}){
    return console.log(`Samochód ${car.marka} ${car.model} - ${car.rok_produkcji}`)
}

info3(car);

/* zadanie 4 */
let licznik = 5;
console.log(++licznik); //warotsc jest dodana natychmiastowo (przed wykorzystaniem zmiennej)
console.log(licznik++) // wartosc jest dopiero zakutalizowana w nastepnej instrukcji dlatego wciaz wyswietla nam 6, a nie 7 (po wykorzystaniu zmiennej)
console.log(licznik) // dopiero mamy 7 po postinkrementacji

/* zadanie 5 */
function kosz(){
    stan = {
        wynik: 0,
    }
    function rzutZaDwaPkt(){
        stan.wynik+=2;
    }

    function rzutZaTrzyPkt(){
        stan.wynik+=3;
    }

    return {
        stan,
        rzutZaDwaPkt,
        rzutZaTrzyPkt,
    }
}

const koszykowka = kosz()
koszykowka.rzutZaDwaPkt();
koszykowka.rzutZaDwaPkt();
koszykowka.rzutZaTrzyPkt();
console.log(`Gratulacje!!! Zdobyleś ${koszykowka.stan.wynik} pkt!!!`);

/*zadanie 6 */
const pralka = {
    nazwa: 'Whirlpool',
    liczbaProgramow: 5,
    info(){
        return console.log(`Pralka o modelu ${this.nazwa} ma ${this.liczbaProgramow} programów!`);
    }
}

console.log(pralka.info());

/* zadanie 7 */

/* O cholerka to dosc zlozone pojecia moglbym pisac i pisac.. spróbuje w skrócie
Kopia - czyli "kopiujemy" wartosc ze zmiennej i wartosc drugiej zmiennej jest  taka sama ale podczas modyfikacji jednej ze zmiennych nie modyfikujemy drugiej */
let a = 7
let b = a;
a = 25;
console.log(a, b)
/* Referencja - czyli wskazujemy adres (najczesciej obiektu/tablicy), i jesli edytujemy taki obiekt to modyfikujemy wszystkie obiekty ktore maja ten adres */
const person = {
    firstName : 'Lukasz',
}

const person2 = person;
person2.firstName = 'Mateusz',

console.log(person.firstName)
console.log(person2.firstName)

/* aby zapobiec takiej sytuacji powinnismy utworzyc kopie obiektu */
const person3 = {
    firstName : 'Lukasz',
}

const person4 = {...person3};
person3.firstName = 'Mateusz',

console.log(person3.firstName)
console.log(person4.firstName)