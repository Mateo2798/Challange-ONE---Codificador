var texto =  document.querySelector("textarea");
var buttonEncriptador = document.getElementById("encriptador");
var buttonDesencriptar = document.getElementById("desencriptador");

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
var palabrasClave = ["ai","enter","imes","ober","ufat"];
function desencriptar(){
    var letras = texto.value;
    
    palabra = ""
    var prueba = 1;
    for(var i = 0; i  < letras.length; i += prueba){
        prueba = 1;
        console.log( i)
           if(letras.substr(i,palabrasClave[0].length) == palabrasClave[0]){
            prueba = palabrasClave[0].length;
            palabra +="a"
           }else if(letras.substr(i,palabrasClave[1].length) == palabrasClave[1]){
            prueba = palabrasClave[1].length;
            palabra +="e"
           }else if(letras.substr(i,palabrasClave[2].length) == palabrasClave[2]){
            prueba = palabrasClave[2].length;
            palabra +="i"
           }else if(letras.substr(i,palabrasClave[3].length) == palabrasClave[3]){
            prueba = palabrasClave[3].length;
            palabra +="o"
           }else if(letras.substr(i,palabrasClave[4].length) == palabrasClave[4]){
            prueba = palabrasClave[4].length;
            palabra +="u"
           }else{
           
            palabra += letras[i];
           }
           
    }

    return console.log(palabra)
}


buttonEncriptador.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;