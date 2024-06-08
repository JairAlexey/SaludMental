let cuestionarios = {
    MiedoInseguridadesNinos: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, nivel bajo de ansiedad escolar." },
            { max: 14, mensaje: "Bien, algunas preocupaciones pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para manejar tus preocupaciones." },
            { max: 20, mensaje: "Alto nivel de ansiedad escolar, te recomendamos buscar ayuda profesional." }
        ]
    },
    MiedoInseguridadesJovenes: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, nivel bajo de ansiedad escolar." },
            { max: 14, mensaje: "Bien, algunas preocupaciones pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para manejar tus preocupaciones." },
            { max: 20, mensaje: "Alto nivel de ansiedad escolar, te recomendamos buscar ayuda profesional." }
        ]
    },
    EstadoAnimoNinos: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, estado de ánimo positivo y saludable." },
            { max: 14, mensaje: "Bien, algunas áreas podrían necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para mejorar tu bienestar emocional." },
            { max: 20, mensaje: "Podrías estar experimentando dificultades significativas en tu estado de ánimo. Te recomendamos buscar ayuda profesional." }
        ]
    },
    EstadoAnimoJovenes: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, estado de ánimo positivo y saludable." },
            { max: 14, mensaje: "Bien, algunas áreas podrían necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para mejorar tu bienestar emocional." },
            { max: 20, mensaje: "Podrías estar experimentando dificultades significativas en tu estado de ánimo. Te recomendamos buscar ayuda profesional." }
        ]
    },
    FelicidadNinos: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, alto nivel de bienestar emocional." },
            { max: 14, mensaje: "Bien, algunas áreas pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para mejorar tu bienestar emocional." },
            { max: 20, mensaje: "Bajo nivel de bienestar emocional, te recomendamos buscar ayuda profesional." }
        ]
    },
    FelicidadJovenes: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, alto nivel de bienestar emocional." },
            { max: 14, mensaje: "Bien, algunas áreas pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera buscar apoyo para mejorar tu bienestar emocional." },
            { max: 20, mensaje: "Bajo nivel de bienestar emocional, te recomendamos buscar ayuda profesional." }
        ]
    },
    ResponsabilidadNinos: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, alto nivel de responsabilidad y compromiso." },
            { max: 14, mensaje: "Bien, algunas áreas pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera mejorar tu nivel de responsabilidad y compromiso." },
            { max: 20, mensaje: "Bajo nivel de responsabilidad y compromiso, es importante trabajar en mejorar estas áreas." }
        ]
    },
    ResponsabilidadJovenes: {
        puntuaciones: [
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 }, { si: 2, no: 0 },
            { si: 2, no: 0 }, { si: 2, no: 0 }
        ],
        rangos: [
            { max: 9, mensaje: "Excelente, alto nivel de responsabilidad y compromiso." },
            { max: 14, mensaje: "Bien, algunas áreas pueden necesitar atención." },
            { max: 19, mensaje: "Regular, considera mejorar tu nivel de responsabilidad y compromiso." },
            { max: 20, mensaje: "Bajo nivel de responsabilidad y compromiso, es importante trabajar en mejorar estas áreas." }
        ]
    },
    ProteccionDatos: {
        respuestasCorrectas: [3, 2, 1, 1, 2, 0, 2, 1, 2, 2], // Índices de las respuestas correctas
        puntuaciones: [
            5, 5, 5, 5, 5, 1, 5, 5, 5, 1
        ],
        rangos: [
            { max: 19, mensaje: "Es esencial que recibas una capacitación completa sobre protección de datos y privacidad para garantizar el cumplimiento normativo y la seguridad de la información." },
            { max: 29, mensaje: "Es crucial que revises urgentemente tus conocimientos y practiques buenas prácticas de protección de datos y privacidad para reducir los riesgos de brechas de seguridad." },
            { max: 39, mensaje: "Necesitas revisar y fortalecer tus conocimientos sobre protección de datos y privacidad para garantizar una mejor protección de la información." },
            { max: 49, mensaje: "Buen trabajo, tienes un buen entendimiento de la importancia de la protección de datos, pero aún puedes mejorar en algunos aspectos." },
            { max: 50, mensaje: "Excelente, demuestras un alto nivel de conocimiento y concienciación sobre la protección de datos y privacidad." }
        ]
    },
    SeguridadInformacion: {
        respuestasCorrectas: [2, 1, 3, 1, 1, 2, 2, 2, 1, 2],
        puntuaciones: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        rangos: [
            { max: 19, mensaje: "Es esencial que recibas una capacitación completa sobre gestión de riesgos y respuesta a incidentes informáticos para garantizar el cumplimiento normativo y la seguridad de la información." },
            { max: 29, mensaje: "Es crucial que revises urgentemente tus conocimientos y practiques buenas prácticas de gestión de riesgos y respuesta a incidentes informáticos para reducir los riesgos de brechas de seguridad." },
            { max: 39, mensaje: "Necesitas revisar algunos aspectos de seguridad de la información y considerar una formación adicional." },
            { max: 49, mensaje: "Buen trabajo, demuestras un buen conocimiento en seguridad de la información, pero siempre hay espacio para mejorar." },
            { max: 50, mensaje: "Excelente, tienes un alto nivel de concienciación y formación en seguridad de la información." }
        ]
    },
    GestionRiesgos: {
        respuestasCorrectas: [1, 1, 1, 3, 1, 2, 0, 1, 1, 1],
        puntuaciones: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        rangos: [
            { max: 19, mensaje: "Es esencial que recibas una capacitación completa sobre gestión de riesgos y respuesta a incidentes informáticos para garantizar el cumplimiento normativo y la seguridad de la información." },
            { max: 29, mensaje: "Es crucial que revises urgentemente tus conocimientos y practiques buenas prácticas de gestión de riesgos y respuesta a incidentes informáticos para reducir los riesgos de brechas de seguridad." },
            { max: 39, mensaje: "Necesitas revisar y fortalecer tus conocimientos sobre gestión de riesgos y respuesta a incidentes informáticos para garantizar una mejor preparación para posibles situaciones de seguridad." },
            { max: 49, mensaje: "Buen trabajo, tienes un buen entendimiento de la importancia de la gestión de riesgos y la respuesta a incidentes informáticos, pero aún puedes mejorar en algunos aspectos." },
            { max: 50, mensaje: "Excelente, demuestras un alto nivel de conocimiento y comprensión en gestión de riesgos y respuesta a incidentes informáticos." }
        ]
    }
};

