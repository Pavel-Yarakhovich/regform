import React from 'react';
import classes from '../Step.module.scss';
import NextButton from '../NextButton';
import PrevButton from '../PrevButton';

const NameStep = props => {
	return (
		<form className={classes.form}>
			<input 
				className={classes.input} 
				type="text" 
				name="firstName"
				onChange={props.firstNameChanged}
				placeholder="First name" 
				value={props.firstName}
			/>
			<input 
				className={classes.input} 
				type="text"
				name="lastName"
				onChange={props.lastNameChanged} 
				placeholder="Last name" 
				value={props.lastName}
			/>
			<select name="gender" className={classes.input} onChange={props.genderSelected} >
				<option value="gender">Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<div className={classes.buttons}>
				<PrevButton clickedPrev={props.clickedPrev} />
				<NextButton 
					disabled={	!(props.firstName 
								&& props.lastName 
								&& props.gender 
								&& props.gender !== 'gender')}
					clickedNext={props.clickedNext} 
				>Next step
				</NextButton>
			</div>
		</form>
	);
};

export default NameStep;