class Producto {

    constructor(nombre, marca, precio, tipo, id) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseInt(precio);
        this.tipo = tipo;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }


}

const productos = [
    new Producto ('Hamburguesa clasica', 'Paty', 1000, 'carne', 1),
    new Producto ('Hamburguesa clasica', 'Swift', 900, 'carne', 2),
    new Producto ('Hamburguesa express', 'Paty', 700, 'carne', 3),
    new Producto ('Hamburguesa burguer', 'Swift', 600, 'carne', 4),
    new Producto ('Medallon pollo', 'Swift', 800, 'pollo', 5),
    new Producto ('Patitas de pollo',' Swuift', 700, 'pollo', 6),
    new Producto ('Milanesa de soja', 'Swift', 500, 'soja', 7),
    new Producto ('Milanesa de carne', 'Paty', 600, 'carne', 8),
]

console.log(productos);


// Pedir que se ingresen Productos nuevos y sumarlos al array //
let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del producto: nombre, marca, precio, tipo, id del 1 al 8, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    const producto = new Producto(datos[0], datos[1], datos[2], datos[3], datos[4]);

    productos.push(producto);

    producto.asignarId(productos);

    console.log(productos)
} 


// Ordenar el array de acuerdo a lo que se elija //

let criterio = prompt('Elegí el criterio deseado:\n1 - nombre (A a Z) \n2 - marca (Z a A)\n3 - precio');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b)=> a.nombre.localeCompare(b.nombre));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        default:
            alert('No es un criterio válido');
            break;
    }
}


function crearStringResultado(array){
    let info = '';

    array.forEach(elemento=>{
        info += 'Nombre: ' + elemento.nombre + '\nMarca: ' + elemento.marca + '\nPrecio: ' + elemento.precio + '\n\n'
    })

    return info;
}


alert(crearStringResultado(ordenar(criterio,productos)));



// Filtrar Productos de acuerdo a la Marca //
let marcaElegido = prompt('Escribí la marca para que te mostramos sus productos');

const filtrado = productos.filter((producto)=>producto.marca.toLowerCase().includes(marcaElegido.toLowerCase()))


// Mostrar Productos filtradas de acuerdo a la Marca //

if (filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
}else{
    const imprimible = filtrado.map((producto)=>producto.nombre);
    alert('Los productos de nuestro catálogo, de Marcas que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}