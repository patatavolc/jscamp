import { useState } from "react";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { SearchFormSection } from "./components/SeachFormSection.jsx";
import { JobListings } from "./components/JobListings.jsx";
import jobsData from "./data.json";

const RESULTS_PER_PAGE = 4;

// TODO: los eventos onFocus(cuando haga foco mostrar la info auxiliar) y onBlur(cuando pierda el foco ocultar la info auxiliar) en los inputs del SearchFormSection

// TODO: Mejorar el codigo

function App() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" ||
        job.data.technology.toLowerCase() ===
          filters.technology.toLowerCase()) &&
      (filters.location === "" ||
        job.data.modalidad.toLowerCase() === filters.location.toLowerCase()) &&
      (filters.experienceLevel === "" ||
        job.data.nivel.toLowerCase() === filters.experienceLevel.toLowerCase())
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, // Pagina 0 -> 0-4, Pagina 1 -> 5-9
    currentPage * RESULTS_PER_PAGE // Pagina 0 -> 5,   Pagina 1 -> 10
  );

  const handlePageChange = (page) => {
    console.log("Cambiar a la página:", page);
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setCurrentPage(1);
    setFilters(filters);
  };

  const handleTextFilter = (newTextFilter) => {
    setTextToFilter(newTextFilter);
    // Resetear a la primera página al cambiar el filtro de texto
    setCurrentPage(1);
  };
  return (
    <>
      <Header />

      <main>
        <SearchFormSection
          onSearch={handleSearch}
          onTextFilter={handleTextFilter}
        />

        <section>
          <JobListings jobs={pagedResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
