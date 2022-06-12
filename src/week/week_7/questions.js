import Fractions from "../../komponenty/Fractions";


const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: 'Ideálny operačný zosilňovač má výstupný odpor:',
        answerOptions: [
            { answerText: '1', isCorrect: false, kluc: 1},
            { answerText: '∞', isCorrect: false, kluc: 2},
            { answerText: '0',isCorrect: true, kluc: 3},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionText: 'Operačný zosilňovač sa skladá z troch základných častí. Ktorá možnosť obsahuje správne časti',
        answerOptions: [
            { answerText: 'Vstupný diferenčný stupeň (zosilňovač), stupeň napäťového zosilnenia, výstupný výkonný stupeň (zosilňovač).', isCorrect: true, kluc: 4},
            { answerText: 'Súčtový zosilňovací stupeň (zosilňovač), stupeň prúdového zosilnenia, výstupný výkonný stupeň (zosilňovač).', isCorrect: false, kluc: 5},
            { answerText: 'Medzifrekvenčný zosilňovač, stupeň napäťového zosilnenia, vstupný výkonný stupeň (zosilňovač).', isCorrect: false, kluc: 6},
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionText: '3.	Ak privádzame vstupný el. signál na invertujúci vstup OZ, dôjde k posunutiu fázy zosilneného výstupného el. signálu o koľko stupňov ?',
        answerOptions: [
            { answerText: '90°', isCorrect: false, kluc: 7},
            { answerText: '180°', isCorrect: true, kluc: 8},
            { answerText: '270°', isCorrect: false, kluc: 9},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionText: <div>Čo vyjadruje označenie A<sub>Ud</sub> pri OZ ?</div>,
        answerOptions: [
            { answerText: 'Súhlasné napäťové zosilnenie', isCorrect: false, kluc: 10},
            { answerText: 'Činiteľ potlačenia súhlasného napätia', isCorrect: false, kluc: 11},
            { answerText: 'Diferenčné napäťové zosilnenie', isCorrect: true, kluc: 12},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionText: <div className="div_friction"><p>Rovnica</p><Fractions upper={<div>A<sub>Ud</sub></div>} lower={<div>A<sub>Us</sub></div>}/><p></p>je definíciou ktorého statického parametra OZ? </div>,
        answerOptions: [
            { answerText: 'Činiteľ potlačenia súhlasného napätia CMR', isCorrect: true, kluc: 13},
            { answerText: 'Vstupná napäťová nesymetria', isCorrect: false, kluc: 14},
            { answerText: 'Vstupný kľudový prúd', isCorrect: false, kluc: 15},
        ],
    },
    {
        id: 6,
        isClicked: false,
        questionText: <div>Označenie f<sub>p</sub> je definované ako ?</div>,
        answerOptions: [
            { answerText: 'Doba zotavenia', isCorrect: false, kluc: 16},
            { answerText: 'Medzná frekvencia', isCorrect: true, kluc: 17},
            { answerText: 'Rýchlosť prebehu', isCorrect: false, kluc: 18},
        ],
    },

];
export default questions;