const jobsListingSection = document.querySelector('.job-listing')

if (jobsListingSection) {
    jobsListingSection.addEventListener('click', function(event) {
        // event.target puede ser el botón o un elemento interno; usamos closest
        const clickedButton = event.target.closest('.button-apply-job')

        // Si el click ocurrió dentro de un botón con la clase .button-apply-job
        if (clickedButton) {
            // Cambio visual y deshabilitar para evitar re-aplicar
            clickedButton.textContent = "¡Aplicado! "
            clickedButton.classList.add('is-applied')
            clickedButton.disabled = true
        }
    })
} else {
    // Si el contenedor no existe, no hacemos nada; esto evita errores en páginas sin listados
    // (por ejemplo, la página de detalles usa una estructura diferente)
}

// Comentarios con otros eventos interesantes

// Ejemplos previos: mostrar distintas formas de seleccionar botones
// (se dejan comentados para referencia durante el aprendizaje)
// Recupera solo el primer boton que se encuentre
// const boton = document.querySelector('.button-apply-job');
// console.log(boton); // null si no lo encuentra

// if(boton !== null) {
//     boton.addEventListener('click', function () {
//         boton.textContent = "¡Aplicado! "
//         boton.classList.add('is-applied')
//         boton.disabled = true
//     })
// }


// const botones = document.querySelectorAll('.button-apply-job');
// // Devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una list vacia [] si no encuentra nada

// botones.forEach(boton => {
//     boton.addEventListener('click', function () {
//         boton.textContent = "¡Aplicado! "
//         boton.classList.add('is-applied')
//         boton.disabled = true
//     })
// })

// Delegación de eventos: escuchar clicks en el contenedor de listados
// Ventaja: funciona para botones añadidos dinámicamente y reduce listeners individuales



// Ejemplo de otros eventos
// const searchInput = document.querySelector('#empleos-search-input');

// searchInput.addEventListener('input', function() {
//     console.log(searchInput.value);
// });

// searchInput.addEventListener('blur', function() {
//     console.log('Se dispara cuando el campo pierde el foco ');
// });

// const searchForm = document.querySelector('#empleos-search-form');

// searchForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita el envío del formulario y recarga de página

//     // ... todo lo que yo quiera agregar aqui

//     console.log('submit');
// });

// document.addEventListener('keydown', function(event) {
//     console.log('Tecla presionada: ', event.key);
//     console.log('esta pulsada la tecla shift? ', event.shiftKey);
// });

