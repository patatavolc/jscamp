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

const jobsListingSection = document.querySelector('.job-listing')

jobsListingSection.addEventListener('click', function(event) {
    const element = event.target

    if(element.classList.contains('.button-apply-job')) {
        element.textContent = "¡Aplicado! "
        element.classList.add('is-applied')
        element.disabled = true
    }
})

const filter = document.querySelector('#filter-tech');

filter.addEventListener('change', function() {
    console.log(filter.value);
})
