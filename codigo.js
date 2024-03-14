//Declaración de variables y constantes
let pedido;
let direccion;
let direc = 'Las Cabañitas 8839, Las Condes, RM, Chile';
const retorno = 'Su pedido se encuentra en despacho a ';
const retorno1 = 'Su pedido aún no ha sido despachado, consulte nuevamente mañana.';
const retorno2 = 'Pedido ingresado no es válido.';
const retorno4 = '¡Su dirección ha sido cambiada con éxito!';

//Función para realizar seguimiento de pedido
function seguirPedido(pedido) {
    if (pedido >= 3 && pedido <= 5) {
        return retorno + direc;
    } else if (pedido != 0 && pedido < 3) {
        return retorno1;
    } else {
        return retorno2;
    }

}

//Función para cambiar dirección de despacho
function cambiarDireccion(direccion) {
    direc = direccion;
    return retorno4;
}


let nameLastname = (prompt('Favor, ingresar tu Nombre y Apellido'));

let option = parseInt(prompt("¡Hola, " + nameLastname + '! \n ¿En qué podemos ayudarte? Elige una opción:\n 1- Seguimiento de pedido\n 2-Cambio de Dirección\n0-SALIR'));

while (option != 0) {
    switch (option) {
        case 1:
            pedido = parseInt(prompt('Favor, ingresa tu número de pedido\n (Números del 1 al 5)'));
            let mensaje = seguirPedido(pedido);
            alert(mensaje);
            break;
        case 2:
            let cambio = parseInt(prompt('Quiere cambiar su dirección de despacho?\n 1- Sí \n 2- No'));
            if (cambio == 1) {
                let direccion = prompt('Ingrese su nueva dirección');
                let mensaje1 = cambiarDireccion(direccion);
                alert(mensaje1);
            } break;
    } option = parseInt(prompt("¡Hola, " + nameLastname + '! \n ¿En qué podemos ayudarte? Elige una opción:\n 1- Seguimiento de pedido\n 2-Cambio de Dirección\n0-SALIR'));
}

