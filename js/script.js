//login
const Usuario = [{
    nombre: 'Diego',
    mail: 'diego@mail.com',
    pass: 1234
},
{   nombre: 'Martin',
    mail: 'martin@mail.com',
    pass: 2345
},
{   nombre: 'Marta',
    mail: 'marta@mail.com',
    pass: 3456
}]


const inputMailLogi = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.modal(modalEl),
    contTargetas = document.getElementById('tarjetas'),
    elementTogglebles = document.querySelectorAll('toggeable');

function validarUsuario(mail,pass,userDB){
    let encontrado = userDB.find(userDB=>userDB.mail==mail);
    console.log(encontrado);

    if(typeof encontrado === 'undefine'){
        return false;
    }else{
        if(encontrado.pass != pass){
            return false;
        }else{
            return encontrado;
        }
    }

}

function guardarDatos(usuarioDB, storage){
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

//limpiar los storages
function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

function mostrarInfoProductos(array){

    contTargetas.innerHTML = '';


    array.forEach(element => {
        let html = `<div class="card cardProductos" id="tarjetas${element.nombre}">
        h3 class=card-header" id="nombreProductos">Nombre: ${element.nombre}</h3
        <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id=fotoProductos">
        <div class="card-body">
            <p class="card-text" id=n"nombreProductos">Nombre: ${element.nombre}</p>
            <p class="card-text" id=n"precioProductos">Precio: ${element.precio}</p>
        </div>
    </div>`;
contTarjetas.innerHTML +=html;
    });

}

function presentarInfo(array,clase){

    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

//Esta funcion revisa si hay un usuario guardado

function estaLogueado(usuario) {
    if (usuario){
        saludar(usuario);
        mostrarInfoProductos(productos);
        presentarInfo(elementosToggleables, 'd-none');
    }
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();

    if(!inputMailLogin.value||!inputPassLogin.value){
        alert('Todos los campos son requeridos');
    }else{
        let data = validarUsuario(usuarios,inputMailLogin.value,inputPassLogin.value);

        if(!data){
            alert(`Usuario y/o contraseña erróneos`);    
        }else{
            if(checkRecordar.checked){
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(sessionsStorage));
            }
        
modal.hide()

mostrarInfoProductos(productos);
presentarInfo(elementosToggleables, 'd-none');

        }
    }
})

//Array para carrito
const productos = [
    {nombre: "hamburguesa paty ", 
    precio: 350, img: './img/Hamburguesa Paty.jpg'},
    {nombre: "hamburguesa swift",
    precio: 300, img: 'img/Hamburguesa Swift.jpg'},
    {nombre: "medallon de pollo swift",
    precio: 400, img: 'img/Medallon de pollo Swift.jpg'},
    {nombre: "milanesa de soja swift",
    precio: 380, img: 'img/Milanesa de soja Swift.jpg'},
    {nombre: "patynesa paty", 
    precio: 450, img: 'img/Patynesa Paty.jpg'},
];


let carrito = []

let seleccion = ('Desea agregar productos al carrito si o no')

while(seleccion != 'si' && seleccion != 'no'){
    ('por favor ingrese si o no')
    seleccion = ('Desea agregar productos al carrito si o no')
}

if(seleccion == 'si'){
    ('Estos son nuetros productos')
let todosLosProductos = productos.map(
    (producto) => producto.nombre + '' + '' + producto.precio + '$');
    (todosLosProductos.join(' - '))
} else if (seleccion == 'no'){
    ('Hasta pronto')
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
      (`Total de la compra: ${total}`)
