// Crear el componente JobCard
// importarlo y usarlo en App.jsx

import React from 'react';

export function JobCard({ titulo, empresa, ubicacion, descripcion, modalidad, nivel, technology }) {
  return (
    <article className='job-listing-card' data-modalidad={modalidad} data-nivel={nivel} data-technology={technology}>
    <div>
      <h3>{titulo}</h3>
      <small>{empresa} | {ubicacion}</small>
      <p>{descripcion}</p>
    </div>
    <button type="submit" className="button-apply-job">Aplicar</button>
    </article>
  )
}

export default JobCard;