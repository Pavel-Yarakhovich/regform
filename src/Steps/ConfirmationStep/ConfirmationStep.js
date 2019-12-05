import React from 'react';
import classes from '../Step.module.scss';
import moment from 'moment-timezone';
import CreateButton from '../CreateButton';

const ConfirmationStep = props => {

	let timezones = moment.tz.names();
	let options = timezones.map((timezone, index) => {
		return <option key={index}>{timezone}</option>
	})

	return (
		<form className={classes.form}>
			<input
				className={classes.input}
				type="email"
				name="email"
				placeholder="E-mail"
				value={props.email}
				onChange={props.changeEmail}
			/>
			<input
				className={classes.input}
				type="text"
				name="firstName"
				placeholder="First name"
				value={props.firstName}
				onChange={props.firstNameChanged}
			/>
			<input
				className={classes.input}
				type="text"
				name="lastName"
				placeholder="Last name"
				value={props.lastName}
				onChange={props.lastNameChanged}
			/>
			<select
				name="gender"
				className={classes.input}
				type="select"
				placeholder="Gender"
				onChange={props.genderSelected}
				defaultValue={props.gender}
			>
				<option value="gender" >Gender</option>
				<option value="male" >Male</option>
				<option value="female" >Female</option>
			</select>
			<input
				className={classes.input}
				type="text"
				name="companyName"
				placeholder="Company name (optional)"
				value={props.companyName}
				onChange={props.companyNameChange}
			/>
			<select
				name="timezone"
				className={classes.input}
				onChange={props.timezoneSelected}
				defaultValue={props.timezone} >
				{options}
			</select>
			<CreateButton
				clickedCreate={props.clickedCreate}
				disabled={	!(props.email.match(/^[^@]+@[^@.]+\.[^@]+$/)
							&& props.firstName
							&& props.lastName
							&& props.gender !== 'gender')}
			>Create your account
			</CreateButton>
		</form>
	);
};

export default ConfirmationStep;