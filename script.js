/*const userName = 'Jacob'
let age = 15
const favoriteMeal = 'Soup'
const date = new Date()
const newUsername = userName.charAt(0).toUpperCase() + userName.slice(1)

console.log(userName,age,favoriteMeal)

console.log('Hello, Im ' + userName + ' and my favorite meal is ' + favoriteMeal)

console.log(`Cześć, jestem ${userName} i moim ulubionym daniem jest ${favoriteMeal}`)

console.log(`Dzisiejsza data to ${date.toLocaleDateString('pl')}`)

console.log(newUsername)

console.log(" ")*/

/*const text1 = "Powiększ mnie!"
const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI!"
const text3 = "#@!$% wytnij te dziwne znaki na początku!"
const text4 = "sprawdź, czy wzawieram słowo 'czy'"
const text5 = "wyloguj w konsoli tylko literę 'L', która znajduje się w wyrazie 'Wyloguj'"
const text6 = "pies zamień każde słowo pies, na słowo kot pies"
const text7 = "podziel, ten, string, od,przecinków"

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replaceAll('pies', 'kot'))
console.log(text7.split(','))*/

/*const day = 'poniedzialek'

switch (day)
{
    case 'poniedzialek':
        console.log('Dziś jest poniedziałek')
        break

    case 'wtorek':
        console.log('Dziś jest wtorek')      ////////////// !SWITCH!
        break

    default:
    console.log('Weekend!')
}*/

/*const X = 50
const Y = 30

if(X > 30){
    console.log(`${X}>${Y}`);// Nawiasy i $ wypisują wartość zmiennej
}*/

/*const color = 'blue'
const newColor = 'green'

if(color === newColor) {
    console.log('KOlory sie zgadzają!');          //// !PORÓWNANIE KOLORÓW!
}
    else{
        console.log('Kolory sie nie zgadzają.');
    }*/

/*const X = 50
const Y = 50

if(X>Y){
    console.log('x > y');
} else if(X == Y){
    console.log('x = y');                        /////////// !IF I ELSE IF!
} else{
    console.log('x < y');
}*/

/*const promo = '30%'

switch(promo){
    case '20%':
    console.log('Dziś mamy 20% zniżki!')
    break

    case '30%':
        console.log('Dziś mamy 30% zniżki!')       //////////////  !SWITCH!
        break
    
    case '10%':
        console.log('Dziś mamy 10% zniżki!')
        break

        default:
        console.log('Właśnie wylosowałeś własną promocje!')
}*/

/*
const X = 10

if(X%2 == 0){
    console.log(`Liczba ${X} jest parzysta`);
}else{
    console.log(`Liczba ${X} jest nieparzysta`);      //// !MODULO I CHECK!
}

const check = (X%2 == 0) ? `Liczba ${X} jest parzysta` : `Liczba ${X} jest nieparzysta`

console.log(check);
*/


/*
const X = o10
let text

if(X>=100){
    text = 'X >= 100'
}else if(X < 100 && X > 30){
    text = 'X jest średniakiem'                ////////////// !DUZE LITERY!
}else if(X < 30){
    text = 'X jest mały'
}

console.log(text.toUpperCase());*/

/*for(let i=1; i<6; i++){
    console.log(i)                   ////////////////////////// !PETLA FOR!
}

const colors = ['Green', 'Blue', 'Red', 'Brown', 'Orange','Purple','Yellow']

for(let i=0; i < colors.length; i++){
    console.log(colors[i]);
}*/


/*let i =0;

while (i<5){/////////////////////////                       !PENTLA WHILE!
    console.log(i);
    i++
}*/


/*let i = 0

do{
i++
console.log(i); ////////////////                         !PENTLA DO WHILE!
}while(i<5)*/

/*const numbers = [1,2,3,4,5]

 for(let i=0; i < numbers.length; i++){
     console.log(numbers[i] * 2);     ////////////////// !MNOZENIE TABLICY!
 }

 for(const number of numbers){ ///////////// !PENTLA FOR OF!
     console.log(number + 2);
 }*/

