import classes from './ContactForm.module.css';
import uuid from 'react-uuid';
import swal from 'sweetalert';
import useInput from '../../hooks/use-input';
import { postInquiry } from '../../lib/api';

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

const ContactForm = () => {
	const {
		value: firstName,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput(isNotEmpty);

	const {
		value: lastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput(isNotEmpty);

	const {
		value: email,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(isEmail);

	const {
		value: mobile,
		isValid: mobileIsValid,
		hasError: mobileHasError,
		valueChangeHandler: mobileChangeHandler,
		inputBlurHandler: mobileBlurHandler,
		reset: resetMobile,
	} = useInput(isNotEmpty);

	const {
		value: message,
		isValid: messageIsValid,
		hasError: messageHasError,
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
		reset: resetMessage,
	} = useInput(isNotEmpty);

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && mobileIsValid && emailIsValid && messageIsValid) {
		formIsValid = true;
	}

	const inquiry = {
		id: uuid(),
		firstName,
		lastName,
		mobile,
		email,
		message,
	};

	function submitHandler(event: any) {
		event.preventDefault();
		postInquiry(inquiry);

		swal('Message Sent!', 'Thank you for your question', 'success');

		resetFirstName();
		resetLastName();
		resetEmail();
		resetMobile();
		resetMessage();
	}

	return (
		<div className="wrappercol">
			<h2>Further Inquiries</h2>

			<div className={classes.booking}>
				<p>
					If you have any questions regarding our services, or aren’t sure if you need physio and
					would like to discuss your injury with a member of our team, please call{' '}
					<b>07964 991445</b> or contact us using the inquiry form.
				</p>
			</div>

			<form
				className={classes.form}
				id="contactform"
				onSubmit={submitHandler}
			>
				<div className={classes['form-control']}>
					<div>
						<label htmlFor="firstname">First Name: </label>
						{firstNameHasError && <p className={classes.errorText}>Please enter a first name.</p>}
						<input
							type="text"
							id="firstname"
							value={firstName}
							onChange={firstNameChangeHandler}
							onBlur={firstNameBlurHandler}
						/>
					</div>
				</div>

				<div className={classes['form-control']}>
					<div>
						<label htmlFor="lastname">Last Name: </label>
						{lastNameHasError && <p className={classes.errorText}>Please enter a last name.</p>}
						<input
							type="text"
							id="lastname"
							value={lastName}
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
						/>
					</div>
				</div>

				<div className={classes['form-control']}>
					<div>
						<label htmlFor="mobile">Mobile / Phone:</label>
						{emailHasError && (
							<p className={classes.errorText}>Please enter a valid phone number.</p>
						)}
						<input
							type="number"
							id="mobile"
							value={mobile}
							onChange={mobileChangeHandler}
							onBlur={mobileBlurHandler}
						/>
					</div>
				</div>

				<div className={classes['form-control']}>
					<div>
						<label htmlFor="email">Email:</label>
						{emailHasError && (
							<p className={classes.errorText}>Please enter a valid email address.</p>
						)}
						<input
							type="email"
							id="email"
							value={email}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
						/>
					</div>
				</div>

				<div className={`${classes['form-control']} ${classes.message}`}>
					<label htmlFor="textarea">Message:</label>
					{messageHasError && <p className={classes.errorText}>Please enter a valid message.</p>}
					<textarea
						form="contactform"
						id="message"
						name="message"
						value={message}
						onChange={messageChangeHandler}
						onBlur={messageBlurHandler}
					></textarea>
				</div>
				<div className={`${classes['form-control']} ${classes.message}`}>
					<div className="wrappercol">
						<button
							className={classes.formbtn}
							disabled={!formIsValid}
						>
							Send Inquiry
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
