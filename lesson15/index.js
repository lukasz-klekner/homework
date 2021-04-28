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