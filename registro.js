


document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const registroExitoso = document.getElementById("registroExitoso");
    const volverInicioButton = document.getElementById("volverInicio");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Aquí, puedes agregar la lógica de registro, por ejemplo, enviando los datos al servidor.

        // Simularemos un registro exitoso después de 2 segundos.
        setTimeout(function () {
            registroExitoso.style.display = "block";
            volverInicioButton.style.display = "block"; // Mostrar el botón "Volver al Inicio"
        }, 2000);
    });

    // Agregar un manejador de eventos al botón "Volver al Inicio"
    volverInicioButton.addEventListener("click", function () {
        // Redirigir al usuario a la página de inicio (cambia "index.html" a la página que desees)
        window.location.href = "index.html";
    });
});
