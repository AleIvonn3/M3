//Se da valor
const passwordOutput = document.getElementById("passwordOutput");
const barrita = document.getElementById("barrita");
const valordelongitud = document.getElementById("valordelongitud");
const mayuscula = document.getElementById("mayuscula");
const minuscula = document.getElementById("minuscula");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");
const generabtn = document.getElementById("genera");

const maycarac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscarac = "abcdefghijklmnopqrstuvwxyz";
const numbercarac = "0123456789";
const simcarac = "!@#$%&*¡¿_:?.+-/";

//Genera los numeros cuando la barra se mueve
barrita.addEventListener("input", () => {
    valordelongitud.textContent = barrita.value;
    });

//Genera la contraseña cuando se hace click en el boton
generabtn.addEventListener("click", () => {
    let caracteres = "";
        if (mayuscula.checked) caracteres += maycarac;
        if (minuscula.checked) caracteres += minuscarac;
        if (numeros.checked) caracteres += numbercarac;
        if (simbolos.checked) caracteres += simcarac;

//Formula matematica y muestra la contraseña
const longdecontra = parseInt(barrita.value);
    let password = "";
    for (let i = 0; i < longdecontra; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }
    passwordOutput.textContent = password;
    });


