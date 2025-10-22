const estudiantes = [];


// funcion para agregar estudiante
function agregarEstudiante(cedula, apellidos, nombres, programaAcademico, materias, prommedioNota) {
    if (cedula.trim() === "" || apellidos.trim() === "" || nombres.trim() === "" || programaAcademico.trim() === "" || !materias || prommedioNota.trim() === "") {
        return "Error: Todos los campos son obligatorios.";
    }
    
    const existe = estudiantes.find(est => est.cedula === cedula);
    if (existe) {
        return `Error: Ya existe un estudiante con cédula ${cedula}.`;
    }
    
    const estudiante = {
        cedula: cedula,
        apellidos: apellidos,
        nombres: nombres,
        programaAcademico: programaAcademico,
        materias: materias,
        prommedioNota: prommedioNota
    };
    
    estudiantes.push(estudiante);
    return `Estudiante ${nombres} ${apellidos} agregado exitosamente.`;
}

function listarEstudiantes() {
    if (estudiantes.length == 0) {
        return "No hay estudiantes registrados.";
    }
    
    const ordenados = [...estudiantes].sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    
    console.log("Lista de estudiantes:");
    ordenados.forEach((est, index) => {
        console.log(`${index + 1}. Apellidos: ${est.apellidos}, Nombres: ${est.nombres}, Cédula: ${est.cedula}, Programa: ${est.programaAcademico}, Promedio: ${est.prommedioNota}`);
    });
}

// funcion para buscar estudiante por cedula
function buscarEstudiantePorCedula(cedula) {
    if (cedula.trim() === "") {
        return "Error: La cédula no puede estar vacía.";
    }
    
    const estudiante = estudiantes.find(est => est.cedula === cedula);
    
    if (!estudiante) {
        return `No se encontró estudiante con cédula ${cedula}.`;
    }
    
    return estudiante;
}

// funcion para actualizar estudiante
function actualizarEstudiante(cedula, nuevosDatos) {
    const estudiante = estudiantes.find(est => est.cedula === cedula);
    
    if (!estudiante) {
        return `No se encontró estudiante con cédula ${cedula}.`;
    }
    
    if (nuevosDatos.apellidos) estudiante.apellidos = nuevosDatos.apellidos;
    if (nuevosDatos.nombres) estudiante.nombres = nuevosDatos.nombres;
    if (nuevosDatos.programaAcademico) estudiante.programaAcademico = nuevosDatos.programaAcademico;
    if (nuevosDatos.materias) estudiante.materias = nuevosDatos.materias;
    if (nuevosDatos.prommedioNota) estudiante.prommedioNota = nuevosDatos.prommedioNota;
    
    return `Estudiante con cédula ${cedula} actualizado exitosamente.`;
}


// funcion para eliminar estudiante
function eliminarEstudiante(cedula) {
    const index = estudiantes.findIndex(est => est.cedula === cedula);
    
    if (index === -1) {
        return `No se encontró estudiante con cédula ${cedula}.`;
    }
    
    const nombreElim = estudiantes[index].nombres;
    
    estudiantes.splice(index, 1);
    
    return `Estudiante ${nombreElim} (Cédula: ${cedula}) eliminado exitosamente.`;
}

console.log(agregarEstudiante("0951234567", "García Pérez", "María José", "Ingeniería en Sistemas", ["Algoritmo", "Cálculo", "Inglés"], "8.75"));
console.log(agregarEstudiante("0987654321", "Martínez López", "Carlos Andrés", "Medicina", ["Química", "Biología", "Inglés"], "9.10"));
console.log(agregarEstudiante("0912345678", "Rodríguez Sánchez", "Ana Lucía", "Derecho", ["Humanidades", "Procesal", "Inglés"], "8.95"));
console.log(agregarEstudiante("0976543210", "Torres Zambrano", "Diego Alejandro", "Arquitectura", ["Diseño", "Cálculo", "Inglés"], "8.50"));

console.log("\n");
listarEstudiantes();

console.log("\n");
const resultado = buscarEstudiantePorCedula("0987654321");
console.log(resultado);

console.log("\n");
console.log(actualizarEstudiante("0951234567", { prommedioNota: "9.05" }));

console.log("\n");
console.log(eliminarEstudiante("0912345678"));

console.log("\n");
listarEstudiantes();