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



// Filtro por tecnología: escucha cambios en el select
const filter = document.querySelector('#filter-location');
const mensaje = document.querySelector('#filter-selected-value');


filter.addEventListener('change', function() {
    const jobs = document.querySelectorAll('.job-listing-class'); // Selecciona todos los empleos

    const selectedValue = filter.value // Cada vez que cambia el filtro obtenemos el valor

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    
    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad; // Accedemos al valor del data-attribute
        const modalidad = job.getAttribute('data-modalidad'); // Alternativa para acceder al data-attribute
        const isShown = selectedValue === '' || selectedValue === modalidad;
        job.classList.toggle('is-hidden', isShown === false);
    })
})


console.log("antes del fetch");

const container = document.querySelector('.job-listing');
fetch("./data.json") // fetch es asincrono
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement('article');
            article.className = 'job-listing-class';

            article.dataset.modalidad = job.data.modalidad; // data-modalidad
            article.dataset.nivel = job.data.nivel; // data-nivel
            article.dataset.technology = job.data.technology; // data-technology

            article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
            </div>
            <button type="submit" class="button-apply-job">Aplicar</button>`;

        container.appendChild(article);
        });
    });

console.log("despues del fetch");
// Nota: 1:17:59
