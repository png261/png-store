import { useState } from 'react';
import { Wrapper, Tabs, Panels, Panel, Tab } from './Tabs.styles';

const ProductTabs = ({ tabNames, children }) => {
	const [current, setCurrent] = useState(0);
	const changeCurrent = (i) => () => setCurrent(i);
	const isCurrent = (i) => current === i;

	return (
		<Wrapper>
			<Tabs>
				{children.map((child, i) => (
					<Tab active={isCurrent(i)} onClick={changeCurrent(i)}>
						{tabNames[i]}
					</Tab>
				))}
			</Tabs>
			<Panels>
				{children.map((child, i) => (
					<Panel active={isCurrent(i)}>{child}</Panel>
				))}
			</Panels>
		</Wrapper>
	);
};

export default ProductTabs;