/*const nameOfCities = ['Białystok', 'Warszawa','Poznań', 'Gdańsk']

for(let i=0; i<nameOfCities.length; i++){        !WYPISYWANIE TABLICY W FORZE!
    console.log(`Name of this city is ${nameOfCities[i]}`); 
}*/

/*let x = 0

while(x <= 10){
    x += 2
    console.log(x);
}*/


/*let x = 20
do{
x -= 3
}while(x > 0)
console.log(x);*/



/*const tab = [5,8,10,23,48,60]

for(const tablica of tab){
    console.log(tablica / 5);
}

for(const tablica of tab){      ///// !ZMIENIANIE KOLORU I PARZYSTOSC!
    if(tablica % 2 === 0){
        console.log(`%cLiczba ${tablica} jest parzysta.`, 'background-color:gold; color: black');
    }else{
        console.log(`%cLiczba ${tablica} jest nieparzysta.`, 'background-color:black; color: gold');
    }
}*/



/*const numbers = [1,2,3,4,5]

console.log(numbers);

numbers.unshift(10,209)

console.log(numbers);

numbers.shift()

console.log(numbers);     /////// !FUNKCJA UNSHIFT, SHIFT, PUSH I POP!

const colors = [13]

console.log(colors);

colors.push('gold' , 123)
console.log(colors)

colors.pop()
console.log(colors);*/


/*const numbers = [1,2,3,4,5]

function multiply(x) { /////////  !MNOZENIE TABLICY ZA POMOCĄ FUNKCJI!
    return x*2
}

const newNumbers = numbers.map(multiply)
console.log(numbers);
console.log(newNumbers);

const abc = ['a','b','c']
const newAbc = numbers.concat(abc, 89 , true) /// !METODA CONCAT!

console.log(newAbc);
console.log(numbers);

console.log(abc);
console.log(...abc);

const drinks = ['pepsi', 'cola', 'miridna']
const meals = ['chicken',' spaghetti', 'soup']

const menu = [...drinks, ...meals]

console.log(menu);                // !ROZSMAROWYWANIE TABLIC!

const menu2 = drinks.concat(meals)
console.log(menu);
*/

/*const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0,2)
console.log(numbers2);

const numbers3 = numbers.splice(-3)
console.log(numbers3);

const randomStuff = colors.splice(-2)
console.log(randomStuff);

console.log(colors);

const newCars = cars.splice(2,4,'test')
console.log(newCars);
console.log(cars);*/

/*const letters = ['c','d']
letters.unshift('a','b')
console.log(letters);

letters.push('e','f')
console.log(letters);
console.log(letters.includes('c'));*/

/*onst numbers = [1,2,3,4,5]
const food = ['McDonald', 'KFC', 'Subway']
const newArr = numbers.concat(food)     /////////////   !SPREAD I CONCAT!
console.log(newArr);

const newArr2 = [...numbers,...food]
console.log(newArr2);*/

/*const numbers = [1,5,13,26,48]

const newNumbers = numbers.map(number => number * 5)
console.log(newNumbers);

for(let i=0; i<5; i++){
if(newNumbers[i]%2 === 0){
        console.log(`Liczba parzysta: ${newNumbers[i]}`);
    }else{
        console.log(`Liczba nieparzysta: ${newNumbers[i]}`);
    }
}

for(const number of newNumbers){
    if(number % 2 === 0){
        console.log(`Liczba parzysta: ${number}`);
    }else{
        console.log(`Liczba nieparzysta: ${number}`);
    }
}*/


/*const colour = ['red']
colour.unshift('blue')
colour.push('yellow')
console.log(colour);

for(let i=0; i<colour.length; i++){
    console.log(`My favourite colour is:${colour[i].charAt(0).toUpperCase() + colour[i].slice(1)}`);
}*/

/*const auto = 'udi, Mercedes, BMW, Nissian, Dodge'

const autoArr = auto.split(', ')

autoArr.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK')

if(autoArr.includes('Audi')){
    autoArr.push('Porshe')
}else{
    autoArr.pop()
}

console.log(autoArr);/*

function test() {
    console.log('Siema');
}
test()

function add(x, y) {
    return x + y
}

console.log(add(5, 3));

function func(name, age) {
    return console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`);
    
}

func('Jakub', 15)*/

console.log('Obejrzyj filmik nr 61!');