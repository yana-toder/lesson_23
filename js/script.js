console.log('35' + - "22");

console.log('35' * "22");

//console.log('558' > 22++);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "no name");

//if else
if (5 == "5"){
	console.log('Істина');
} else {
	console.log('Брехня');
}

let message = (92 > '11' && 58 < 100) ? 'Істина' : 'Брехня';
console.log(message);

if (0) {
	console.log('Брехня');
} else if ("") {
	console.log('Істина');
}

//for while
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}

let numTwo = 5;
while (numTwo) {
	console.log(numTwo);
	numTwo--;
}

let numThree = 0;
do {
	console.log(numThree);
	numThree++;
} while (numThree < 5);

let numTwoo = 8;
while (numTwoo) {
	console.log(numTwoo);
	numTwoo--;
}
//3
let numFour = 0;
while (numFour < 3) {
	numFour++;
	console.log(`Число: ${numFour}`);
}

//4
firstFor: for (let numFive = 0; numFive < 2; numFive++) {
	for (let size = 0; size < 3; size++) {
		if (numFive == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

//числа
//1
let numOne = 1.005 + Number.EPSILON;
let sourseNum = Math.round(numOne * 100) / 100;
console.log(sourseNum);

//2
let value = parseFloat("135.58px");
console.log(value);
console.log(typeof value);

//3
let valueTwo = 58 + "Freelancer";
if (58 + "Freelancer" !==NaN) {
	console.log('Результат виразу NaN');
}

//4
console.log(Math.max(10, 58, 39, -150, 0));

//5
let valueThree = Math.floor(58.858);
console.log(valueThree);

//рядки
//1 
let fls = "фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);
//2
let textTwo = "фрілансер";
let sumbolN = textTwo[5];
console.log(sumbolN);
//3
let textThree = 123 + "456";
console.log(textThree);
//4
let textFour = "фрілансер";
console.log(textFour.toUpperCase());
//5
let textFive = "фрілансер";
console.log(textFive.slice(3, 6));
//6
let textSix = "фрілансер";
console.log(textSix.includes('лан', 4));