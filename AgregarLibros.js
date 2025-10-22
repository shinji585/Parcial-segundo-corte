const libros = []; 


// funcion para agregar un libro al arreglo 
function agregarLibro(titulo,autor,año,isbn){
    // validamos que los datos no esten vacios 
    if (titulo.trim() === "" || autor.trim() === "" || año.trim() === "" || isbn.trim() === ""){
        return "Error: Todos los campos son obligatorios.";
    }

    // creamos el objecto del libro 
    const libro = {
        id: libros.length + 1,
        titulo: titulo,
        autor:autor,
        año:año,
        isbn:isbn
    };

    // agreamos el libro al array 
    libros.push(libro);
    return `Libro "${titulo}" agregado exitosamente.`;
}

// funcion para listar todos los libros 
function listarLibros(){
    if (libros.length == 0){
        return "No hay libros registrados.";
    }

    console.log("Lista de libros: ")
    libros.forEach((libro,index) => {
           console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}, ISBN: ${libro.ibsn}`);
    });
}

// funcion para buscar por titulo 
function buscarLibroPorTitulo(titulo){
    const resultado = libros.filter(libro => 
        libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );

    if (resultado.length === 0){
        return `No se encontraron libros con el título "${titulo}".`;
    }

    return resultado;
}


// funcion para buscar por autor 
function buscarPorAutor(autor){
    const resultado = libros.filter(libro =>{
        return libro.autor.toLowerCase().includes(autor.toLowerCase())
    });

    if (resultado.length === 0){
        return `No se encontraron libros del autor "${autor}".`;
    }

    return resultado;
}

// agregamos libros 
console.log(agregarLibro("Cien Años de Soledad","Gabriel García Márquez","1967","978-3-16-148410-0"));
console.log(agregarLibro("Don Quijote de la Mancha","Miguel de Cervantes","1605","978-1-56619-909-4"));
console.log(agregarLibro("La Sombra del Viento","Carlos Ruiz Zafón","2001","978-84-08-05720-7"));

// listamos los libros 
listarLibros();

// buscamos por titulo 
const tituloABuscar = "Cien Años de Soledad";
const resultadoTitulo = buscarLibroPorTitulo(tituloABuscar);
console.log("Resultado de la búsqueda por título:", resultadoTitulo);

// buscamos por autor 
const autorABuscar = "Miguel de Cervantes";
const resultadoAutor = buscarPorAutor(autorABuscar);
console.log("Resultado de la búsqueda por autor:", resultadoAutor);
