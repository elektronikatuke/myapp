import otazka from '../../images/week_2_img/Otazky/otazka.png'
const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: 'Čo je dôležité u Zenerovej diódy, aby jej stabilizácia bola teplotne nezávislá?',
        answerOptions: [
            { answerText: 'vnútorný odpor', isCorrect: false, kluc:1},
            { answerText: 'teplotný koeficient', isCorrect: true, kluc:2},
            { answerText: 'Množstvo nečistôt v polovodiči', isCorrect: false, kluc:3},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionText: 'Zenerova dióda pri správnom predpätí',
        answerOptions: [
            { answerText: 'Nikdy sa neprehrieva', isCorrect: false, kluc:4},
            { answerText: 'Pôsobí ako pevný odpor', isCorrect: false, kluc:5},
            { answerText: 'Prechádza ním konštantný prúd ', isCorrect: false, kluc:6},
            { answerText: 'Má na sebe konštantné napätie ', isCorrect: true, kluc:7},
        ],
    },

    {
        id: 3,
        isClicked: false,
        questionText: <div>Parameter U<sub>Z</sub> pri zenerových diódach je označením pre</div>,
        answerOptions: [
            { answerText: 'Počiatočné napätie', isCorrect: false, kluc:8},
            { answerText: 'Stabilizačné napätie ', isCorrect: true, kluc:9},
            { answerText: 'Napätie na dióde  ', isCorrect: false, kluc:10},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionText: <div>Parameter S<sub>Z</sub> pri zenerových diódach je označením pre ?</div>,
        answerOptions: [
            { answerText: 'Teplotný súčiniteľ ', isCorrect: true, kluc:11},
            { answerText: 'Teplotný rozdiel', isCorrect: false, kluc:12},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionImage: <img src={otazka} alt="Obr 1"></img>,
        questionText: 'Čo znázorňuje vyobrazený obvod na obrázku ?',
        answerOptions: [
            { answerText: 'Jednoduchý stabilizátor so Schottkyho diódou', isCorrect: false, kluc:13},
            { answerText: 'Jednoduchý stabilizátor s klasickou diódou', isCorrect: false, kluc:14},
            { answerText: 'Jednoduchý stabilizátor so Zenerovou diódou', isCorrect: false, kluc:15},
        ],
    },
];
export default questions;