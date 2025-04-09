function agregarcomen(){
 
    let agregarcominput = document.getElementById("agregarcominput");

    if(agregarcominput.value === ""){
        alert("El campo de tarea está vacío. Por favor agrega un comentario");
        document.getElementById("mensajesAplicacion").innerText = "El campo de tarea está vacío. Por favor agrega una tarea"
        return;
    }

    let nuevoLi = document.createElement("");
    nuevoLi.innerText = agregarcominput.value;

    listaTareasUl.appendChild(nuevoLi);

    agregarcominput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";
}

let agregarcombtn = document.getElementById("agregarcombtn");
agregarcombtn.addEventListener("click", agregarcomen); 

// NOTA: Cuando trabajamos con addEventListener, los eventos NO deben llevar la palabra "on" al inicio.