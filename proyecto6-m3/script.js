function agregarcomen(){
 
    let agregarcominput = document.getElementById("agregarcominput");

    if(agregarcominput.value === ""){
        document.getElementById("mensajesAplicacion").innerText = "El campo está vacío. Por favor agrega un comentario"
        return;
    }

    let listacomul = document.getElementById("listacomul");

    let nuevoli = document.createElement("p");
    nuevoli.innerText = agregarcominput.value;

    listacomul.appendChild(nuevoli);

    agregarcominput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";
}

let agregarcombtn = document.getElementById("agregarcombtn");
agregarcombtn.addEventListener("click", agregarcomen); 

