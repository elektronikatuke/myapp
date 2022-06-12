
const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: <div>Ktorá z odpovedí je správnym označením pre h<sub>22</sub> ?</div>,
        answerOptions: [
            { answerText: 'Vstupná impedancia', isCorrect: false, kluc: 1},
            { answerText: 'Výstupná admitancia', isCorrect: true, kluc: 2},
            { answerText: 'Prúdový zosilňovací činiteľ ', isCorrect: false, kluc: 3},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionText: <div>Čo znamená parameter h<sub>21e</sub>?</div>,
        answerOptions: [
            { answerText: 'jednosmerný prúdový zosilňovací činiteľ', isCorrect: true, kluc: 4},
            { answerText: 'Vstupná impedancia ', isCorrect: false, kluc: 5},
            { answerText: 'Výstupná admitancia', isCorrect: false, kluc: 6},
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionText: 'Kedy dosahuje prúdové zosílenie maximálne hodnoty?',
        answerOptions: [
            { answerText: 'Keď je maximálny zaťažovací odpor Rz', isCorrect: false, kluc: 7},
            { answerText: 'Keď je minimálny zaťažovací odpor Rz', isCorrect: true, kluc: 8},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionText: 'V ktorej možnosti sú správne definované hybridné rovnice ? ',
        answerOptions: [
            { answerText: <div>u<sub>1</sub> = h<sub>12</sub>i<sub>1</sub> + h<sub>11</sub>u<sub>2</sub> / i<sub>2</sub> = h<sub>21</sub>i<sub>1</sub> + h<sub>22</sub>u<sub>2</sub></div>, isCorrect: false, kluc: 10},
            { answerText: <div>u<sub>1</sub> = h<sub>21</sub>i<sub>1</sub> + h<sub>22</sub>u<sub>2</sub> / i<sub>2</sub> = h<sub>11</sub>i<sub>1</sub> + h<sub>12</sub>u<sub>2</sub></div>, isCorrect: false, kluc: 11},
            { answerText: <div>u<sub>1</sub> = h<sub>11</sub>i<sub>1</sub> + h<sub>12</sub>u<sub>2</sub> / i<sub>2</sub> = h<sub>21</sub>i<sub>1</sub> + h<sub>22</sub>u<sub>2</sub></div>, isCorrect: true, kluc: 12},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionText: 'Ktorý model sa používa hlavne pri analýze tranzistorových obvodov v oblasti vysokých frekvencií',
        answerOptions: [
            { answerText: 'π-model ', isCorrect: true, kluc: 13},
            { answerText: 'h-model', isCorrect: false, kluc: 14},
            { answerText: 'u-model', isCorrect: false, kluc: 15},
        ],
    },
    {
        id: 6,
        isClicked: false,
        questionText: 'Ktoré zapojenie tranzistoru sa najčastejšie používa v nízko frekvenčných zosilňovačoch?',
        answerOptions: [
            { answerText: 'Zapojenie so spoločnou bázou ', isCorrect: false, kluc: 16},
            { answerText: 'Zapojenie so spoločným emitorom ', isCorrect: true, kluc: 17},
            { answerText: 'Zapojenie so spoločným kolektorom', isCorrect: false, kluc: 18},
        ],
    },
];
export default questions;