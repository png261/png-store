import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-top: 70px;
`;

export const Tabs = styled.div``;

const ActiveTab = `
    border-bottom:1px solid #555;
`;
export const Tab = styled.button`
	font-size: 20px;
	padding: 10px 15px;
	margin-right: 2px;
	&:hover {
		${ActiveTab}
	}
	${({ active }) => active && ActiveTab}
`;
export const Panels = styled.div`
	margin-top: 40px;
	margin-bottom: 60px;
`;
export const Panel = styled.div`
	${({ active }) => !active && `display:none`}
`;
