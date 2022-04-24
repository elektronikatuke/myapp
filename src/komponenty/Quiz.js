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

			document.getElementById('9' + id).classList.toggle('collapsed');	

			if(text.find(odpoved => odpoved === answerText)){
				removeItem(number, id);
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

			document.getElementById('9' + id).classList.toggle('collapsed');


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
					<>
					<div>
						<div className="flex_left">
							<div className='questionImage'>{questions.questionImage}</div>
							<div className='questionText'>{questions.id}: {questions.questionText}</div>
							<div className='answer-section'>
								{questions.answerOptions.map((answerOption) => (
                                    <>
									<button id = {answerOption.answerText} onClick={() => {
										AnswerClick(answerOption.isCorrect, questions.id, answerOption.answerText);
									}}>{answerOption.answerText}</button>
                                    
                                    </>
								))}
							</div>
							
							<div className='next' id={"9" + questions.id}>	
								<svg width="58" height="89" viewBox="0 0 58 89" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16 49V17H29H42V49H56L29 87.5L2 49H16Z" fill="#00B9E1" stroke="black"/>
									<path d="M0.553711 11V10.1387L1.66797 9.94727V2.10645L0.553711 1.91504V1.04688H1.66797H5.12695C5.83789 1.04688 6.44401 1.1722 6.94531 1.42285C7.44661 1.66895 7.82943 2.0153 8.09375 2.46191C8.35807 2.90853 8.49023 3.43034 8.49023 4.02734C8.49023 4.62891 8.35807 5.15299 8.09375 5.59961C7.82943 6.04622 7.44661 6.39258 6.94531 6.63867C6.44401 6.88477 5.83789 7.00781 5.12695 7.00781H3.01465V9.94727L4.12891 10.1387V11H0.553711ZM3.01465 5.95508H5.12695C5.80143 5.95508 6.30501 5.77507 6.6377 5.41504C6.97493 5.05046 7.14355 4.59245 7.14355 4.04102C7.14355 3.48958 6.97493 3.0293 6.6377 2.66016C6.30501 2.29102 5.80143 2.10645 5.12695 2.10645H3.01465V5.95508ZM12.585 11.1436C11.9014 11.1436 11.3112 10.984 10.8145 10.665C10.3223 10.3415 9.94173 9.89714 9.67285 9.33203C9.40397 8.76237 9.26953 8.11296 9.26953 7.38379V7.2334C9.26953 6.50423 9.40397 5.8571 9.67285 5.29199C9.94173 4.72233 10.3223 4.27572 10.8145 3.95215C11.3112 3.62858 11.8968 3.4668 12.5713 3.4668C13.2549 3.4668 13.8428 3.62858 14.335 3.95215C14.8317 4.27572 15.2145 4.72005 15.4834 5.28516C15.7523 5.85026 15.8867 6.49967 15.8867 7.2334V7.38379C15.8867 8.11751 15.7523 8.76921 15.4834 9.33887C15.2145 9.90397 14.834 10.346 14.3418 10.665C13.8496 10.984 13.264 11.1436 12.585 11.1436ZM12.585 10.0908C13.0133 10.0908 13.3711 9.97461 13.6582 9.74219C13.9499 9.50521 14.1686 9.18392 14.3145 8.77832C14.4648 8.36816 14.54 7.90332 14.54 7.38379V7.2334C14.54 6.71387 14.4648 6.2513 14.3145 5.8457C14.1686 5.43555 13.9499 5.11426 13.6582 4.88184C13.3665 4.64486 13.0042 4.52637 12.5713 4.52637C12.1429 4.52637 11.7829 4.64486 11.4912 4.88184C11.1995 5.11426 10.9808 5.43555 10.835 5.8457C10.6891 6.2513 10.6162 6.71387 10.6162 7.2334V7.38379C10.6162 7.90332 10.6891 8.36816 10.835 8.77832C10.9808 9.18392 11.1995 9.50521 11.4912 9.74219C11.7874 9.97461 12.152 10.0908 12.585 10.0908ZM16.7207 11V10.1387L17.835 9.94727V1.39551L16.7207 1.2041V0.335938H19.1816V9.94727L20.2959 10.1387V11H16.7207ZM21.4717 11V10.1387L22.2236 10.0498L22.2031 10.0225L20.0635 7.26074L20.7607 6.1875L23.748 9.97461L24.8145 10.1387V11H21.4717ZM19.0859 8.86035L18.5869 7.80078L21.7998 4.60156L21.834 4.56055L21.041 4.47168V3.60352H24.2266V4.47168L23.2764 4.64941L19.0859 8.86035ZM25.5801 11V10.1387L26.6943 9.94727V4.66309L25.5801 4.47168V3.60352H27.8975L28.0137 4.54688L28.0273 4.67676C28.237 4.2985 28.4945 4.00228 28.7998 3.78809C29.1097 3.57389 29.4629 3.4668 29.8594 3.4668C30.0007 3.4668 30.1442 3.48047 30.29 3.50781C30.4404 3.5306 30.5475 3.55339 30.6113 3.57617L30.4336 4.82715L29.4971 4.77246C29.1416 4.74967 28.8431 4.83171 28.6016 5.01855C28.36 5.20085 28.1732 5.44694 28.041 5.75684V9.94727L29.1553 10.1387V11H25.5801ZM33.8242 11.1436C33.054 11.1436 32.4684 10.9567 32.0674 10.583C31.6663 10.2048 31.4658 9.67383 31.4658 8.99023C31.4658 8.52083 31.5934 8.11296 31.8486 7.7666C32.1084 7.41569 32.4821 7.14453 32.9697 6.95312C33.4574 6.75716 34.0407 6.65918 34.7197 6.65918H36.0391V5.93457C36.0391 5.48796 35.9023 5.1416 35.6289 4.89551C35.36 4.64941 34.9795 4.52637 34.4873 4.52637C34.1774 4.52637 33.9085 4.5651 33.6807 4.64258C33.4528 4.71549 33.2454 4.81803 33.0586 4.9502L32.915 5.98242H31.876V4.28711C32.2087 4.01823 32.596 3.81543 33.0381 3.67871C33.4801 3.53743 33.9701 3.4668 34.5078 3.4668C35.4056 3.4668 36.1097 3.68099 36.6201 4.10938C37.1305 4.53776 37.3857 5.15072 37.3857 5.94824V9.50977C37.3857 9.60547 37.3857 9.69889 37.3857 9.79004C37.3903 9.88118 37.3971 9.97233 37.4062 10.0635L38.124 10.1387V11H36.1895C36.1484 10.7995 36.1165 10.6195 36.0938 10.46C36.071 10.3005 36.055 10.141 36.0459 9.98145C35.7861 10.3141 35.4603 10.5921 35.0684 10.8154C34.681 11.0342 34.2663 11.1436 33.8242 11.1436ZM34.0225 10.0156C34.4691 10.0156 34.877 9.90853 35.2461 9.69434C35.6152 9.48014 35.8796 9.22266 36.0391 8.92188V7.58203H34.6719C34.0521 7.58203 33.5872 7.73014 33.2773 8.02637C32.9674 8.32259 32.8125 8.65299 32.8125 9.01758C32.8125 9.34115 32.9128 9.58952 33.1133 9.7627C33.3138 9.93132 33.6169 10.0156 34.0225 10.0156ZM42.5127 11.1436C41.8428 11.1436 41.2594 10.9886 40.7627 10.6787C40.266 10.3643 39.8809 9.92904 39.6074 9.37305C39.334 8.81706 39.1973 8.17448 39.1973 7.44531V7.1582C39.1973 6.45638 39.3294 5.82747 39.5938 5.27148C39.8581 4.71549 40.2386 4.27572 40.7354 3.95215C41.2321 3.62858 41.8245 3.4668 42.5127 3.4668C43.1097 3.4668 43.6315 3.56478 44.0781 3.76074C44.5293 3.95671 44.9076 4.22559 45.2129 4.56738L45.2471 6.34473H44.1943L43.9619 5.05273C43.807 4.89323 43.6133 4.76562 43.3809 4.66992C43.1484 4.57422 42.875 4.52637 42.5605 4.52637C42.1595 4.52637 41.8063 4.64486 41.501 4.88184C41.2002 5.11882 40.9655 5.43555 40.7969 5.83203C40.6283 6.22852 40.5439 6.67057 40.5439 7.1582V7.44531C40.5439 7.98307 40.6214 8.4502 40.7764 8.84668C40.9359 9.24316 41.1615 9.55078 41.4531 9.76953C41.7493 9.98372 42.1003 10.0908 42.5059 10.0908C42.9616 10.0908 43.3398 9.96549 43.6406 9.71484C43.9414 9.46419 44.126 9.12012 44.1943 8.68262H45.4043L45.418 8.72363C45.3952 9.14746 45.2699 9.54395 45.042 9.91309C44.8141 10.2822 44.4883 10.5807 44.0645 10.8086C43.6452 11.0319 43.1279 11.1436 42.5127 11.1436ZM44.5635 0.335938V0.513672L42.8818 2.13379H42.0684L40.373 0.506836V0.335938H41.4736L42.4785 1.34766L43.4697 0.335938H44.5635ZM49.7246 11.1436C48.9225 11.1436 48.2959 10.8861 47.8447 10.3711C47.3936 9.85612 47.168 9.05404 47.168 7.96484V4.66309L46.3203 4.47168V3.60352H47.168H48.5146V7.97852C48.5146 8.76693 48.6309 9.30924 48.8633 9.60547C49.0957 9.90169 49.458 10.0498 49.9502 10.0498C50.4287 10.0498 50.8229 9.9541 51.1328 9.7627C51.4473 9.56673 51.6842 9.29102 51.8438 8.93555V4.66309L50.8525 4.47168V3.60352H51.8438H53.1904V9.94727L54.0381 10.1387V11H51.9805L51.8916 9.90625C51.6592 10.3027 51.3584 10.6081 50.9893 10.8223C50.6247 11.0365 50.2031 11.1436 49.7246 11.1436ZM54.8652 13.9873C54.7194 13.9873 54.5872 13.9759 54.4688 13.9531C54.3503 13.9349 54.2272 13.9053 54.0996 13.8643L54.1885 12.8389C54.2523 12.8617 54.3594 12.8822 54.5098 12.9004C54.6647 12.9186 54.7832 12.9277 54.8652 12.9277C55.1341 12.9277 55.346 12.8092 55.501 12.5723C55.6605 12.3398 55.7402 12.0186 55.7402 11.6084V4.66309L54.626 4.47168V3.60352H57.0869V11.6084C57.0869 12.3695 56.891 12.9551 56.499 13.3652C56.1071 13.7799 55.5625 13.9873 54.8652 13.9873ZM55.6719 1.77832V0.335938H57.0869V1.77832H55.6719Z" fill="black"/>
								</svg>
							</div>
						</div>
						
					</div>
					</>
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