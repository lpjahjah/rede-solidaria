import { Redirect, Route } from 'react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/tab1">
				<Tab1 />
			</Route>
			<Route exact path="/tab2">
				<Tab2 />
			</Route>
			<Route path="/tab3">
				<Tab3 />
			</Route>
			<Route exact path="/">
				<Redirect to="/tab1" />
			</Route>
		</>
	);
};

export default Routes;
