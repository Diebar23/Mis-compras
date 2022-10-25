
let savedUsuario = 'diego'

function login(){
    let ingresar = false;

    let  userUsuario = prompt('Ingresá tu Usuario');    
        if (userUsuario == savedUsuario) {
            ingresar = true;
            break;
        }else{
            alert('Usuario no Válido')
        }
    }
}



let savedPASS = '1234';

function login(){
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let  userPASS = prompt('Ingresá tu Contraseña. Tenes ' + ( i + 1) + ' oportunidades.');    
        if (userPASS == savedPASS) {
            alert('ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        }else{
            alert('Error. Te quedan ' + i + ' Intentos')
        }
    }

return ingresar;


}


