import React from 'react';
import classes from './Step.module.scss';

const PrevButton = props => {
	return (
		<button
			className={classes.prevButton}
			onClick={props.clickedPrev}
		>Prev step
		</button>
	);
};

export default PrevButton;