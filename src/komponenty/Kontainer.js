import React from 'react';
import './Kontainer.css'
import { Link } from 'react-router-dom';


const Kontainer = ({link, text_link, text}) => {

    return(
        <>
        <div className="container">
                <Link to={link}>{text_link}</Link>
                <p>{text}</p>
        </div>
        </>

    );
}

export default Kontainer;