let opcion_elegida = [];

function respuesta(num_pregunta, seleccionada) {
    const cuestionarioId = document.body.getAttribute('data-cuestionario-id');
    console.log("Cuestionario ID:", cuestionarioId); // Agregado para depuración
    opcion_elegida[num_pregunta] = parseInt(seleccionada.value);

    let id = "p" + num_pregunta;
    let labels = document.getElementById(id).querySelectorAll("label");
    labels.forEach(label => label.style.backgroundColor = "white");

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function calcularMensaje(cuestionarioId, totalPuntos) {
    let cuestionario = cuestionarios[cuestionarioId];
    let mensajeNivel = "";

    for (let rango of cuestionario.rangos) {
        if (totalPuntos <= rango.max) {
            mensajeNivel = rango.mensaje;
            break;
        }
    }

    return mensajeNivel;
}

function revelar() {
    const cuestionarioId = document.body.getAttribute('data-cuestionario-id');
    console.log("Cuestionario ID en revelar:", cuestionarioId); // Agregado para depuración

    let cuestionario = cuestionarios[cuestionarioId];
    if (!cuestionario) {
        console.error("Cuestionario no encontrado:", cuestionarioId);
        return;
    }

    let totalPuntos = 0;

    if (cuestionario.respuestasCorrectas) {
        // Cuestionario con opciones correctas únicas
        let respuestasCorrectas = cuestionario.respuestasCorrectas || [];
        let puntuaciones = cuestionario.puntuaciones || [];

        for (let i = 0; i < respuestasCorrectas.length; i++) {
            if (opcion_elegida[i] === respuestasCorrectas[i]) {
                totalPuntos += puntuaciones[i];
            }
        }
    } else if (cuestionario.puntuaciones) {
        // Cuestionario de tipo Sí/No
        let puntuaciones = cuestionario.puntuaciones || [];

        for (let i = 0; i < puntuaciones.length; i++) {
            let puntos = opcion_elegida[i] === 1 ? puntuaciones[i].si : puntuaciones[i].no;
            totalPuntos += puntos;
        }
    }

    let mensajeNivel = calcularMensaje(cuestionarioId, totalPuntos);
    let resultadoHTML = `<p>Total de puntos: ${totalPuntos}</p><p>${mensajeNivel}</p>`;
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
