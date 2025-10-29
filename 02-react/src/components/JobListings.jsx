import { JobCard } from './JobCard.jsx';


export function JobListings({ jobs }) {
  return (
    // Si la etiqueta esta vacia es un Fragment
    // Se usa map porque el forEach no devuelve nada
    // El key sirve para que React identifique cada elemento de la lista 
    <>
      <h2>Resultados de búsqueda</h2>

      <div className="job-listing">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  )
}