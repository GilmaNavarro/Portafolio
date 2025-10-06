let menuVisible = false;
// funcion que oculta el menu o lo muestra
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="resposive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible =false;
}

function efectohabilidades(){
    var Soft_Skills =document.getElementById("Soft-Skills");
    var distancia_Soft_Skills = window.innerHeight - Soft_Skills.getBoundingClientRect().top;
    if(distancia_Soft_Skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
         habilidades [0].classList.add("javascript");
         habilidades[1].classList.add("Python");
         habilidades[2].classList.add("htmlcss");
         habilidades[3].classList.add("mysql");
         habilidades[4].classList.add("PHP");
         habilidades[5].classList.add("comunicacion");
         habilidades[6].classList.add("trabajo");
         habilidades[7].classList.add("creatividad");
         habilidades[8].classList.add("dedicacion");
    }
}

// aplicar la animacion en la barra de habilidades
window.onscroll = function(){
    efectohabilidades();
}