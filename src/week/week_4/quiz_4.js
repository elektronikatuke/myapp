import React  from 'react';
import Quiz from '../../komponenty/Quiz';
import questions from './questions';


function Quiz4(){

	return(
		<>
			<Quiz questions={questions}/>
		</>
	);
}

export default Quiz4;