import { Wrapper } from './InputField.styles';

function InputField({ field, type, label, placeholder, disabled, ...props }) {
	const { name } = field;
	return (
		<Wrapper>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				{...field}
				type={type}
				disabled={disabled}
				placeholder={placeholder}
				{...props}
			/>
		</Wrapper>
	);
}

export default InputField;
