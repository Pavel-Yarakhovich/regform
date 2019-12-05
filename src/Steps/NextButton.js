import React from 'react';
import classes from './Step.module.scss';

const NextButton = props => {
	let style;
	props.disabled ? style = classes.disabledButton : style = classes.nextButton

		return (
			<button 
				className={style}
				onClick={props.clickedNext}
				>{props.children}
			</button>
		);
};

export default NextButton;