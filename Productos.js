const prompt = require("prompt-sync")({ sigint: true });
const IVA = 0.19;
const productos = [];

// funcion para ingresar productos
function ingresarProductos() {
    let continuar = true;
    
    while (continuar) {
        const precioIngreso = prompt("Ingrese el precio del producto:");
        const cantidadIngreso = prompt("Ingrese la cantidad de unidades:");
        
        const precio = parseFloat(precioIngreso);
        const cantidad = parseInt(cantidadIngreso);
        
        if (isNaN(precio) || precio <= 0) {
            alert("Error: El precio debe ser un número positivo.");
            continue;
        }
        
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Error: La cantidad debe ser un número positivo.");
            continue;
        }
        
        const totalParcial = precio * cantidad;
        
        const producto = {
            precio: precio,
            cantidad: cantidad,
            totalParcial: totalParcial
        };
        
        productos.push(producto);
        
        const seguir = prompt("¿Desea ingresar otro producto? (si/no):");
        if (seguir.toLowerCase() !== "si") {
            continuar = false;
        }
    }
}

// funcion para calcular totales
function calcularTotales() {
    if (productos.length == 0) {
        alert("No se ingresaron productos.");
        return;
    }
    
    let subtotal = 0;
    
    productos.forEach((producto) => {
        subtotal += producto.totalParcial;
    });
    
    const iva = subtotal * IVA;
    const totalPagar = subtotal + iva;
    
    console.log("=== RESUMEN DE VENTA ===");
    console.log("Productos ingresados:");
    
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. Precio: $${producto.precio}, Cantidad: ${producto.cantidad}, Total: $${producto.totalParcial.toFixed(2)}`);
    });
    
    console.log("\nSubtotal: $" + subtotal.toFixed(2));
    console.log("IVA (19%): $" + iva.toFixed(2));
    console.log("Total a pagar: $" + totalPagar.toFixed(2));
}

// ejecucion de las funciones
ingresarProductos();
calcularTotales();