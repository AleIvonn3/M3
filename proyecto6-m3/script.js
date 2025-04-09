function agregarcomen(){
 
    let agregarcominput = document.getElementById("agregarcominput");

    if(agregarcominput.value === ""){
        document.getElementById("mensajesAplicacion").innerText = "El campo está vacío. Por favor agrega un comentario"
        return;
    }

    let listacomul = document.getElementById("listacomul");

    let nuevoli = document.createElement("p");

    // Obtener la fecha y hora actual
    let fechaActual = new Date();
    let fechaFormateada = fechaActual.toLocaleDateString(); // Formato de fecha (ej. 08/04/2025)
    let horaFormateada = fechaActual.toLocaleTimeString(); // Formato de hora (ej. 14:30:00)

    // Agregar el comentario junto con la fecha y hora
    nuevoli.innerText = `${agregarcominput.value} (Agregado el ${fechaFormateada} a las ${horaFormateada})`;

    listacomul.appendChild(nuevoli);

    agregarcominput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";
}

let agregarcombtn = document.getElementById("agregarcombtn");
agregarcombtn.addEventListener("click", agregarcomen); 

