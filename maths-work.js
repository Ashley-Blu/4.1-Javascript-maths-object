const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

console.log(Math.round(num1));
console.log(Math.floor(num2));
console.log(Math.ceil(num3));


const numberSet = [14, 2, -5, 101, 35, 8];

console.log(Math.max(...numberSet));
console.log(Math.min(...numberSet));


const base = 5;
const exponent = 3;
const numberForSqrt = 64;

console.log(Math.pow(base, exponent));
console.log(Math.sqrt(numberForSqrt));


console.log(Math.random()); 
console.log(Math.random() * 11); 


const radius = 7;
const area = Math.PI * Math.pow(radius, 2);
console.log(area); 

console.log(area.toFixed(2)); 