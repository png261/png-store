import { ErrorMessage, FastField, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button/Button.styles';
import { PATH } from 'src/constants/paths';
import InputField from 'src/custom-fields/InputField/InputField';
import PassField from 'src/custom-fields/PassField/PassField';
import db, {
	auth,
	facebookProvider,
	googleProvider,
	COLLECTION_IDS,
} from 'src/firebase/firebase';
import * as Yup from 'yup';
import { FormGroup, Socials, Wrapper } from './SignUp.styles';

const SignUp = () => {
	const [submitError, setSubmitError] = useState('');
	const initialValues = {
		username: '',
		email: '',
		password: '',
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(4, 'Too Short!')
			.max(70, 'Too Long!')
			.required('Required'),
	});

	const handleSubmit = ({ username, email, password }) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				const user = {
					uid: result.user.uid,
					userName: username,
					email: email,
				};

				db.collection(COLLECTION_IDS.USERS)
					.doc(result.user.uid)
					.set(user);
			})
			.catch((error) => {
				setSubmitError(error.message);
			});
	};

	const signIn = (option = 'google') => {
		const provider =
			option === 'facebook' ? facebookProvider : googleProvider;
		auth.signInWithPopup(provider)
			.then((result) => {
				const uid = result.user.uid;
				const profile = result.additionalUserInfo.profile;
				const userAvt = profile.picture?.data?.url || profile.picture;
				const userName = profile.name;
				const user = { userName, userAvt };

				db.collection(COLLECTION_IDS.USERS).doc(uid).set(user);
			})
			.catch((error) => alert(error));
	};
	const signInWithFb = () => () => signIn('facebook');
	const signInWithGoogle = signIn;

	return (
		<Wrapper>
			<h2>
				Sign Up
				<span>
					Already have an account?
					<Link to={PATH.LOGIN}>Login</Link>
				</span>
			</h2>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormGroup>
						<FastField
							name="username"
							component={InputField}
							label="Username"
						/>
						<span>
							<ErrorMessage name="username" />
						</span>
					</FormGroup>
					<FormGroup>
						<FastField
							name="email"
							component={InputField}
							label="Email"
						/>
						<span>
							<ErrorMessage name="email" />
						</span>
					</FormGroup>
					<FormGroup>
						<FastField
							name="password"
							component={PassField}
							label="Password"
						/>
						<span>
							<ErrorMessage name="password" />
						</span>
					</FormGroup>
					<Button type="submit">Sign Up</Button>
					<p>{submitError}</p>
				</Form>
			</Formik>

			<h3>Or continue with your social profile:</h3>
			<Socials>
				<button onClick={signInWithFb}>
					<i className="fa fa-facebook-f"></i>
				</button>
				<button onClick={signInWithGoogle}>
					<i className="fa fa-google"></i>
				</button>
			</Socials>
		</Wrapper>
	);
};

export default SignUp;
