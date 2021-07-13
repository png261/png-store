import GridProducts from './GridProducts/GridProducts';
import { Line, Wrapper, Welcome } from './Home.styles';

const Home = () => {
	return (
		<Wrapper>
			<Welcome>
				<h1>Minimal Product Store</h1>
				<h3>Simple Living</h3>
				<Line />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus doloribus facere error, iusto perferendis fugit in!
					Culpa itaque quam, consequatur laudantium perspiciatis nobis
					doloribus nam corrupti aperiam repellendus. Autem, et.
				</p>
			</Welcome>

			<GridProducts />
		</Wrapper>
	);
};

export default Home;
