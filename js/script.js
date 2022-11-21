//Array para carrito
const productos = [
    {nombre: 'hamburguesa paty ', precio: 350},
    {nombre: 'hamburguesa swift ',precio: 300},
    {nombre: 'medallon de pollo swift ',precio: 400},
    {nombre: 'milanesa de soja swift ',precio: 380},
    {nombre: 'patynesa paty ', precio: 450},
];
let carrito = []

let seleccion = prompt('Desea agregar productos al carrito si o no')

while(seleccion != 'si' && seleccion != 'no'){
    alert('por favor ingrese si o no')
    seleccion = prompt('Desea agregar productos al carrito si o no')
}

if(seleccion == 'si'){
    alert('Estos son nuetros productos')
let todosLosProductos = productos.map(
    (producto) => producto.nombre + '' + '' + producto.precio + '$');
alert(todosLosProductos.join(' - '))
} else if (seleccion == 'no'){
    alert('Hasta pronto')
}

while(seleccion != 'no'){
    let producto = prompt('Agregar producto')
    let precio = 0

    if (producto == 'hamburguesa paty' || producto == 'hamburguesa swift' || 
    producto == 'medallon de pollo' || producto == 'milanesa de soja paty' || 
    producto == 'patynesa paty'){
        switch (producto){
            case 'hamburguesa paty':
                precio = 350;
                break;
            case 'hamburguesa swift':
                precio = 300;
                break;
            case 'medallon de pollo swift':
                precio = 400;
                break;
            case 'milanesa de soja swift':
                precio = 380;
                break;
            case 'patynesa paty':
                precio = 450;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt('Elija la cantidad'))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert('producto sin existencia')
    }
    seleccion = prompt('quiero agregar algo mas?')

    while(seleccion == 'no'){
        alert('Gracias por su compra')
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            Total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total de la compra: ${total}`)
