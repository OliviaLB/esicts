import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import { SignIn } from '../../lib/Authentication';
import styles from './SigninForm.module.css';

const SigninForm = () => {
	const [loggingIn, setLoggingIn] = useState(false);
	const [password, setPassword] = useState<string>('');
	const [rememberUserId, setRememberUserId] = useState(false);
	const [userName, setUserName] = useState<string>('');
	const passwordRef = useRef<HTMLInputElement>(null);

	const userNameKey = 'username';

	const onChangeUserName = (event: React.FormEvent<HTMLInputElement>) => {
		setUserName(event.currentTarget.value);
	};

	const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};
	const history = useHistory();

	const onFormSubmit = () => {
		if (rememberUserId) {
			localStorage.setItem(userNameKey, userName);
		} else {
			localStorage.removeItem(userNameKey);
		}
		if (!loggingIn) {
			setLoggingIn(true);
			SignIn(userName, password);
			history.push('/blogs');
		}
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onFormSubmit();
			event.preventDefault();
		}
	};

	const canSubmit = userName && password && !loggingIn;

	return (
		<>
			<h1 className={styles.heading}>Admin Sign In</h1>
			<form className={styles.flexForm}>
				<div className={styles.formGroup}>
					<span className={'fa fa-user'}></span>

					<input
						autoFocus
						type="text"
						id="username"
						className={styles.textInput}
						autoComplete="email"
						placeholder="Email address/Username"
						aria-label="Email address/Username"
						value={userName}
						onChange={onChangeUserName}
						onKeyDown={onKeyDown}
					/>
				</div>
				<div className={styles.formGroup}>
					<span className={'fa fa-lock'}></span>

					<input
						type="password"
						id="password"
						className={styles.textInput}
						autoComplete="current-password"
						placeholder="Password"
						aria-label="Password"
						value={password}
						onChange={onChangePassword}
						onKeyDown={onKeyDown}
						ref={passwordRef}
					/>
				</div>

				<p className={styles.textField}>
					Forgotten password?{' '}
					<a
						href="https://acme.optimalaw.online"
						rel="noopener noreferrer"
						target="_blank"
						className={styles.passwordReset}
					>
						Click Here
					</a>
				</p>

				<div>
					<input
						className={styles.check}
						type="checkbox"
						checked={rememberUserId}
						onChange={() => setRememberUserId(!rememberUserId)}
						name="remember-user-id"
					/>
					<label htmlFor="remember-user-id">
						&nbsp;&nbsp;&nbsp;Remember email address/username.
					</label>
				</div>
				<button
					type="submit"
					disabled={!canSubmit}
					onClick={onFormSubmit}
					className={styles.button}
				>
					{loggingIn ? 'Please wait... logging you in.' : 'Login to your account'}
				</button>
			</form>
		</>
	);
};
export default SigninForm;
