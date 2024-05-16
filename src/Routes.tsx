import { Redirect, Route } from 'react-router';
import Home from './pages/Home';
import { map } from 'ionicons/icons';

const menuItems = [
	{
		icon: map,
		label: 'Mapa',
		url: '/home',
	},
];

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/" render={() => <Redirect to="/home" />} />

			<Route path="/home" render={() => <Home />} />

			<Route render={() => <Redirect to="/home" />} />
		</>
	);
};

export default Routes;
export { menuItems };
