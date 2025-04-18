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

    // Crear un botón nuevo
    let botoneliminar = document.createElement("button");
    botoneliminar.innerText = "Eliminar";

    botoneliminar.addEventListener("click", () => {
        nuevoli.remove(); // remove() se elimina asimismo.
    });

    nuevoli.appendChild(botoneliminar);

    // Una vez creado el elemento, se debe agregar a otro elemento.
    listacomul.appendChild(nuevoli);

    agregarTareaInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    // Para eliminar un elemento podemos utilizar removeChild aplicado al papá de ese elemento.
    let mensajeErrorH2 = document.getElementById("mensajeError");
    document.body.removeChild(mensajeErrorH2); // En este caso el elemento que quiero borrar es hijo del body.
}

let agregarcombtn = document.getElementById("agregarcombtn");
agregarcombtn.addEventListener("click", agregarcomen); 

