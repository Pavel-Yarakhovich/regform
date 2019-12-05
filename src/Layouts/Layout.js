import React from 'react';
import classes from './Layout.module.scss';
import { EmailStep, CompanyStep, TimezoneStep, ConfirmationStep } from '../Steps/index';
import NameStep from '../Steps/NameStep/NameStep';
import { connect } from 'react-redux';

class Layouts extends React.Component {
	state = {
		step: 1,
		stepTitles: [
			`Create your VINchain account.
			Easy to use anytime, anywhere for everyone`,
			'Lets introduce ourselves. Your name will be displayed in all reports, documents, etc.',
			'Tracking company venichles? (optional)',
			'Set your time zone',
			'Check your data'
		],
		firstName: '',
		lastName: '',
		gender:'',
		companyName: '',
		email: '',
		timezone: '',
		accountCreated: false
	};

	inputChangedHandler = event =>
		this.setState({ [event.target.name] : event.target.value })

	nameChangedHandler = event =>
		event.target.value.match(/[A-Za-z]{1,}/)
		? this.setState({ [event.target.name] : event.target.value })
		: this.setState({ [event.target.name] : '' })

	createClickedHandler = event => {
		event.preventDefault();
		this.setState({ accountCreated: true });
		this.props.onCreateAccount();
	}

	prevClickedHandler = event => {
		event.preventDefault();
		this.setState({ step: this.state.step - 1 })
	}

	nextClickedHandler = event => {
		event.preventDefault();
		if (this.state.step < 5) {
			this.setState({ step: this.state.step + 1 });
		}
	}

	render() {
		let currentStep;
		switch (this.state.step) {
			case 2: currentStep = <NameStep 
										clickedNext={this.nextClickedHandler}
										clickedPrev ={this.prevClickedHandler}
										firstNameChanged={this.nameChangedHandler}
										lastNameChanged={this.nameChangedHandler}
										genderSelected={this.inputChangedHandler}
										firstName={this.state.firstName}
										lastName={this.state.lastName}
										gender={this.state.gender}/>;
			break;
			case 3: currentStep = <CompanyStep 
										clickedNext={this.nextClickedHandler}
										clickedPrev ={this.prevClickedHandler}
										companyName={this.state.companyName}
										companyNameInput={this.inputChangedHandler} />;
			break;
			case 4: currentStep = <TimezoneStep 
										clickedNext={this.nextClickedHandler}
										clickedPrev ={this.prevClickedHandler}
										timezoneSelected={this.inputChangedHandler}
										timezone={this.state.timezone} />;
			break;
			case 5: currentStep = <ConfirmationStep 
										clickedNext={this.nextClickedHandler}
										clickedPrev ={this.prevClickedHandler}
										clickedCreate={this.createClickedHandler}
										email={this.state.email}
										firstName={this.state.firstName}
										lastName={this.state.lastName}
										gender={this.state.gender}
										companyName={this.state.companyName}
										timezone={this.state.timezone}
										changeEmail={this.inputChangedHandler}
										firstNameChanged={this.nameChangedHandler}
										lastNameChanged={this.nameChangedHandler}
										genderSelected={this.inputChangedHandler}
										companyNameChange={this.inputChangedHandler}
										timezoneSelected={this.inputChangedHandler} />;
			break;
			default: currentStep = <EmailStep 
										inputEmail={this.inputChangedHandler} 
										clickedNext={this.nextClickedHandler}
										email={this.state.email} />;
		}

		return (
			<div className={classes.layout}>
				<p className={classes.layout__current_page}>{this.state.stepTitles[this.state.step - 1]}</p>
				<p className={classes.layout__title}>Create account</p>
				<div style={{ width: `100%`, height: `5px`, background: `-webkit-linear-gradient(left ,rgb(0, 137, 190), rgb(0, 137, 190) ${this.state.step * 20}%, rgba(236, 236, 236, 0.808) ${this.state.step * 20}%, rgba(236, 236, 236, 0.808) 100%)` }}
					className={classes.layout__progress}
				></div>
				{this.state.accountCreated ? 'Congratulations! Your account has been created' : currentStep}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateAccount: () => 	dispatch({ 
									type: 'CREATE_ACCOUNT',
									payload: Layouts.state
								})
	};
}

export default connect(null, mapDispatchToProps)(Layouts);