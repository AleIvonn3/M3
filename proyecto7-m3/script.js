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


//Muestra la fuerza de la contraseña
function evalfuer(password) {
    const info = document.getElementById("nivelseguro");
    let fuerza = 0;

    if (password.length > 8) fuerza ++;
    if (password.length >= 15) fuerza ++;
    if (/[A-Z]/.test(password)) fuerza ++;
    if (/[a-z]/.test(password)) fuerza ++;
    if (/[0-9]/.test(password)) fuerza ++;
    if (/[^A-Za-z0-9]/.test(password)) fuerza ++;

    let textfuerza = "";
    let color = "";

    switch (fuerza) {
        case 0:

        case 1:
            textfuerza = "Débil";
            color = "red";
            break;
        case 2:
            textfuerza = "Contraseña media";
            color = "yellow";
            break;
        case 3:
            textfuerza = "Contraseña fuerte";
            color = "green";
            break;
    }
}

