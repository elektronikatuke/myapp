import React from 'react';
import './Fraction.css'


const Fractions = ({upper, lower}) => {

    return(
        <>
        <div className="qtn">
            <div className="frac">
                <div className="numer">{upper}</div>
                <div className="denom">{lower}</div>
            </div>
        </div>
        </>

    );
}

export default Fractions;