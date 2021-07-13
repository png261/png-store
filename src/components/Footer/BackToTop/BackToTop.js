import { useState, useEffect } from 'react';
import { Button } from './BackToTop.styles';

const BackToTop = () => {
	const [active, setActive] = useState(false);
	const [isShow, setIsShow] = useState(false);

	const checkScrollTop = (e) => {
		const vh = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		const isAbleToScroll = window.innerHeight + window.scrollY > vh + 150;
		const isScrolledEnd =
			window.innerHeight + window.scrollY + 150 >=
			document.body.offsetHeight;

		if (isAbleToScroll && isScrolledEnd) {
			return setIsShow(true);
		}
		setIsShow(false);
		setActive(false);
	};

	const BackToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setActive(!active);
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);
		return () => window.removeEventListener('scroll', checkScrollTop);
	}, []);

	return (
		<Button onClick={BackToTop} active={active} isShow={isShow}></Button>
	);
};

export default BackToTop;
