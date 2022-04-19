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
            const doc = document.getElementById(answerText);
            doc.setAttribute('class' , 'opa');
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
        questions.forEach(object =>{
            if(object.answerOptions.isCorrect === "true"){
                console.log("True", questions.id);
            }
        });
        
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
										handleAnswerOptionClick(answerOption.isCorrect, questions.id, answerOption.answerText);
									}}>{answerOption.answerText}</button>
                                    
                                    </>
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