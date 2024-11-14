// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Modal para proyectos
function mostrarDetalles(proyectoId) {
    // Mostrar el modal correspondiente
    var modal = document.getElementById(proyectoId);
    modal.style.display = 'block';
}

// Función para cerrar el modal
var cerrarModal = document.querySelectorAll('.cerrar-modal');
cerrarModal.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Cerrar el modal
        var modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Cerrar el modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Agregar esta parte para garantizar que el modal se cierre cuando el usuario presione "Escape"
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            modal.style.display = 'none';
        });
    }
});
