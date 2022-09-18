var texto =  document.querySelector("textarea");
var textoGenerado = document.getElementById("textoGenerado");
var buttonEncriptador = document.getElementById("encriptador");
var buttonDesencriptar = document.getElementById("desencriptador");
var buttonCopy = document.getElementById("copy");
var diseno = document.getElementById("diseno");


var palabrasClave = ["ai","enter","imes","ober","ufat"];

 function encriptar(){
   var letras = texto.value.toLocaleLowerCase();
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

   if (buttonDesencriptar.classList.contains("active")) {
       buttonDesencriptar.classList.remove("active");
   }

   if (!buttonEncriptador.classList.contains("active")) {
       buttonEncriptador.classList.toggle("active");
   }
   textoGenerado.style.display = "block";
   textoGenerado.style.paddingTop = "1em";
   diseno.style.display = "none"
   document.getElementById("copy").style.display = "block";
   texto.value = "";


   return textoGenerado.innerHTML = palabra;
}

function desencriptar(){
    var letras = texto.value.toLocaleLowerCase()
    
    palabra = ""
    var posicion = 1;
    for(var i = 0; i  < letras.length; i += posicion){
        posicion = 1;
           if(letras.substr(i,palabrasClave[0].length) == palabrasClave[0]){
            posicion = palabrasClave[0].length;
            palabra +="a"
           }else if(letras.substr(i,palabrasClave[1].length) == palabrasClave[1]){
            posicion = palabrasClave[1].length;
            palabra +="e"
           }else if(letras.substr(i,palabrasClave[2].length) == palabrasClave[2]){
            posicion = palabrasClave[2].length;
            palabra +="i"
           }else if(letras.substr(i,palabrasClave[3].length) == palabrasClave[3]){
            posicion = palabrasClave[3].length;
            palabra +="o"
           }else if(letras.substr(i,palabrasClave[4].length) == palabrasClave[4]){
            posicion = palabrasClave[4].length;
            palabra +="u"
           }else{
           
            palabra += letras[i];
           }       
    }
    if (buttonEncriptador.classList.contains("active")) {
        buttonEncriptador.classList.remove("active");
    }

    if (!buttonDesencriptar.classList.contains("active")) {
        buttonDesencriptar.classList.toggle("active");
    }
 
    textoGenerado.style.display = "block";
   textoGenerado.style.paddingTop = "1em";
   diseno.style.display = "none"
   document.getElementById("copy").style.display = "block";
   texto.value = "";

    return textoGenerado.innerHTML = palabra;
}

function copy(){
    /*Crear un input text o textarea falso */
    const textFalso = document.createElement("textarea");
    textFalso.textContent = textoGenerado.innerText;
    document.body.append(textFalso);   
    textFalso.select();
    document.execCommand("copy");
    /*Eliminar el text Falso */
    textFalso.remove();
    textoGenerado.style.paddingTop = "0px";
    textoGenerado.innerText = "";
    textoGenerado.style.display = "none"
    document.getElementById("copy").style.display = "none";
    diseno.style.display = "flex"
    

}


buttonEncriptador.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopy.addEventListener("click",copy)