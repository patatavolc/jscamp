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
