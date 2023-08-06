// Função para fazer a requisição à API
function fazerRequisicao(numero) {
  // URL da API com o parâmetro do número
  const url = `https://exemplo.com/api?numero=${numero}`;

  // Fazendo a requisição usando o método fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Manipulando a resposta da API
      console.log(data);
      // Aqui você pode fazer o que desejar com os dados retornados pela API
    })
    .catch((error) => {
      // Lidando com erros de requisição
      console.log("Ocorreu um erro:", error);
    });
}

// Função para ler o número inserido pelo usuário
function lerNumero() {
  const numero = prompt("Digite um número:");

  // Verifica se foi inserido um número válido
  if (isNaN(numero)) {
    console.log("Número inválido!");
    return;
  }

  fazerRequisicao(numero);
}

/********************************************************/
printprops({
  x: 12,
  cuzao: 14,
});

/*console.log(factorial(5));
console.log(toupper("teste"));*/

const a = function (x) {
  return x * x;
};

//console.log(a(3));

function printprops(o) {
  for (let p in o) {
    //console.log(`${p}: ${o[p]}\n`);
  }
}

function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

function toupper(o) {
  return String(o).toUpperCase();
}

function getPropertyNames(o, a) {
  if (a === undefined) a = [];
  for (let property in o) a.push(property);
  return a;
}

let o = { x: 1 },
  p = { y: 2, z: 3 };
let j = getPropertyNames(o);

const rectangle = (width, height = width * 2) => ({ width, height });
//console.log(rectangle(1));

function max(first = -Infinity, ...rest) {
  let maxValue = first;

  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }

  return maxValue;
}

//console.log(max(1, 10, 1002, 2, 3, 1000, 4, 5, 6));

function timed(f) {
  return function (...args) {
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      return f(...args);
    } finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}`);
    }
  };
}

function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

//console.log(timed(benchmark)(1000000));

let [x, y] = [1, 2];
console.log(`O valor de x é: ${x} e o do y é: ${y}`);

[x, y] = [x + 1, y + 1];
console.log(`O valor de x é: ${x} e o do y é: ${y}`);

[x, y] = [y, x];
console.log(`O valor de x é: ${x} e o do y é: ${y}`);

function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);

let [c, d] = toCartesian(r, theta);

let obj = { x: 1, y: 2 };
for (const [name, value] of Object.entries(obj)) {
  console.log(name, value);
}

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };

let { m, g, b } = transparent;

const { sin: sina, cos, tan } = Math;

console.log(sina(90));

/*let points = [{x: 1, y: 2}, {x: 3, y: 4}];

let [{x: x1, y: y1}, {x: x2, y: y2}] = points;

(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) => true*/

/*let points2 = { p1: [1,2], p2: [3,4]};

let {p1:[x1, y1], p2: [x2, y2]} = points2;

(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) => true*/

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

/*function multiply(a, b = 1) {
  return a * b;
}*/

console.log(multiply(5, 2));

console.log(multiply(5));

let fruits = [
  "Apple",
  "Orange",
  "Plum",
];

function vectorAdd([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar };
}

//console.log(vectorAdd([1, 2], [3, 4]));
console.log(vectorMultiply({ x: 1, y: 2 }, 2));

/*function vectorAdd(
  { x: x1, y: y1 },
  { x: x2, y: y2 }
) {
  return { x: x1 + x2, y: y1 + y2 };
}
*/vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 })

function vectorMultiply({ x, y, z = 0 }, scalar) {
  return { x: x * scalar, y: y * scalar, z: z * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2);

function arraycopy({ from, to = from, n = from.length,
  fromIndex = 0, toIndex = 0 }) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let k = [1, 2, 3, 4, 5], i = [9, 8, 7, 6, 5];
arraycopy({ from: k, n: 3, to: i, toIndex: 4 })