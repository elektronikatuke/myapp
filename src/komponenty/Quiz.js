import React, { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../App.css';


const Quiz = ({questions}) => {

	useEffect(() => {
		Aos.init({ duration: 2000});
	  }, []);

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

export default Quiz;

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