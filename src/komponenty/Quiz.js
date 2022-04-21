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
        const nodeList = document.querySelectorAll(".opa");
        for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].setAttribute('class', 'none');   
        }
        const nodeListtrue = document.querySelectorAll(".true");
        for (let i = 0; i < nodeListtrue.length; i++) {
        nodeListtrue[i].setAttribute('class', 'none');   
        }
			
    }

    function correct(answerOption){

        if(answerOption.isCorrect){
            document.getElementById(answerOption.answerText).setAttribute("class", "true");
        }

    }

	const removeItem = (arr, item) => {
		const index = arr.findIndex((element) => element === item);
		if (index !== -1) {
		  arr.splice(index, 1);
		  return arr;
		}
	};

	function submit(){
		if(currentQuestion === questions.length){
			setShowScore(true);
		}
		else{
			alert("Pre vyhodnotenie vyplň prosím všetky otázky :D");
		}
	}

	const AnswerClick = (isCorrect, id, answerText) => {
		
		var nextQuestion = currentQuestion;
		
		if(number.find(element => element === id)){
			removeItem(number, id);

			if(text.find(odpoved => odpoved === answerText)){
				removeItem(text, answerText);
				if (isCorrect && !showScore){
					setScore(score - 1);
				}
				nextQuestion = currentQuestion - 1;
				if (nextQuestion < questions.length) {
					setCurrentQuestion(nextQuestion);
				} else {
					setShowScore(true);
				}
				const doc = document.getElementById(answerText);
				doc.setAttribute('class' , 'none');
				
			}
			
			
		}
		else{
				text.push(answerText);
				
				const doc = document.getElementById(answerText);
				doc.setAttribute('class' , 'opa');
		
				nextQuestion = currentQuestion + 1;

				if (isCorrect && !showScore){
					setScore(score + 1);
				}
				if (nextQuestion <= questions.length) {
					setCurrentQuestion(nextQuestion);
				} /*else {
					setShowScore(true);
				}*/
				
				number.push(id)
				
			

			}
	};
	return (
		<>		
			<div className='question-section'>
				<div className='info-flex'>
					{showScore ? (
						<div className='score-section'>
							Tvoje dosiahnuté body sú {score} z možných {questions.length}
                            {questions.map(questions => (
                                <>
                                {questions.answerOptions.map((answerOption) => (
                                    <>
                                    {correct(answerOption)}
                                    </>
								))}
                                </>
                            ))}
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
                                    <>
									<button id = {answerOption.answerText} onClick={() => {
										AnswerClick(answerOption.isCorrect, questions.id, answerOption.answerText);
									}}>{answerOption.answerText}</button>
                                    
                                    </>
								))}
							</div>
						</div>
					</div>
                ))}
			<div className='restart_button_div'>	
				<button id="restart_1" className='restart_button' onClick={submit}> Vyhodnoť</button>	
			</div>
			
			<div className='restart_button_div'>	
				<button id="restart_2" className='restart_button' onClick={restart}>Restart</button>	
			</div>
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