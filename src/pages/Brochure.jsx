import React, { useState } from 'react';
import info from '../assets/InfoFest 2023 Brochure.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const Brochure = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pagesToShow = 2; // Adjust for dynamic pagination later

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToNextPage = () => {
    if (pageNumber + pagesToShow - 1 < numPages) {
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPage => prevPage - 1);
    }
  };

  return (
    <div className='flex flex-col items-center mt-20'>
      <Document file={info} onLoadSuccess={onDocumentLoadSuccess} renderMode='canvas'>
        {Array.from(
          { length: Math.min(pagesToShow, numPages - pageNumber + 1) },
          (_, index) => (
            <Page 
            key={pageNumber + index} 
            pageNumber={pageNumber + index}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            customTextRenderer={false} />
          )
        )}
      </Document>
      
      {numPages && (
        <div className='mt-4'>
          <p className='text-white'>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
      
      <div className='flex space-x-4 mt-4'>
        <button
          className={`text-white ${pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={goToPrevPage}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        
        <button
          className={`text-white ${pageNumber + pagesToShow - 1 >= numPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={goToNextPage}
          disabled={pageNumber + pagesToShow - 1 >= numPages}
        >
          Next
        </button>
      </div>
      <Link className='text-blue-600' target='_blank' to={info}>brochure</Link>
    </div>
  );
};

export default Brochure;
