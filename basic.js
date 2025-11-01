console.log("Hello");
console.log(1+3);
console.log("Hello from Node.js!");
for (let i = 1; i <= 5; i++) {
  console.log(`Line ${i}`);
}

// 1) Variables: var, let, const
var a = 1;
let b = 2;
const c = 3;
console.log('variables:', a, b, c);

// 2) Data types
console.log('types:', typeof 42, typeof 'hi', typeof true, typeof null, typeof undefined);

// 3) Template literals
const name = 'Vijay';
console.log(`Hello, ${name}!`);

// 4) Operators
console.log('math:', 1 + 2, 'comparison:', 5 > 3, 'logical:', true && false);

// 5) If / Else and Switch
const n = 5;
if (n % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
switch (n) {
  case 1: console.log('one'); break;
  default: console.log('not one');
}

// 6) Loops: for, while, for...of, for...in
for (let i = 0; i < 3; i++) console.log('for', i);
let j = 0;
while (j < 2) { console.log('while', j); j++; }
const arr = [10, 20, 30];
for (const v of arr) console.log('for...of', v);
const obj = {x:1, y:2};
for (const k in obj) console.log('for...in', k, obj[k]);

// 7) Functions: declaration, expression, arrow
function add(x, y) { return x + y; }
const mul = function(x, y) { return x * y; };
const sub = (x, y) => x - y;
console.log('fn:', add(1,2), mul(2,3), sub(5,3));

// 8) Array methods: map, filter, reduce
const nums = [1,2,3,4];
console.log('map', nums.map(n => n*2));
console.log('filter', nums.filter(n => n%2===0));
console.log('reduce', nums.reduce((s, v) => s+v, 0));

// 9) Objects, property access, methods
const person = {first:'Vijay', last:'Yadav', full() { return `${this.first} ${this.last}` }};
console.log('object', person.first, person['last'], person.full());

// 10) Destructuring and default params
const [p1, p2] = nums;
const {first = 'A'} = person;
console.log('destruct', p1, p2, first);

// 11) Spread and Rest
const arr2 = [...nums, 5];
function join(...args) { return args.join('-'); }
console.log('spread/rest'
, arr2, join('a','b','c'));

// 12) Classes and inheritance
class Animal { constructor(name){ this.name = name } speak(){ return `${this.name} makes a sound` } }
class Dog extends Animal { speak(){ return `${this.name} barks` } }
console.log('class', new Dog('Rex').speak());

// 13) Try / Catch / Finally
try {
  JSON.parse('invalid');
} catch (err) {
  console.log('caught error:', err.message);
} finally {
  console.log('cleanup');
}

// 14) Promises, async/await
function wait(ms) { return new Promise(res => setTimeout(() => res('done'), ms)); }
wait(100).then(v => console.log('promise then', v));
(async () => {
  const v = await wait(50);
  console.log('async/await', v);
})();

// 15) Callback example
function doAsync(cb) { setTimeout(() => cb('callback result'), 30); }
doAsync(res => console.log(res));

// 16) Modules (Node) - CommonJS example (uncomment in Node)
// const mod = require('./someModule');
// module.exports = { hello: () => console.log('hi') };

// 17) DOM basics (run in browser console)
// // const el = document.getElementById('app');
// // el.textContent = 'Hello DOM';

// End of examples.
// CommonJS
const mod = require('./mod');
module.exports = { hello() { } };

// ES Modules (modern)
import { hello } from './mod.js';
export function hello() { }