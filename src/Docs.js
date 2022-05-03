import React from "react";
import FileViewer from "react-file-viewer";
import './App.css'

const onError = e => {
  console.log(e, "error in file-viewer");
};

function Docs() {
  return (
    <div className="pdf_pozadie">
    <div className="Docs_App">
      <h1>Dodatočné materiály</h1>
      
      <details>
        <summary>.docx</summary>
        <FileViewer fileType="pdf" filePath="./PDF/Prednasky_1_diody.pdf" onError={onError} />
      </details>
    

    
    </div>
    </div>
  );
}

export default Docs
