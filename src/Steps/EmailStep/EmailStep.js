import React from 'react';
import classes from '../Step.module.scss';
import axios from 'axios';
import NextButton from '../NextButton';

class EmailStep extends React.Component {

	checkEmail = () => {
		axios.post('https://frontapi.vinchain.io/auth/api/check-email/', {
			email: this.props.email
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidUpdate() {
		this.checkEmail();
	}

	render() {
		return (
			<form
				className={classes.form}
			>
				<input
					className={classes.input}
					type="email"
					name="email"
					placeholder="E-mail"
					value={this.props.email}
					onChange={this.props.inputEmail} />
				<p className={classes.text}>We'll email a link to create a password for your new account</p>
				<NextButton
					clickedNext={this.props.clickedNext}
					disabled={!this.props.email.match(/^[^@]+@[^@.]+\.[^@]+$/)}
				>Next step
				</NextButton>
			</form>
		);
	}
};

export default EmailStep;