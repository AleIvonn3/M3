    const passwordOutput = document.getElementById("passwordOutput");
    const barrita = document.getElementById("barrita");
    const valordelongitud = document.getElementById("valordelongitud");
    const mayuscula = document.getElementById("mayuscula");
    const minuscula = document.getElementById("minuscula");
    const numeros = document.getElementById("numeros");
    const simbolos = document.getElementById("simbolos");
    const generabtn = document.getElementById("generar");

    const maycarac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minuscarac = "abcdefghijklmnopqrstuvwxyz";
    const numbercarac = "0123456789";
    const simcarac = "!@#$%^&*()_+{}[]|:;<>,.?/~`";

    //Genera los numeros cuando la barra se mueve
    barrita.addEventListener("input", () => {
        valordelongitud.textContent = barrita.value;
      });