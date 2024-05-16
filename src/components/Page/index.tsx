import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { PropsWithChildren } from 'react';

interface IProps {
	title?: string;
	withoutPadding?: boolean;
}

const Page: React.FC<PropsWithChildren<IProps>> = ({
	title,
	withoutPadding = false,
	children,
}: PropsWithChildren<IProps>) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className={withoutPadding ? '' : 'ion-padding'}>
				{children}
			</IonContent>
		</IonPage>
	);
};

export default Page;
