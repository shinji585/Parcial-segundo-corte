const productos = [];

// funcion para agregar producto
function agregarProducto(codigo, nombre, precio, stock) {
    if (codigo.trim() === "" || nombre.trim() === "" || precio.trim() === "" || stock.trim() === "") {
        return "Error: Todos los campos son obligatorios.";
    }
    
    const existe = productos.find(prod => prod.codigo === codigo);
    if (existe) {
        return `Error: Ya existe un producto con código ${codigo}.`;
    }
    
    const precioNum = parseFloat(precio);
    const stockNum = parseInt(stock);
    
    if (isNaN(precioNum) || precioNum <= 0) {
        return "Error: El precio debe ser un número positivo.";
    }
    
    if (isNaN(stockNum) || stockNum < 0) {
        return "Error: El stock debe ser un número no negativo.";
    }
    
    const estado = stockNum > 0 ? "Disponible" : "Agotado";
    
    const producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precioNum,
        stock: stockNum,
        estado: estado
    };
    
    productos.push(producto);
    return `Producto ${nombre} agregado exitosamente.`;
}
// funcion para actualizar stock
function actualizarStock(codigo, nuevasCantidad) {
    const producto = productos.find(prod => prod.codigo === codigo);
    
    if (!producto) {
        return `No se encontró producto con código ${codigo}.`;
    }
    
    const cantidadNum = parseInt(nuevasCantidad);
    
    if (isNaN(cantidadNum) || cantidadNum < 0) {
        return "Error: El stock debe ser un número no negativo.";
    }
    
    producto.stock = cantidadNum;
    producto.estado = cantidadNum > 0 ? "Disponible" : "Agotado";
    
    return `Stock del producto ${producto.nombre} actualizado a ${cantidadNum} unidades.`;
}

// funcion para listar productos
function listarProductos() {
    if (productos.length == 0) {
        return "No hay productos registrados.";
    }
    
    const ordenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    console.log("Lista de productos:");
    ordenados.forEach((prod, index) => {
        console.log(`${index + 1}. Código: ${prod.codigo}, Nombre: ${prod.nombre}, Precio: $${prod.precio.toFixed(2)}, Stock: ${prod.stock}, Estado: ${prod.estado}`);
    });
}

// ejecucion de las funciones
console.log(agregarProducto("001", "Laptop Dell", "850.00", "5"));
console.log(agregarProducto("002", "Mouse Inalámbrico", "25.50", "15"));
console.log(agregarProducto("003", "Teclado Mecánico", "120.00", "8"));
console.log(agregarProducto("004", "Monitor LG 24", "250.00", "0"));
console.log(agregarProducto("005", "Cable HDMI", "15.99", "30"));

console.log("\n");
listarProductos();

console.log("\n");
console.log(actualizarStock("004", "12"));

console.log("\n");
console.log(actualizarStock("002", "3"));

console.log("\n");
listarProductos();