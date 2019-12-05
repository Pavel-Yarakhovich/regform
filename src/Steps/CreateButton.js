import React from 'react';
import classes from './Step.module.scss';

const CreateButton = props => {
	let style;
	props.disabled ? style = classes.disabledButton : style = classes.createButton

		return (
			<button 
				className={style}
				onClick={props.clickedCreate}
				>{props.children}
			</button>
		);
};

export default CreateButton;