import { FastField, Form, Formik, ErrorMessage } from 'formik';
import Button from 'src/components/Button/Button.styles';
import InputField from 'src/custom-fields/InputField/InputField';
import { auth } from 'src/firebase/firebase';
import * as Yup from 'yup';
import { Wrapper } from './LostPassword.styles';

const LostPassword = () => {
	const initialValues = {
		email: '',
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
	});

	const handleSubmit = ({ email }) => {
		auth.sendPasswordResetEmail(email)
			.then(() => alert('Please check your email...'))
			.catch(function (e) {
				alert(e);
			});
	};

	return (
		<Wrapper>
			<p>
				Lost your password? Please enter your username or email address.
				You will receive a link to create a new password via email.
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<FastField
						name="email"
						component={InputField}
						label="Email address"
					/>
					<span>
						<ErrorMessage name="email" />
					</span>
					<Button type="submit">Reset password</Button>
				</Form>
			</Formik>
		</Wrapper>
	);
};

export default LostPassword;
