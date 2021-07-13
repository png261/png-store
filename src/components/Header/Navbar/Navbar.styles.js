import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Menu = styled.ul`
	position: fixed;
	display: flex;
	column-gap: 50px;
	row-gap: 15px;
	letter-spacing: 2px;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	top: 0;
	font-weight: 600;
	font-style: normal;
	line-height: 1.4;
	left: 0;
	z-index: -1;
	background-color: #fff;
	font-size: 30px;
	transition: 0.4s;
	opacity: 1;
	&:not(.active) {
		transform: translateY(-100%);
		opacity: 0;
	}
	a {
		display: block;
		position: relative;
		padding: 0 10px;
		font-size: 35px;
		&:after {
			content: '';
			position: absolute;
			z-index: -1;
			right: 0;
			width: 0;
			bottom: 50%;
			transform: translateY(50%);
			background: var(--color-content, #414145);
			height: 2px;
			transition-property: width;
			transition-duration: 0.3s;
			transition-timing-function: ease-out;
		}
		&:hover,
		&.active {
			&:after {
				left: 0;
				right: auto;
				width: 100%;
			}
		}
	}
`;
export const NavbarToggler = styled.button`
	display: flex;
	align-items: center;
	column-gap: 10px;
	letter-spacing: 4px;
	font-size: 14px;
`;
export const NavbarTogglerIcon = styled.div`
	width: 24px;
	height: 20px;
	position: relative;
	&::before,
	&::after {
		content: '';
		display: block;
		background-color: var(--color-menu-expanded-panel, #313139);
		width: 24px;
		height: 2px;
		position: absolute;
		top: 50%;
		left: 0;
		transition: 0.3s;
	}
	&:before {
		transform: translateY(calc(-50% + 5px));
	}
	&:after {
		transform: translateY(calc(-50% - 5px));
	}

	${({ active }) =>
		active
			? `
                &::before,
                &::after {
                    width: 34px;
                }
                &:before {
                    transform: translateX(-5px) rotate(45deg);
                }
                &:after {
                    transform: translateX(-5px) rotate(-45deg);
                }`
			: `
            @media (min-width: 768px) {
                &:hover {
                    &:before,
                    &:after {
                        transform: translateY(-50%);
                    }
                }
            }
    `}
`;
