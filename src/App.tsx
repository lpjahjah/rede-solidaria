import {
	IonApp,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonPage,
	IonRouterOutlet,
	IonSplitPane,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonTitle,
	IonToolbar,
	isPlatform,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import 'leaflet/dist/leaflet.css';
import './theme/variables.css';
import './theme/global.css';

import Routes, { menuItems } from './Routes';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			{isPlatform('desktop') ? (
				<>
					<IonSplitPane contentId="main">
						<IonMenu contentId="main">
							<IonHeader>
								<IonToolbar>
									<IonTitle>Rede Solidária</IonTitle>
								</IonToolbar>
							</IonHeader>
							<IonContent>
								<IonList>
									{menuItems.map((item) => (
										<IonItem
											key={item.url}
											routerLink={item.url}
											lines="none"
										>
											<IonIcon
												aria-hidden="true"
												icon={item.icon}
												color="primary"
												slot="start"
											/>
											<IonLabel>{item.label}</IonLabel>
										</IonItem>
									))}
								</IonList>
							</IonContent>
						</IonMenu>

						<IonPage id="main">
							<IonRouterOutlet>
								<Routes />
							</IonRouterOutlet>
						</IonPage>
					</IonSplitPane>
				</>
			) : (
				<IonTabs>
					<IonRouterOutlet>
						<Routes />
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						{menuItems.map((item) => (
							<IonTabButton
								key={item.url}
								tab={item.url}
								href={item.url}
							>
								<IonIcon aria-hidden="true" icon={item.icon} />
							</IonTabButton>
						))}
					</IonTabBar>
				</IonTabs>
			)}
		</IonReactRouter>
	</IonApp>
);

export default App;
