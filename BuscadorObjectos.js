// constante de objectos

const estudiantes = [
  {
    cedula: "0951234567",
    apellidos: "García Pérez",
    nombres: "María José",
    programaAcademico: "Ingeniería en Sistemas",
    materias: ["Algoritmo", "Cálculo", "Inglés"],
    prommedioNota: 8.75
  },
  {
    cedula: "0987654321",
    apellidos: "Martínez López",
    nombres: "Carlos Andrés",
    programaAcademico: "Medicina",
    materias: ["Química", "Biología", "Inglés"],
    prommedioNota: 9.10
  },
  {
    cedula: "0912345678",
    apellidos: "Rodríguez Sánchez",
    nombres: "Ana Lucía",
    programaAcademico: "Derecho",
    materias: ["Humanidades", "Procesal", "Inglés"],
    prommedioNota: 8.95
  },
  {
    cedula: "0976543210",
    apellidos: "Torres Zambrano",
    nombres: "Diego Alejandro",
    programaAcademico: "Arquitectura",
    materias: ["Diseño", "Cálculo", "Inglés"],
    prommedioNota: 8.50
  },
  {
    cedula: "0998765432",
    apellidos: "Vera Castillo",
    nombres: "Sofía Valentina",
    programaAcademico: "Psicología",
    materias: ["Psicología", "Sociología", "Humanidade s"],
    prommedioNota: 9.25
  }
];


// funcion para buscar estudiate por cedula 
function buscarEstudiantePorcedula(cedula){
    // verificamos que la cadena no este vacia 
    if(cedula.trim() === ""){
        return "Error: La cédula no puede estar vacía.";
    }
    // buscamos el estudiante por cedula 
    const estudiante = estudiantes.find(est => est.cedula === cedula);
    // verificamos si se encontro el estudiante 
    if(!estudiante){
        return `Estudiante con cédula ${cedula} no encontrado.`;
    }
    // retornamos el estudiante encontrado 
    return estudiante;
}

// ejemplo de uso 
const cedulaABuscar = "0987654321";
const resultadoBusqueda = buscarEstudiantePorcedula(cedulaABuscar);
console.log("Resultado de la busqueda: ")
console.log(JSON.stringify(resultadoBusqueda,null,2));