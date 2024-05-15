import {
	IonApp,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonLabel,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonTitle,
	IonToolbar,
	isPlatform,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Routes from './Routes';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			{isPlatform('desktop') ? (
				<>
					<IonRouterOutlet>
						<Routes />
					</IonRouterOutlet>
					<IonMenu contentId="main-content">
						<IonHeader>
							<IonToolbar>
								<IonTitle>Menu Content</IonTitle>
							</IonToolbar>
						</IonHeader>
						<IonContent className="ion-padding">
							This is the menu content.
						</IonContent>
					</IonMenu>
					<IonPage id="main-content">
						<IonHeader>
							<IonToolbar>
								<IonButtons slot="start">
									<IonMenuButton />
								</IonButtons>
								<IonTitle>Menu</IonTitle>
							</IonToolbar>
						</IonHeader>
						<IonContent className="ion-padding">
							Tap the button in the toolbar to open the menu.
						</IonContent>
					</IonPage>
				</>
			) : (
				<IonTabs>
					<IonRouterOutlet>
						<Routes />
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="tab1" href="/tab1">
							<IonIcon aria-hidden="true" icon={triangle} />
							<IonLabel>Tab 1</IonLabel>
						</IonTabButton>
						<IonTabButton tab="tab2" href="/tab2">
							<IonIcon aria-hidden="true" icon={ellipse} />
							<IonLabel>Tab 2</IonLabel>
						</IonTabButton>
						<IonTabButton tab="tab3" href="/tab3">
							<IonIcon aria-hidden="true" icon={square} />
							<IonLabel>Tab 3</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			)}
		</IonReactRouter>
	</IonApp>
);

export default App;
