// Prototipo: Los prototipos son un conjunto de normas para integrar Programación Orientada a Objetos en JavaScript.

function Persona(fName, lName, height ){
    this.firstName = fName
    this.lastName = lName
    this.height = height 
}

Persona.prototype.sayHi = function () {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}.`)
}

Persona.prototype.amITall = function () {
    var answer = (this.height > 1.8? 'tall' : 'not tall')
    console.log(`I'm ${answer}`)
}

// Las arrow function heredan this de su scope padre, es decir, que si quisieramos usarlo en el las funciones de 
// prototipo, this es Window.

// Creamos un objeto dado el prototipo Persona
var kyo = new Persona('Kyo', 'Asakura', 1.81)