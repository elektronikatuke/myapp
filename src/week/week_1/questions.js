import prva_schema from '../../images/week_1_img/prva_schema.png'
import druha_schema from '../../images/week_1_img/Schema_2.png'
import tretia_schema from  '../../images/week_1_img/Siesta_schema.png'

const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: 'Ktoré dva materiály majú väčšiu šírku zakázaného pásma',
        answerOptions: [
            { answerText: 'Cu, Ga', isCorrect: false, kluc: 1},
            { answerText: 'Al, Si', isCorrect: false, kluc: 2},
            { answerText: 'Ga, Si', isCorrect: true, kluc: 3},
            { answerText: 'Cu, Al', isCorrect: false, kluc: 4},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionImage: <img src={prva_schema} alt="schema1"></img>,
        questionText: 'Ako je určený 2 KZ zo schémy',
        answerOptions: [
            { answerText: 'v = i.R1 - iB.R2 + V0', isCorrect: false, kluc: 5},
            { answerText: 'v = i.R1 - iB.R2 - V0', isCorrect: false, kluc: 6},
            { answerText: 'v = i.R1 + iB.R2 + V0', isCorrect: true, kluc: 7},
            { answerText: 'v = i.R1 + iB.R2 - V0', isCorrect: false, kluc: 8},
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionImage: <img src={prva_schema} alt="schema1"></img>,
        questionText: 'Ak je dióda v druhom stave čiže diódov nepreteká prúd, aká podmienka musí byť splnená?',
        answerOptions: [
            { answerText: 'iD = iB = 0', isCorrect: false, kluc: 9},
            { answerText: 'iD = iB ≥ 0', isCorrect: true, kluc: 10},
            { answerText: 'iD = iB < 0', isCorrect: false, kluc: 11},
            { answerText: 'iD > iB > 0', isCorrect: false, kluc: 12},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionImage: <img src={druha_schema} alt="schema2"></img>,
        questionText: 'Urč vzorec pre druhý Kirchhoffov zákon?',
        answerOptions: [
            { answerText: 'v= -V1 + i1R1 + V2', isCorrect: true, kluc: 13},
            { answerText: 'v= V1 - i1R1 + V2', isCorrect: false, kluc: 14},
            { answerText: 'v= -V1 + i1R1 - V2', isCorrect: false, kluc: 15},
            { answerText: 'v= -V1 - i1R1 + V2', isCorrect: false, kluc: 16},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionImage: <img src={tretia_schema} alt="schema3"></img>,
        questionText: 'Kedy nastane prvý stav? (D1 a D2 sú zatvorené)',
        answerOptions: [
            { answerText: 'v < 5V', isCorrect: false, kluc: 17},
            { answerText: 'v > 5V', isCorrect: false, kluc: 18},
            { answerText: 'v < 4V', isCorrect: false, kluc: 19},
            { answerText: 'v > 4V', isCorrect: true, kluc: 20},
        ],
    },
    {   
        id: 6,
        isClicked: false,
        questionText: 'Čo je charakteristické pre polovodič',
        answerOptions: [
            { answerText: 'Polovodič sa chová ako izolant', isCorrect: false, kluc: 21},
            { answerText: 'Polovodičom prechádza vždy elektrický prúd', isCorrect: false, kluc: 22},
            { answerText: 'Polovodič sa stává elektricky vodivým vtedy, ak ho dostatočne ohrejeme', isCorrect: true, kluc: 23},
        ],
    },
    {   
        id: 7,
        isClicked: false,
        questionText: 'Ktorá vodivosť závisí značne na teplote',
        answerOptions: [
            { answerText: 'Vlastná', isCorrect: true, kluc:24},
            { answerText: 'Nevlastná vodivosť typu P', isCorrect: false, kluc:25},
            { answerText: 'Nevlastná vodivosť typu N', isCorrect: false, kluc:26},
        ],
    },
    
];
export default questions;