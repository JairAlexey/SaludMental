document.addEventListener("DOMContentLoaded", function () {
    var switchBtn = document.getElementById("btn-switch");
    var form = document.querySelector(".contact-form form");
    var camposFormulario = form.querySelectorAll("input, select");

    switchBtn.addEventListener("change", function () {
        camposFormulario.forEach(function (element) {
            if (element.name !== "Mensaje") {
                if (switchBtn.checked) {
                    if (element.type === "date") {
                        var today = new Date().toISOString().slice(0, 10);
                        element.value = today; // Establecer la fecha actual
                    } else {
                        element.value = "Anónimo"; // Llenar con 'Anonimo'
                    }
                    element.readOnly = true; // Hacer el campo solo lectura
                } else {
                    element.value = ""; // Vaciar el campo
                    element.readOnly = false; // Permitir edición nuevamente
                }
            }
        });
    });
});
