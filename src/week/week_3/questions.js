import Otazka3_1 from "../../images/week_3_img/Otázky/Otazka3_1.png"
import Otazka3_2 from "../../images/week_3_img/Otázky/Otazka3_2.png"
import Otazka3_3 from "../../images/week_3_img/Otázky/Otazka3_3.png"
import Otazka6 from "../../images/week_3_img/Otázky/Otazka6.png"

const questions = [
    {   
        id: 1,
        isClicked: false,
        questionText: 'Prechádza tranzistorom prúd, ak priložíme napätie medzi kolektor a emitor?',
        answerOptions: [
            { answerText: 'Áno, ak je kladný pól zdroja pripojený na kolektor', isCorrect: false, kluc: 1},
            { answerText: 'Áno, ak je záporný pól zdroja pripojený na kolektor.', isCorrect: false, kluc: 2},
            { answerText: 'Nie, ani v jednom prípade neprechádza tranzistorom prúd.', isCorrect: true, kluc: 3},
        ],
    },
    {
        id: 2,
        isClicked: false,
        questionText: <div>Ktorá z uvedených rovníc vyjadruje vzťah pre saturáciu podľa polarizácie P-N prechodu tranzistora NPN (U<sub>P</sub> je prahové napätie príslušného P-N priechodu)</div>,
        answerOptions: [
            { answerText: <div>U<sub>BE</sub> &gt; U<sub>P</sub></div>, isCorrect: true, kluc: 4},
            { answerText: <div>U<sub>BE</sub> &lt; U<sub>P</sub></div>, isCorrect: false, kluc: 5},
            { answerText: <div>U<sub>BE</sub> &gt; 0</div>, isCorrect: false, kluc: 6},
        ],
    },
    {
        id: 3,
        isClicked: false,
        questionText: 'Kontrolná otázka: Pri ktorom zo základných zapojení neriadime tranzistor signálom, privádzaným na bázu',
        answerOptions: [
            { answerText: <img src={Otazka3_1} alt="schema1" />, isCorrect: false, kluc: 7},
            { answerText: <img src={Otazka3_2} alt="schema2"></img>, isCorrect: true, kluc: 8},
            { answerText: <img src={Otazka3_3} alt="schema3"></img>, isCorrect: false, kluc: 9},
        ],
    },
    {
        id: 4,
        isClicked: false,
        questionText: 'Ktorá matematická rovnica je výsledkom tvrdenia: Napätie kolektor-emitor je dané súčtom napätia kolektor-báza a napätia báza-emitor.',
        answerOptions: [
            { answerText: <div>U<sub>CE</sub> = U<sub>CB</sub> + U<sub>BE</sub></div>, isCorrect: true, kluc: 10},
            { answerText: <div>U<sub>BE</sub> = U<sub>CB</sub> + U<sub>CE</sub></div>, isCorrect: false, kluc: 11},
            { answerText: <div>U<sub>CB</sub> = U<sub>CE</sub> + U<sub>BE</sub></div>, isCorrect: false, kluc: 12},
        ],
    },
    {
        id: 5,
        isClicked: false,
        questionText: <div>Ako je definované označenie I<sub>CBO</sub></div>,
        answerOptions: [
            { answerText: 'zbytkový prúd záverne polarizovaného prechodu C-B nezávislý od prúdu bázy', isCorrect: true, kluc: 13},
            { answerText: 'zbytkový prúd polarizovaného prechodu C-B nezávislý od prúdu emitora ', isCorrect: false, kluc: 14},
            { answerText: 'zbytkový prúd záverne polarizovaného prechodu C-B nezávislý od prúdu kolektora', isCorrect: false, kluc: 15},
        ],
    },
    {
        id: 6,
        isClicked: false,
        questionImage: <img src={Otazka6} alt="schema3"></img>,
        questionText: 'Na obrázku je tranzistor v zapojení',
        answerOptions: [
            { answerText: 'SE', isCorrect: true, kluc: 16},
            { answerText: 'SC', isCorrect: false, kluc: 17},
            { answerText: 'SB', isCorrect: false, kluc: 18},
        ],
    },

    {
        id: 7,
        isClicked: false,
        questionText: 'Ktorý prúd v tranzistore má najväčšiu absolútnu hodnotu?',
        answerOptions: [
            { answerText: 'Prúd kolektorov ', isCorrect: false, kluc: 19},
            { answerText: 'Prúd emitorov ', isCorrect: true, kluc: 20},
            { answerText: 'Prúd báz', isCorrect: false, kluc: 21},
        ],
    },

    {
        id: 8,
        isClicked: false,
        questionText: <div>Čo znamená, ak hovoríme o zápornom napätí kolektor-emitor (napr.U<sub>CE</sub> = -20 V) ?</div>,
        answerOptions: [
            { answerText: 'Ide o napätie medzi kolektorom a emitorom ľubovoľnej polarity', isCorrect: false, kluc: 22},
            { answerText: 'Ide o napätie medzi kolektorom a emitorom, pričom je kolektor kladný oproti emitoru.', isCorrect: false, kluc: 23},
            { answerText: 'Jedná sa o napätie medzi kolektorom a emitorom, pričom je kolektor záporný oproti emitoru', isCorrect: true, kluc: 24},
        ],
    },
];
export default questions;