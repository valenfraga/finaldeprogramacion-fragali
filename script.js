const modal = document.getElementById("modalDonacion");
const abrir = document.getElementById("abrirModal");
const cerrar = document.querySelector(".cerrar");

abrir.onclick = () => {
    modal.style.display = "flex";
}

cerrar.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}