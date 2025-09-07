

console.log("=== Usando var ===");
for (var i = 0; i < 5; i++) {
    console.log(i); 
}
console.log("Valor de i después del ciclo:", i); 


console.log("\n=== Usando let ===");
for (let j = 0; j < 5; j++) {
    console.log(j); 
}
try {
    console.log("Valor de j después del ciclo:", j); 
    
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n=== Usando const ===");

console.log("No se puede usar 'const' como contador de ciclo porque no permite reasignación.");
