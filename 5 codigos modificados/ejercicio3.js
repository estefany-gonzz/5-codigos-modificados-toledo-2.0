
let x = 5;

if (true) {
  
  let x = 10;
  console.log("Dentro del bloque if (let):", x); 
}

console.log("Fuera del bloque if (let):", x); 


const y = 5;

if (true) {
  const y = 10;
  console.log("Dentro del bloque if (const):", y); 
}

console.log("Fuera del bloque if (const):", y); 
