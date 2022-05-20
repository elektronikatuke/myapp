import React from 'react';
import './Kontainer_intro.css'
import { Link } from 'react-router-dom';


const Kontainerintro = ({link, text_link, text}) => {

    return(
        <>
            
            <div className="container_intro">
                <Link to={link}> {text_link} </Link>
                <p>{text}</p>
            </div>
            
        </>

    );
}

export default Kontainerintro;