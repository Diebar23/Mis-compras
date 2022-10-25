

let nombreUsuario = 'diego';

    function solicitarUsuario(){
    let ingresar = false;

        let  userName = prompt('Ingresá tu Usuario');    
            if (userName == nombreUsuario) {
                ingresar = true;
                
            }else{
                alert('Usuario no Válido')
            }
        }



let clavePASS = '1234';

function login(){
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let  userPASS = prompt('Ingresá tu Contraseña. Tenes ' + ( i + 1) + ' oportunidades.');    
        if (userPASS == clavePASS) {
            alert('ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        }else{
            alert('Error. Te quedan ' + i + ' Intentos')
        }
    }

return ingresar;


}


