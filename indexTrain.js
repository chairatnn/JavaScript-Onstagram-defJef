const myName = 'Chairat';
let hight = 178;
let isMale = false;
let city;
let country = null;
let bigNumber = 10n;

console.log(myName, hight, isMale, city, country, bigNumber);

const person = {
name: 'Chairat',
hight: 178,
city: 'Bangkok'
};

console.log(person.name);

person.hight = 185;
console.log(person);

person.weight = 80;
console.log(person);

const numbers = [5, 10, 15, 20];
console.log(numbers);
console.log(numbers[2]);

numbers.push(25);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

numbers.shift();
console.log(numbers);

let result = 10 % 2;
console.log(result);

const age = 17;
if (age > 18) {
    console.log('Age is more than 18');
} else {
    console.log('Age is less than or equal to 18');
}

let password = '';
if (password == '') {
    console.log('Password is required');
} else if (password.length >= 8 && password.length <=12) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}

function calculateVat(money, vat) {            
    return (money * vat) / 100;
}

const totalVat = calculateVat(100, 7);
console.log(totalVat);


const totalVat10 = calculateVat(100, 10);
console.log(totalVat10);

for (let counter = 0 ; counter < 10 ; counter++) {
    if (counter == 5) {
        break;
    }
    console.log(counter);
}

