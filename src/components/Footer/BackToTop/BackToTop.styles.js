import styled from 'styled-components';

const activeButton = `
    &:before {
        transform: translateX(9.8px) rotate(-60deg);
    }
    &:after {
        transform: translateX(-9.8px) rotate(60deg);
    }
`;

export const Button = styled.button`
	width: 40px;
	height: 60px;
	position: fixed;
	right: var(--padding-x);
	bottom: calc(var(--footer-height) / 2 - 30px);
	transition: 0.4s;

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 50%;
		width: 20px;
		height: 2px;
		margin-top: -1px;
		background-color: currentColor;
		transition: transform 0.4s;
	}
	&:before {
		left: 0;
		transform-origin: left;
	}
	&:after {
		right: 0;
		transform-origin: right;
	}
	&:hover {
		${activeButton}
	}
	${({ active }) => active && activeButton}
	${({ isShow }) =>
		!isShow &&
		`
        transform: translateY(30px) scale(0);
        opacity:0;
    `}

    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
		right: 30px;
	}
`;
