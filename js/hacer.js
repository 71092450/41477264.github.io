
function abrir(lugar) {
    document.getElementById("vent").style.display = "block";
    if (lugar == 1) {
        document.getElementById("parrafo1").style.display = "block";
    }
    else if (lugar == 2) {
        document.getElementById("parrafo2").style.display = "block";
    }
    else if (lugar == 3) {
        document.getElementById("parrafo3").style.display = "block";
    }
    else if (lugar == 4) {
        document.getElementById("parrafo4").style.display = "block";
    }
}
function cerrar() {
    document.getElementById("vent").style.display = "none";
    document.getElementById("parrafo1").style.display = "none";
    document.getElementById("parrafo2").style.display = "none";
    document.getElementById("parrafo3").style.display = "none";
    document.getElementById("parrafo4").style.display = "none";
}