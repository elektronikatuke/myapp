import React  from 'react';
import Quiz from '../../komponenty/Quiz';
import questions from './questions';


function Quiz3(){

	return(
		<>
			<Quiz questions={questions}/>
		</>
	);
}

export default Quiz3;