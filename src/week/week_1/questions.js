import prva_schema from '../../images/week_1_img/prva_schema.png'
import druha_schema from '../../images/week_1_img/Schema_2.png'
import tretia_schema from  '../../images/week_1_img/Siesta_schema.png'

const questions = [
    {   
        id: 1,
        isClicked: false,
        questionImage: <img src={prva_schema} alt="schema1"></img>,
        questionText: 'Ako je určený 2 KZ zo schémy',
        answerOptions: [
            { answerText: 'v = i.R1 - iB.R2 + V0', isCorrect: false},
            { answerText: 'v = i.R1 - iB.R2 - V0', isCorrect: false},
            { answerText: 'v = i.R1 + iB.R2 + V0', isCorrect: true},
            { answerText: 'v = i.R1 + iB.R2 - V0', isCorrect: false},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionImage: <img src={prva_schema} alt="schema1"></img>,
        questionText: 'Ak je dióda v druhom stave čiže diódov nepreteká prúd, aká podmienka musí byť splnená?',
        answerOptions: [
            { answerText: 'iD = iB = 0', isCorrect: false },
            { answerText: 'iD = iB ≥ 0', isCorrect: true },
            { answerText: 'iD = iB < 0', isCorrect: false },
            { answerText: 'iD > iB > 0', isCorrect: false },
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionImage: <img src={druha_schema} alt="schema2"></img>,
        questionText: 'Urč vzorec pre druhý Kirchhoffov zákon?',
        answerOptions: [
            { answerText: 'v= -V1 + i1R1 + V2', isCorrect: true },
            { answerText: 'v= V1 - i1R1 + V2', isCorrect: false },
            { answerText: 'v= -V1 + i1R1 - V2', isCorrect: false },
            { answerText: 'v= -V1 - i1R1 + V2', isCorrect: false },
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionImage: <img src={tretia_schema} alt="schema3"></img>,
        questionText: 'Kedy nastane prvý stav? (D1 a D2 sú zatvorené)',
        answerOptions: [
            { answerText: 'v < 5V', isCorrect: false },
            { answerText: 'v > 5V', isCorrect: false },
            { answerText: 'v < 4V', isCorrect: false },
            { answerText: 'v > 4V', isCorrect: true },
        ],
    },
];
export default questions;