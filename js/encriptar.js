
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
var btnEncriptar = document.querySelector("#btn-encriptar");
var textoEscrito = document.querySelector(".text-input");
var mensajeEncriptado = document.querySelector("#msg");

btnEncriptar.addEventListener("click",function(event){

    event.preventDefault();

    texto = textoEscrito.value;
    textoEncriptado = texto.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
    
    mensajeEncriptado.value = textoEncriptado;
    textoEscrito.value = "";
    
    }
);
