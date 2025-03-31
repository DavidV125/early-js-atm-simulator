///

let saldo1 = 1000000;
let saldo2 = 2000000; // saldo es variabe global
let saldo3 = 3000000;

//INICIO

function login() {
    let identificador1 = "Juan"; 
    let clave1 = "1111"; 
    let identificador2 = "Ana"; 
    let clave2 = "2222"; 
    let identificador3 = "Luis"; 
    let clave3 = "3333"; 
    let identificadorIngresado = "";

    let claveIngresada = "";
    let mensajeSalida = "";
    let intentosRestantes = 3;

    // PROCESO
    while (intentosRestantes > 0) {
        identificadorIngresado = prompt("Ingrese su nombre");
        claveIngresada = prompt("Ingrese su clave");

        if (
            (identificadorIngresado == identificador1 && claveIngresada == clave1) || //OR
            (identificadorIngresado == identificador2 && claveIngresada == clave2) || 
            (identificadorIngresado == identificador3 && claveIngresada == clave3)
        ) {
            alert("Bienvenido a Banca en Línea");
            Menu();
            break;

        } else {
            intentosRestantes--; // con -- de 3 pasa a 2, 2 a 1 y 1 a 0
            if (intentosRestantes > 0) {
                mensajeSalida = "El nombre o contraseña ingresado no es correcto.\nQuedan " + intentosRestantes + " intento(s)";
                alert(mensajeSalida);
            } else {
                alert("Su cuenta ha sido bloqueada por seguridad.\nContáctese con su Banco.");
                break;
            }
        }
    }

//
}

// inicio menu
function Menu(){
    let menuMensaje= `
        Seleccione qué desea hacer:
        1. Ver saldo
        2. Realizar giro
        3. Realizar depósito
        4. Salir
    `;

    let decision = "";

    while(decision != "4"){

     // MODIFICA EL CENTINELA (condicion)
     decision = prompt(menuMensaje);

        switch(decision){
            case "1":
                funSaldo();
                break;
            case "2":
                funGiro();
                break;
            case "3":
                funDeposito();
                break;
            case "4":
                break;
            default:
                alert("Opción no válida.")
        }// fin switch


    }// fin while

    alert("Ha salido del Menu. Gracias por usar nuestros servicios");

   
}// fin menu

//inicio saldo

function funSaldo(){
        alert("Su saldo actual es: $" + saldo1);
    }
    
function funGiro(){
    let montoGiro = parseInt(prompt("Su saldo actual es: $" + saldo1 + "\nIngrese el monto que desea girar:"));
    
    if (montoGiro > saldo1) {
      alert("Error: No puede girar un monto mayor que su saldo actual (" + saldo1 + ".).");
    } else {
        saldo1 -= montoGiro; // si el monto a girar es igual o menor a saldo
        alert("Giro realizado con éxito. Su nuevo saldo es: $" + saldo1); // a la segunda vez aparece NaN (not a number)
    }
    }
    
function funDeposito(){
    let montoDeposito = parseInt(prompt("Su saldo actual es: $" + saldo1 + "\nIngrese el monto que desea depositar:"));
    
    if (saldo1 += montoDeposito)
        alert("Giro realizado con éxito. Su nuevo saldo es: $" + saldo1);
    }

