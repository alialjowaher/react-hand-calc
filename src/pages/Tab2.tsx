import React from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import {add,reload} from 'ionicons/icons';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader dir="rtl" className="ion-no-border">
        <IonToolbar>
        <IonButtons slot="end" ><IonButton><IonIcon icon={reload} /></IonButton></IonButtons>
    
          <IonTitle className="ion-text-center"> حاسبة الهـاند</IonTitle>
          <IonButtons slot="start" ><IonButton><IonIcon icon={add} /></IonButton></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader >
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
              <IonCol><h2>200</h2></IonCol>
              <IonCol><h1>170</h1></IonCol>
              <IonCol><h2>-30</h2></IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol className="ion-align-self-center"><h2>مجموع الجولات</h2></IonCol>
              <IonCol className="ion-align-self-center"><h2>الجولة الحالية</h2></IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol><h2>1</h2></IonCol>
              <IonCol><h1>1</h1></IonCol>
            </IonRow>
     
            </IonGrid>
            </IonCardContent>
              </IonCard>
              <IonListHeader>
              <IonLabel className="ion-text-center">معلومات الجولات </IonLabel>
            </IonListHeader>
              <IonList dir="rtl">
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
