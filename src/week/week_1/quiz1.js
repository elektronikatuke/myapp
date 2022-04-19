import React, { useState, useEffect } from 'react';
import prva_schema from '../../images/week_1_img/prva_schema.png'
import druha_schema from '../../images/week_1_img/Schema_2.png'
import tretia_schema from  '../../images/week_1_img/Siesta_schema.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import '../../App.css';

function Quiz1(){

	useEffect(() => {
		Aos.init({ duration: 2000});
	  }, []);

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

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);    
	const [number] = useState([])
	const [text, setText] = useState([])
    
    function restart(){
        setScore(0);
		setShowScore(false);
		setCurrentQuestion(0);	
		text.length = 0;
		number.length = 0;
			
    }

	const handleAnswerOptionClick = (isCorrect, id, answerText) => {
		
       

		if(number.find(element => element === id)){
			console.log("AAAAA");
			console.log(id);
		}
		else{

			if(text.find(odpoved => odpoved === answerText)){
				console.log("AAAAA");
				console.log(answerText);
			}
			else{
			text.push(answerText);
			console.log(text);
			}

			

			const nextQuestion = currentQuestion + 1;

			if (isCorrect && !showScore){
				setScore(score + 1);
			}

			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
			console.log(nextQuestion)
			
			number.push(id)
			console.log(number);
		}
	};
	return (
		<>		
			<div className='question-section'>
				<div className='info-flex'>
					{showScore ? (
						<div className='score-section'>
							Tvoje dosiahnuté body sú {score} z možných {questions.length}
						</div>
					) : (
						<div className='question-count'>
							<span>Zodpovedané otázky {currentQuestion}</span>/{questions.length}
						</div>
						)}
				</div>
                {questions.map(questions => (
					<div className='quiz-flex'>
						<div data-aos="fade" className="flex_left">
							<div className='questionImage'>{questions.questionImage}</div>
							<div className='questionText'>{questions.questionText}</div>
							<div className='answer-section'>
								{questions.answerOptions.map((answerOption) => (
									<button id = {answerOption.answerText} onClick={() => {
										handleAnswerOptionClick(answerOption.isCorrect, questions.id, answerOption.answerText);
									}}>{answerOption.answerText}</button>
								))}
							</div>
						</div>
					</div>
                ))}
			<div>	<button onClick={restart}>Restart</button>	</div>
			</div>
        </>
	);
}

export default Quiz1;

/* <div>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
*/