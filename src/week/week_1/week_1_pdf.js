import React from 'react'
import Pdf_view from '../../komponenty/Pdf_view';
import { Link } from 'react-router-dom';


function Week1pdf(){

  return <Pdf_view document={<Link to="/Prednasky_1_diody.pdf"></Link>}/>
}

export default Week1pdf; 