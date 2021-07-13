import { ErrorMessage, FastField, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import Button from 'src/components/Button/Button.styles';
import { PATH } from 'src/constants/paths';
import InputField from 'src/custom-fields/InputField/InputField';
import PassField from 'src/custom-fields/PassField/PassField';
import db, {
	auth,
	facebookProvider,
	googleProvider,
} from 'src/firebase/firebase';
import * as Yup from 'yup';
import { FormGroup, LostPass, Socials, Wrapper } from './Login.styles';

const Login = () => {
	const history = useHistory();

	const initialValues = {
		email: '',
		password: '',
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().required('Password is required'),
	});

	const handleSubmit = ({ email, password }) => {
		auth.signInWithEmailAndPassword(email, password)
			.then(history.goBack())
			.catch((error) => {
				alert(error);
			});
	};

	const signIn = (option = 'google') => {
		const provider =
			option === 'facebook' ? facebookProvider : googleProvider;

		auth.signInWithPopup(provider)
			.then((result) => {
				const uid = result.user.uid;
				const profile = result.additionalUserInfo.profile;
				const userAvatar =
					profile.picture?.data?.url || profile.picture;
				const userName = profile.name;
				const user = { uid, userName, userAvatar };

				db.collection('users').doc(uid).set(user);
			})
			.catch((error) => alert(error));
	};
	const signInWithFb = () => () => signIn('facebook');
	const signInWithGoogle = signIn;

	return (
		<Wrapper>
			<h2>
				Login
				<span>
					Haven't an account?
					<Link to={PATH.SIGNUP}>Sign Up</Link>
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
					<Button type="submit">Login</Button>
				</Form>
			</Formik>
			<LostPass to={PATH.LOST_PASS}>Forget password?</LostPass>

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

export default Login;
