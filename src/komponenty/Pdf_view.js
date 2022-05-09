import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Pdf_view.css'

const Pdf_view = ({ document }) => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }


  return (
    <div className='pdf_pozadie'>
      <center>
        <div className='pdf_strana'>
          <Document file={document} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page  
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
              </Document>
        </div>
        </center>
    </div>
  );
}

export default Pdf_view;