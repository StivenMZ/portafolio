//Haz tú validación en javascript acá
const form = document.querySelector('.formcontato__form');

const nombreInput = document.querySelector('#nombre');
const errorNombre = document.querySelector('#error-nombre');
const nombreLabel = document.querySelector('#nombre-label');


const emailInput = document.querySelector('#email');
const errorEmail = document.querySelector('#error-email');
const emailLabel = document.querySelector('#email-label');

const asuntoInput = document.querySelector('#asunto');
const errorAsunto = document.querySelector('#error-asunto');
const asuntoLabel = document.querySelector('#asunto-label');

const mensajeInput = document.querySelector('#mensaje');
const errorMensaje = document.querySelector('#error-mensaje');
const mensajeLabel = document.querySelector('#mensaje-label');

const botonEnviar = document.querySelector("#boton-enviar");



// Ahora puedes utilizar estas variables para realizar las validaciones necesarias.



function campoBlanco (input, span){
    if(input.value.trim() == ""){
        span.innerHTML = `Error el campo ${input.id} no puede estar vacío`;

        return false;
    } 
    else {
        span.innerHTML = "";
        return true;
    }

    

}

function cambiarColorLabel (nombreLabel, validar){
    if(validar){
        nombreLabel.classList.add("label-verde");
    } else{

        nombreLabel.classList.remove("label-verde");
    }
}


function validarCorreo(expresionRegular, input, mensajeError, validar){
    if(!expresionRegular.test(input.value)){
        validar = false; 
        cambiarColorLabel(emailLabel, validar); 
        return errorEmail.innerHTML = mensajeError ;
        
    } else{
        errorEmail.innerHTML = "";
        
    }
}
let campoNombre= false,
campoEmail = false,
campoAsunto = false,
campoMensaje= false;
//INPUT NOMBRE

nombreInput.addEventListener("blur", ()=>{
    let validar = true;
    if(!campoBlanco(nombreInput, errorNombre)){
        validar = false;
        cambiarColorLabel(nombreLabel, validar); 
        return;
    }
   
    
    let expresionReg = /^[a-zA-Z ]+$/;

    if(nombreInput.value.length > 50 || nombreInput.value.length < 2 ){
        validar = false; 
        cambiarColorLabel(nombreLabel, validar); 
        return errorNombre.innerHTML = `Error, estás usando ${nombreInput.value.length} carácteres y solo se admiten entre 2 y 50`;
    } else{
        errorNombre.innerHTML = "";
    }

    if(!expresionReg.test(nombreInput.value)){
        validar = false; 
        cambiarColorLabel(nombreLabel, validar); 
        return errorNombre.innerHTML = "Error, solo se admiten letras minúsculas o mayúsculas";
        
    } else{
        errorNombre.innerHTML = "";
    }

    cambiarColorLabel(nombreLabel, validar);
    
    return campoNombre = true;
})

//INPUT EMAIL

emailInput.addEventListener("blur", ()=>{
    let validar = true;
    if(!campoBlanco(emailInput, errorEmail)){
        validar = false;
        cambiarColorLabel(emailLabel, validar); 
        return;
    }

let arrRegs = [/^[a-zA-Z0-9]+/,/@/ ,/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}([a-zA-Z]{2,})?$/ ,/\.([a-z]+)$/i ,/\.([a-z]+[a-z.]*[a-z]+)$/i];

    
    if(validarCorreo(arrRegs[0], emailInput, "Error, debe haber texto antes del @ => example@....", validar)) return false;
 
    if(validarCorreo(arrRegs[1], emailInput, "Error, el correo debe contener el simbolo @ example@example.example", validar)) return false;
    
    if(validarCorreo(arrRegs[2], emailInput, "Error, el correo el debe tener el siguiente formato example@dominio.example", validar)) return false;

    if(validarCorreo(arrRegs[3], emailInput, "Error, el correo debe tener un . despues del dominio => example@dominio.example ", validar)) return false;


    if(validarCorreo(arrRegs[4], emailInput, "Error, debe tener letras despues del . => example@dominio.com", validar)) return false;


     
    cambiarColorLabel(emailLabel, validar);
    return campoEmail = true;
})



asuntoInput.addEventListener("blur", ()=>{
    let validar = true;
    if(!campoBlanco(asuntoInput, errorAsunto)){
        validar = false;
        cambiarColorLabel(asuntoLabel, validar); 
        return;
    }
   
    
    let expresionReg = /[a-zA-Z]+.*/;;

    if(asuntoInput.value.length > 50){
        validar = false; 
        cambiarColorLabel(asuntoLabel, validar); 
        return errorAsunto.innerHTML = `Error, estás usando ${asuntoInput.value.length} carácteres y solo se admiten 50`;
    } else{
        errorAsunto.innerHTML = "";
    }

    if (!expresionReg.test(asuntoInput.value)) {
        validar = false; 
        cambiarColorLabel(asuntoLabel, validar); 
        return errorAsunto.innerHTML = "Error, el asunto debe tener al menos una letra";
        
    } else{
        errorAsunto.innerHTML = "";
    }

    cambiarColorLabel(asuntoLabel, validar);
    return campoAsunto = true;
})


mensajeInput.addEventListener("blur", ()=>{
    let validar = true;
    if(!campoBlanco(mensajeInput, errorMensaje)){
        validar = false;
        cambiarColorLabel(mensajeLabel, validar); 
        return;
    }
   
    
    let expresionReg = /[a-zA-Z]+.*/;

    if(mensajeInput.value.length > 300){
        validar = false; 
        cambiarColorLabel(mensajeLabel, validar); 
        return errorMensaje.innerHTML = `Error, estás usando ${mensajeInput.value.length} carácteres y solo se admiten 300`;
    } else{
        errorMensaje.innerHTML = "";
    }

    if (!expresionReg.test(mensajeInput.value)) {
        validar = false; 
        cambiarColorLabel(mensajeLabel, validar); 
        return errorMensaje.innerHTML = "Error, el mensaje debe tener al menos una letra";
        
    } else{
        errorMensaje.innerHTML = "";
    }

    cambiarColorLabel(mensajeLabel, validar);
    return campoMensaje = true;
})

function validarCampos(){
    if(campoNombre && campoEmail && campoAsunto && campoMensaje){
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let ubugue = validarCampos();

    if(ubugue){
        botonEnviar.innerHTML = "Enviando mensaje.."
        setTimeout(() => {
        alert("Mensaje enviado!");
        form.submit(); 
        }, 3000);
        
    } else{
        botonEnviar.innerHTML = "Datos incorrectos"
        setTimeout(() => {
            botonEnviar.innerHTML = "Enviar mensaje"
            }, 2000);
    }
});


