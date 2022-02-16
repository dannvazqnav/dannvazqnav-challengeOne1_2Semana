var mensajeEncriptado = document.querySelector("#msg");
var textoEscrito = document.querySelector(".text-input");
var btnCopiar =document.querySelector("#btn-copy")
btnCopiar.addEventListener("click",function(event){

    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoEscrito.focus();

    
}
);