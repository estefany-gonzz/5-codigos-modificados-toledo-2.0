

function displayMessage() {
    
    var message = "Hello, World!";

    if (true) {
        
        let message = "Hello, JavaScript!";
        console.log("Dentro del if con let:", message);
    }

    console.log("Fuera del if con var:", message);

    
    var message = "Nuevo valor con var";
    console.log("Redeclarando con var:", message);

    
}

displayMessage();
