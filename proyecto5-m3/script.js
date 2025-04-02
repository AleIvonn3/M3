

function biblioteca(titulo, autor, autor2, año, genero, editorial, estado, listadecap){
    this.titulo = titulo;
    this.autor = autor;
    this.autor2 = autor2;
    this.año = año;
    this.genero = genero;
    this.editorial = editorial;
    this.estado = estado;
    this.listadecap = listadecap;    
    this.libreria = function (){
        console.log("El libro titulado " + this.titulo + " es de los autores " + this.autor + " y " + this.autor2 + ", fue publicado en el año " + this.año + " este libro es de genero " + this.genero + " y esta " + this.estado);
        console.log("El libro " + titulo + " tiene los siguientes capitulos: " + this.listadecap)
    }
}

let libro1 = new biblioteca("Alicia en el pais de las maravillas", "Lewis Carroll", "---",1865, "Ficcion", "Macmillan Publishers", "Disponible", "12"); 
libro1.libreria();



let libro2 = new biblioteca("De Mí Para Mí, La Tormenta Pasará", "Chriss ChrissBraund", "Nacarid Portal",2023, "Poesía", "---", "Prestado", "No tiene"); 
libro2.libreria();


console.table(libro1);
console.table(libro2);

