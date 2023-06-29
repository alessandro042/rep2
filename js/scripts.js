function sayHello() {
    alert("Hola soy: Irving Uriel Espinosa Hernández");
}

function addMessage() {
    var inputElement = document.getElementById("inputText");
    var message = inputElement.value;
    var messageElement = document.getElementById("messageText");
    messageElement.innerText = message;
    inputElement.value = "";
}