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

