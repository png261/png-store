import { useState } from 'react';
import { TogglerShow, Wrapper } from './PassField.styles';

function PassField({ field, label, placeholder, disabled }) {
	const { name } = field;
	const [isShowPass, setIsShowPass] = useState(false);
	const toggleShowPass = () => setIsShowPass((prevState) => !prevState);

	return (
		<Wrapper>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				{...field}
				type={isShowPass ? 'text' : 'password'}
				disabled={disabled}
				placeholder={placeholder}
			/>
			<TogglerShow onClick={toggleShowPass}>
				{isShowPass ? (
					<i className="fa fa-eye"></i>
				) : (
					<i className="fa fa-eye-slash"></i>
				)}
			</TogglerShow>
		</Wrapper>
	);
}

export default PassField;
