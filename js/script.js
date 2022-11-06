

let nombreUsuario = 'diego';
//Ingreso usuario
function loginUsuario(){
    let ingresar = false;
        let  userName = prompt(`Ingresá tu Usuario`);    
            if (userName == nombreUsuario) {
                ingresar = true;
                return ingresar;
            }else{
                //alert('Usuario no Válido')
                alert(`Usuario no Válido`);
                return userName;
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
            //alert('Error. Te quedan ' + i + ' Intentos')
            alert(`Error. Te quedan  ${i}  Intentos`);
        }
    }

return ingresar;


}
loginContraseña();


