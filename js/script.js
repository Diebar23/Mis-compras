

let nombreUsuario = 'diego';
//Ingreso usuario

function loginUsuario(){
    let ingresar = false;
    
        let  userName = prompt(`Ingresá tu Usuario`);    
        while(ingresar = false){
            if (userName == nombreUsuario) {
                ingresar = true;
                break;
            
            }else{
                alert(`Usuario no Válido`);
                ingresar = false;
            }
            }   
        
            
}

loginUsuario();


let clavePASS = '1234';
//Ingreso contraseña
function loginContraseña(){
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let  userPASS = prompt(`Ingresá tu Contraseña. Tenes  ${( i + 1)}  oportunidades.`);    
        if (userPASS == clavePASS) {
            alert(`ingreso exitoso. Bienvenido/a`);
            ingresar = true;
            break;
        }else{
            alert(`Error. Te quedan  ${i}  Intentos`);
        }
    }

return ingresar;


}
loginContraseña();


class Producto {

    constructor(nombre, marca, precio, id){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseInt(precio);
        this.id = id;
    }
    
    asignarId(array) {
        this.id = array.length;
    }
}

const Productos = [
    new Producto('hamburguesa','paty',350,1),
    new Producto('hamburguesa','swift',300,2),
    new Producto('medallon de pollo','swift',400,3),
    new Producto('milanesa de soja','swift',380,4),
    new Producto('patynesa','paty',4500,5),
]
console.log(Producto);

let continuar = true;

while(continuar){

    let ingreso = prompt('ingresar producto: nombre, marca separados por un guion (-), para finalizar presione X');

    if (ingreso.toUpperCase() =='X'){
        continuar = false;
        break;
    }

    const datos = ingreso.split('-');
    console.log(datos);

    const producto = new Producto(datos[0],datos[1],datos[2],datos[3],datos[4]);

    Productos.push(producto);
    producto.asignarId(Productos);
    console.log(Productos)

}

