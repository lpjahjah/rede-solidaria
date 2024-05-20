import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonModal,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { PropsWithChildren, useState } from 'react';

interface IProps {
	title?: string;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<PropsWithChildren<IProps>> = ({
	title,
	open,
	setOpen,
	children,
}: PropsWithChildren<IProps>) => {
	return (
		<IonModal isOpen={open}>
			<IonHeader>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonButton onClick={() => setOpen(false)}>
							Fechar
						</IonButton>
					</IonButtons> */}
					<IonTitle>{title}</IonTitle>
					<IonButtons slot="end">
						<IonButton strong={true} onClick={() => setOpen(false)}>
							Fechar
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">{children}</IonContent>
		</IonModal>
	);
};

export default Modal;
