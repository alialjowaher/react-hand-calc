import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center"> حاسبة الهـاند</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <IonGrid>
            <IonRow className="ion-text-center">
              <IonCol className="ion-align-self-center"><h2>لهـم</h2></IonCol>
              <IonCol className="ion-align-self-center"><h2>الفرق</h2></IonCol>
              <IonCol className="ion-align-self-center"><h2>لنـا</h2></IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol><h1>200</h1></IonCol>
              <IonCol><h1>170</h1></IonCol>
              <IonCol><h1>-30</h1></IonCol>
            </IonRow>
     
      </IonGrid>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
