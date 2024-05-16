import Page from '../../components/Page';
import './style.css';
import Map from '../../components/Map';

const Home: React.FC = () => {
	return (
		<Page title="Mapa" withoutPadding>
			<Map />
		</Page>
	);
};

export default Home;
