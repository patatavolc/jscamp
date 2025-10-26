// Selectores: obtengo referencias a los filtros y al span donde muestro la selección
const filterLocation = document.querySelector('#filter-location');
const filterExperienceLevel = document.querySelector('#filter-experience-level');
const filterTechnology = document.querySelector('#filter-technology');
const mensaje = document.querySelector('#filter-selected-value');


function applyFilters() {
  // Todas las tarjetas de empleo generadas dinámicamente
  const jobs = document.querySelectorAll('.job-listing-class');

  // Valores seleccionados en cada filtro (si existe el elemento)
  const selectedLocation = filterLocation ? filterLocation.value.trim() : '';
  const selectedLevel = filterExperienceLevel ? filterExperienceLevel.value.trim() : '';
  const selectedTech = filterTechnology ? filterTechnology.value.trim() : '';

  // Construyo un texto resumido con los filtros activos y lo muestro en pantalla
  const parts = [];
  if (selectedLocation) parts.push(`Ubicacion: ${selectedLocation}`);
  if (selectedLevel) parts.push(`Nivel: ${selectedLevel}`);
  if (selectedTech) parts.push(`Tecnologia: ${selectedTech}`);
  if (mensaje) mensaje.textContent = parts.length ? `Has seleccionado: ${parts.join(' | ')}` : '';

  // Para cada oferta, leo sus atributos y compruebo coincidencias
  jobs.forEach(job => {
    // Atributos con la información de la oferta
    const modalidad = (job.getAttribute('data-modalidad') || '').trim();
    const nivel = (job.getAttribute('data-nivel') || '').trim();

    // Compatibilidad: acepto tanto data-technology (fetch-data.js) como data-tecnologia
    // Puedo manejar múltiples tecnologías separadas por comas
    const techAttr = (job.getAttribute('data-technology') || job.getAttribute('data-tecnologia') || '').trim();
    const techList = techAttr ? techAttr.split(',').map(t => t.trim()) : [];

    // Condiciones: si el filtro está vacío se considera match (no filtra por ese campo)
    const matchLocation = !selectedLocation || selectedLocation === modalidad;
    const matchLevel = !selectedLevel || selectedLevel === nivel;
    const matchTech = !selectedTech || techList.includes(selectedTech);

    // Mostrar sólo si cumple todas las condiciones (AND)
    const shouldShow = matchLocation && matchLevel && matchTech;
    job.classList.toggle('is-hidden', !shouldShow);
  });
}

if (filterLocation) filterLocation.addEventListener('change', applyFilters);
if (filterExperienceLevel) filterExperienceLevel.addEventListener('change', applyFilters);
if (filterTechnology) filterTechnology.addEventListener('change', applyFilters);

document.addEventListener('DOMContentLoaded', applyFilters);