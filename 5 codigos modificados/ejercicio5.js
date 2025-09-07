

console.log("=== Usando var ===");

const funcsVar = [];

for (var i = 0; i < 3; i++) {
    funcsVar.push(function() {
        console.log(i); 
        
    });
}


funcsVar.forEach(func => func());

console.log("\n=== Usando let ===");

const funcsLet = [];

for (let j = 0; j < 3; j++) {
    funcsLet.push(function() {
        console.log(j); 
        
    });
}


funcsLet.forEach(func => func());
