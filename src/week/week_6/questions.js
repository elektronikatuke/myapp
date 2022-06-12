import Fractions from "../../komponenty/Fractions";
import Otazka5 from '../../images/week_6_img/Otazky/Otazka5.png';
import Otazka8 from '../../images/week_6_img/Otazky/Otazka8.png';

const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: 'Ktorá z týchto možností obsahuje správny vzorec pre Shockleyho rovnicu',
        answerOptions: [
            { answerText:
            <div className='div_friction'>
                <Fractions upper={<div>i<sub>D</sub></div>} lower={<div>I<sub>DSS</sub></div>}/>  
                <p>&asymp; ( 1 -</p>
                <Fractions upper={<div>u<sub>GS</sub></div>} lower={<div>U<sub>p</sub></div>}/>
                <p>) <sup>2</sup></p>
            </div>, 
            isCorrect: true, kluc: 1},
            { answerText: <div>E<sub>D</sub> = - d<sub>Vj</sub> / d<sub>x</sub></div>, isCorrect: false, kluc: 2},
            { answerText: <div>U<sub>BB</sub> = R<sub>B</sub>I<sub>B</sub> + U<sub>BE</sub> + R<sub>E</sub></div> ,isCorrect: false, kluc: 3},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionText: 'V prípade JFET-u s p-kanálom sú nosičmi ?',
        answerOptions: [
            { answerText: 'Diery', isCorrect: true, kluc: 4},
            { answerText: 'Elektróny', isCorrect: false, kluc: 5},
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionText: 'V Metal Schottky Barier FET je PN priechod vytvorený na spoji ____.',
        answerOptions: [
            { answerText: 'Kov-polovodič', isCorrect: true, kluc: 7},
            { answerText: 'Kov-kov', isCorrect: false, kluc: 8},
            { answerText: 'Polovodič-polovodič', isCorrect: false, kluc: 9},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionText: 'Typy poľom riadených tranzistorov sú ?',
        answerOptions: [
            { answerText: 's PN priechodom - Junction FET, Metal Conductor, Metal - Oxide Semikonductor', isCorrect: false, kluc: 10},
            { answerText: 's PN priechodom - Junction FET, Metal - Oxide Conductor, Metal - Oxide Semiconductor', isCorrect: false, kluc: 11},
            { answerText: 's PN priechodom - Junction FET, Metal - Oxide Semiconductor v ochudobnenom móde, Metal - Oxide Semiconductor  v obohatenom móde', isCorrect: true, kluc: 12},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionImage: <img src={Otazka5} alt="Obr 1"></img>,
        questionText: 'Na obrázku je vyobrazená značka ?',
        answerOptions: [
            { answerText: 'JFET s N kanálom', isCorrect: true, kluc: 13},
            { answerText: 'JFET s P kanálom ', isCorrect: false, kluc: 14},
            { answerText: 'MOSFET', isCorrect: false, kluc: 15},
        ],
    },
    {
        id: 6,
        isClicked: false,
        questionText: 'Aký je riadiaci parameter u JFET-ov?',
        answerOptions: [
            { answerText: <div>U<sub>CE</sub></div>, isCorrect: false, kluc: 16},
            { answerText: <div>I<sub>B</sub></div>, isCorrect: true, kluc: 17},
            { answerText: <div>U<sub>GS</sub></div>, isCorrect: false, kluc: 18},
        ],
    },

    {
        id: 7,
        isClicked: false,
        questionText: <div>Označenie I<sub>DSS</sub> znamená ?</div>,
        answerOptions: [
            { answerText: <div>Predstavuje priesečník osi y prevodovej charakteristiky pre U<sub>GS</sub>= 0</div>, isCorrect: true, kluc: 19},
            { answerText: <div>Predstavuje priesečník osi x prevodovej charakteristiky pre U<sub>GS</sub>= 1</div>, isCorrect: true, kluc: 20},
            { answerText: <div>Predstavuje priesečník osi y prevodovej charakteristiky pri max U<sub>GS</sub></div>, isCorrect: false, kluc: 21},
        ],
    },

    {
        id: 8,
        isClicked: false,
        questionImage: <img src={Otazka8} alt="Obr 2"></img>,
        questionText: 'Na obrázku je znázornený ?',
        answerOptions: [
            { answerText: 'MOSFET s obohateným P kanálom', isCorrect: false, kluc: 22},
            { answerText: 'MOSFET s ochudobneným N kanálom', isCorrect: false, kluc: 23},
            { answerText: 'MOSFET s obohateným N kanálom ', isCorrect: true, kluc: 24},
            { answerText: 'MOSFET s ochudobneným P kanálom  ', isCorrect: false, kluc: 25},
        ],
    },

    {
        id: 9,
        isClicked: false,
        questionText: <div>Akú hodnotu nadobúda I<sub>DSS</sub> pri MOSFET-e s obohateným</div>,
        answerOptions: [
            { answerText: 'Vždy vyššiu ako 5 mA', isCorrect: false, kluc: 26},
            { answerText: 'Žiadnu, parameter neexistuje ', isCorrect: true, kluc: 27},
            { answerText: 'Hodnotu približnú 1 mA ', isCorrect: false, kluc: 28},
        ],
    },
];
export default questions;