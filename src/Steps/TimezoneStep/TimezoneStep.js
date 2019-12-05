import React from 'react';
import classes from '../Step.module.scss';
import moment from 'moment-timezone';
import NextButton from '../NextButton';
import PrevButton from '../PrevButton';

const TimezoneStep = props => {

	let timezones = moment.tz.names();
	let options = timezones.map((timezone, index) => {
		return <option key={index}>{timezone}</option>
	})

	return (
		<form className={classes.form}>
			<select 
				name="timezone"
				className={classes.input} 
				onChange={props.timezoneSelected}
				defaultValue={moment.tz.guess()} >
				{/* <option selected>{moment.tz.guess()}</option> */}
				{options}
			</select>
			<div className={classes.buttons}>
				<PrevButton clickedPrev={props.clickedPrev} />
				<NextButton 
					clickedNext={props.clickedNext}
					disabled={!props.timezone}
				>Next step
				</NextButton>
			</div>
		</form>
	);
};

export default TimezoneStep;