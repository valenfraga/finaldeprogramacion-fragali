const modalContacto = document.getElementById("modalContacto");
const abrirContacto = document.getElementById("abrirContacto");
const cerrarContacto = document.querySelector(".cerrar-contacto");

if (abrirContacto && modalContacto) {
    abrirContacto.addEventListener("click", function(e) {
        e.preventDefault();
        modalContacto.style.display = "flex";
    });
}

if (cerrarContacto && modalContacto) {
    cerrarContacto.addEventListener("click", function() {
        modalContacto.style.display = "none";
    });
}

if (modalContacto) {
    window.addEventListener("click", function(e) {
        if (e.target === modalContacto) {
            modalContacto.style.display = "none";
        }
    });
}



window.mostrarAlertaContacto = function (alertaId) {
    const alerta = document.getElementById(alertaId);

    if (alerta) {
        alerta.classList.remove("d-none");
        alerta.classList.add("show");
        alerta.style.display = "block";
    }
};

