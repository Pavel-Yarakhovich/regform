import React from 'react';
import classes from '../Step.module.scss';
import NextButton from '../NextButton';
import PrevButton from '../PrevButton';

const CompanyStep = props => {
	return (
		<form className={classes.form}>
			<input 
				className={classes.input} 
				type="text"
				name="companyName" 
				placeholder="Company name (optional)"
				onChange={props.companyNameInput} 
				value={props.companyName}
			/>
			<div className={classes.buttons}>
				<PrevButton clickedPrev={props.clickedPrev} />
				<NextButton clickedNext={props.clickedNext} >
					{props.companyName.length > 0 ? 'Next step' : 'Skip this step'}
				</NextButton>
			</div>
		</form>
	);
};

export default CompanyStep;