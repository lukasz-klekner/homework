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