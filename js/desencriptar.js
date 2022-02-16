
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var textoEscrito = document.querySelector(".text-input");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeEncriptado = document.querySelector("#msg");

btnDesencriptar.addEventListener("click",function(event){

    event.preventDefault();

    texto = mensajeEncriptado.value;
    textoDesencriptado = texto.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

   
    textoEscrito.value = textoDesencriptado;
    mensajeEncriptado.value = "";

}
);