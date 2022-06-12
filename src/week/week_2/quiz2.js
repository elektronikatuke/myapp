import React  from 'react';
import Quiz from '../../komponenty/Quiz';
import questions from './questions';


function Quiz2(){

	return(
		<>
			<Quiz questions={questions}/>
		</>
	);
}

export default Quiz2;

