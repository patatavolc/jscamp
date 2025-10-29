import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Pagination } from './components/Pagination.jsx';
import { SearchFormSection } from './components/SeachFormSection.jsx';
import { JobListings } from './components/JobListings.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    console.log('Cambiar a la página:', page);
    setCurrentPage(page);
  }
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App