import React from 'react';
import { IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">معلومات الجولات</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem href="https://www.ionicframework.com">

            <IonCard className="ion-card">
              <IonCardContent>
                this is a test content of a card
              </IonCardContent>
            </IonCard>
          </IonItem>

        </IonList>
      </IonContent>

    </IonPage >
  );
};

export default Tab1;
