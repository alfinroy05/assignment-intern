console.log("hello world");
console.warn("hello world");
console.error("hello world");

var a = 10;
console.log(a);
var a = "name";
console.log(a);


let name = "john";
console.log(name);


const pi = 3.14;
console.log(pi);



let valueOne = 2;
let valueTwo = "a";

console.log(valueOne + valueTwo);

console.log(valueOne + parseInt(valueTwo));


const nam = "john";
const age=30;
const rating = 4.5;
const isCool = true;
const x = null;
var y;

console.log(typeof name);
console.log('my name is ' + name + ' and i am '+ age);
console.log('my name is ${nam} and i am ${age}');


// // array
arrayOne = ["john",30,true,null,undefined]

console.log(arrayOne);
 
// // push

arrayOne.push("apple");
console.log(arrayOne);


//pop

arrayOne.pop();
console.log(arrayOne);

//unshift

arrayOne.unshift("mango");
console.log(arrayOne);

console.log(arrayOne[3]);

arrayOne[3]="bananana";
console.log(arrayOne);

console.log(arrayOne.length);
arrayOne.splice(3,2);
console.log(arrayOne);


//assignment operator

let c= 10;
c += 5;
console.log(c);


let m = 10;
m -= 5;
console.log(m);

let n = 10;
n /= 5;
console.log(n);



let b = 10;
b %= 5;
console.log(b);


let v = -100;
v <<= 5;
console.log(v);


let z = -100;
z >>= 5;
console.log(z);


let l = -100;
l >>>= 5;
console.log(l);


let k = 10;
k &= 5;
console.log(k);


let j = 10;
j |= 5;
console.log(j);

let h = 10;
h ^= 5;
console.log(h);


let g = 10;
g &&= 5;
console.log(g);


let f = 10;
f ||= 5;
console.log(f);


let d;
d ??= 5;
console.log(d);


//if else

var hour=45;
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);


//if elif  else
var time =98;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);


  //for loop


var text="hi";
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  console.log(text);



  //for in  loop

  const person = {fname:"John", lname:"Doe", age:25};

let ext = "";
for (let x in person) {
  ext += person[x];
}
console.log(ext);


//for of loop

const cars = ["BMW", "Volvo", "Mini"];

let txt = "";
for (let x of cars) {
  txt += x;
}
console.log(txt);


//while loop

 var te='';
 var i=0;
while (i < 10) {
    te += "The number is " + i;
    i++;
  }
  console.log(te);



  // ternary 

let ge = 20;

let type = (ge >= 18) ? "Adult" : "Minor"

console.log(type);



//functions

console.log("functions");
function showstring()
{
    console.log("hello world");
}

showstring();

var showstring = function()
{
    console.log("hello world");
}

showstring();

var showstring =() =>{
    console.log("arrow function hello world");

}

showstring();





//map

var number = [1,2,3,4];
 
var square = number.map((num) => {return num * num;

})

console.log(square);

var fruits = ["apple","banana","mango"];

var uppercase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(uppercase);





