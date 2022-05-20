import React from "react";
import FileViewer from "react-file-viewer";
import './App.css';
import './Docs.css';

const onError = e => {
  console.log(e, "error in file-viewer");
};

function openCity(cityName) {
  var i, content;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}



function Docs() {

  var i, content;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  return (       
    <>
    <div className="pozadie">

{/* Do tejto časti sa pridávajú tlačidlá ktoré budú zobrazovať materiály*/}   

        <div className="tab">
          
          <button className="tablinks" onClick={() => { openCity('Doc')}}>Skušobný dokument</button>
          
        </div>

{/*##############################################*/}

{/* Do tejto časti sa pridávajú dokumenty pomocou FileViewer*/}



        <div id="Doc" className="content">    
              <FileViewer fileType="pdf" filePath="./PDF/Prednasky_1_diody.pdf" onError={onError} />   
        </div> 



{/*##############################################*/}
    </div>
    </>
  );
}
export default Docs;


/*<div className="pdf_pozadie">
    <div className="Docs_App">
      <h1>Dodatočné materiály</h1>
      <div>
        <details>
          <summary>.docx</summary>
          <FileViewer fileType="pdf" filePath="./PDF/Prednasky_1_diody.pdf" onError={onError} />
        </details>

        <details>
          <summary>.docx</summary>
          <FileViewer fileType="pdf" filePath="./PDF/Prednasky_1_diody.pdf" onError={onError} />
        </details>
      </div>
    </div>
</div>*/