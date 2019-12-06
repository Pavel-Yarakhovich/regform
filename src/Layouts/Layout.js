import React from 'react';
import classes from './Layout.module.scss';
import { EmailStep, CompanyStep, TimezoneStep, ConfirmationStep } from '../Steps/index';
import NameStep from '../Steps/NameStep/NameStep';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Layouts extends React.Component {
	state = {
		stepTitles: [
			`Create your VINchain account.
			Easy to use anytime, anywhere for everyone`,
			'Lets introduce ourselves. Your name will be displayed in all reports, documents, etc.',
			'Tracking company venichles? (optional)',
			'Set your time zone',
			'Check your data'
		]
	};

	render() {
		let currentStep;
		switch (this.props.step) {
			case 2: currentStep = <NameStep
										clickedNext={this.props.nextClicked}
										clickedPrev ={this.props.prevClicked}
										firstNameChanged={(e) => this.props.nameInput(e.target)}
										lastNameChanged={(e) => this.props.nameInput(e.target)}
										genderSelected={(e) => this.props.dataInput(e.target)}
										firstName={this.props.firstName}
										lastName={this.props.lastName}
										gender={this.props.gender}/>;
			break;
			case 3: currentStep = <CompanyStep
										clickedNext={this.props.nextClicked}
										clickedPrev ={this.props.prevClicked}
										companyName={this.props.companyName}
										companyNameInput={(e) => this.props.dataInput(e.target)} />;
			break;
			case 4: currentStep = <TimezoneStep
										clickedNext={this.props.nextClicked}
										clickedPrev ={this.props.prevClicked}
										timezoneSelected={(e) => this.props.dataInput(e.target)}
										timezone={this.props.timezone} />;
			break;
			case 5: currentStep = <ConfirmationStep
										clickedPrev ={this.props.prevClicked}
										clickedCreate={this.props.onCreateAccount}
										email={this.props.email}
										firstName={this.props.firstName}
										lastName={this.props.lastName}
										gender={this.props.gender}
										companyName={this.props.companyName}
										timezone={this.props.timezone}
										changeEmail={(e) => this.props.dataInput(e.target)}
										firstNameChanged={(e) => this.props.nameInput(e.target)}
										lastNameChanged={(e) => this.props.nameInput(e.target)}
										genderSelected={(e) => this.props.dataInput(e.target)}
										companyNameChange={(e) => this.props.dataInput(e.target)}
										timezoneSelected={(e) => this.props.dataInput(e.target)} />;
			break;
			default: currentStep = <EmailStep
										inputEmail={(e) => this.props.dataInput(e.target)}
										clickedNext={(event) => this.props.nextClicked(event)}
										email={this.props.email} />;
		}

		return (
			<div className={classes.layout}>
				<p className={classes.layout__current_page}>{this.state.stepTitles[this.props.step - 1]}</p>
				<p className={classes.layout__title}>Create account</p>
				<div
					style={{ width: `100%`, height: `5px`, background: `-webkit-linear-gradient(left ,rgb(0, 137, 190), rgb(0, 137, 190) ${this.props.step * 20}%, rgba(236, 236, 236, 0.808) ${this.props.step * 20}%, rgba(236, 236, 236, 0.808) 100%)` }}
					className={classes.layout__progress}
				>
				</div>
				{this.props.accountCreated ? 'Congratulations! Your account has been created' : currentStep}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		step: state.step,
		email: state.email,
		firstName: state.firstName,
		lastName: state.lastName,
		gender: state.gender,
		companyName: state.companyName,
		timezone: state.timezone,
		accountCreated: state.accountCreated
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateAccount: (email) => dispatch({ type: actionTypes.CREATE_ACCOUNT }),
		nextClicked: () => dispatch({ type: actionTypes.NEXT_PAGE }),
		prevClicked: () => dispatch({ type: actionTypes.PREV_PAGE }),
		dataInput: (value) => dispatch({
									type: actionTypes.INPUT_DATA,
									payload: { name: value.name, data: value.value }
		}),
		nameInput: (value) => dispatch({
									type: actionTypes.INPUT_NAME,
									payload: { name: value.name, data: value.value }
		})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Layouts);