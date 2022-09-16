var texto =  document.querySelector("textarea");
var buttonEncriptador = document.getElementById("encriptador")
var buttonDesencriptar = document.getElementById("desencriptador")

 function encriptar(){
   var letras = texto.value;
   var contador = 0
   var palabra = ""
   for(var i = 0; i < letras.length; i++){
        if(letras[i] == "a"){
            palabra = palabra + "ai"
        }else if(letras[i] == "e"){
            palabra = palabra + "enter"
        }else if(letras[i] == "i"){
            palabra = palabra + "imes"
        }else if(letras[i] == "o"){
            palabra = palabra + "ober"
        }else if(letras[i] == "u"){
            palabra = palabra + "ufat"
        }else{
            palabra = palabra + letras[i].toString();
        }
   }
   
   return alert(palabra);
}

function desencriptar(){
    var letras = texto.value;
    var palabrasClave = ["ai","enter","imes","ober","ufat"];
    palabra = ""

    for(var i = 0; i<letras.length;i++){
        if(letras[i] == "a" && letras[i+1] == "i"){
            palabra = palabra + "a"
        }
    }
    return alert(palabra)
}

buttonEncriptador.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;