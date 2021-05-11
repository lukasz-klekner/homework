const rentalCarCompany = [
    {
    name: 'audi',
    allCarsNumber: 70,
    carsToRent: 30,
    price: 140,
    },
    {
    name: 'fiat',
    allCarsNumber: 120,
    carsToRent: 120,
    price: 90,
    },
    {
    name: 'bwm',
    allCarsNumber: 50,
    carsToRent: 50,
    price: 430,
    },
    {
    name: 'ferrari',
    allCarsNumber: 3,
    carsToRent: 1,
    price: 1200,
    },
    {
    name: 'mustang',
    allCarsNumber: 13,
    carsToRent: 3,
    price: 650,
    },
    {
    name: 'mercedes',
    allCarsNumber: 22,
    carsToRent: 12,
    price: 340,
    },
    ]

/* a */
const sortedCars = rentalCarCompany.sort ((a,b) => {
    return a.name < b.name ? -1 : 1
})

console.log(sortedCars);


/* b */
const fewerThan400 = rentalCarCompany.filter(({ price }) => price < 400);
console.log(fewerThan400);

/* c */
const sortedPricesOfCars = rentalCarCompany.sort((a,b) => a.price-b.price)
console.log(sortedCars);

/* d */
const allCarsToRent = rentalCarCompany.filter(({allCarsNumber, carsToRent}) => allCarsNumber === carsToRent)
console.log(allCarsToRent);

/* e */
const sortedAvailableCars = rentalCarCompany.sort((a,b) => b.carsToRent-a.carsToRent);
console.log(sortedAvailableCars);

/* f */
const carsToRentFor3500 = rentalCarCompany.filter(({price}) => price*7<= 3500);
console.log(carsToRentFor3500);

/* g */
const carsRentTheMostOften = rentalCarCompany.sort((a,b) => a.carsToRent/a.allCarsNumber-b.carsToRent/b.allCarsNumber).splice(0,3)
console.log(carsRentTheMostOften);