


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

