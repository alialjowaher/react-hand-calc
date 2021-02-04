import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import RadialChart from '../components/RadialChart';
import { add, reload, close } from 'ionicons/icons';
import { AddJawlah } from '../components/AddJawlah';



const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  


  return (
    <IonPage>
      <IonHeader dir="rtl" className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end" ><IonButton><IonIcon color="dark" icon={reload} /></IonButton></IonButtons>
          <IonTitle className="ion-text-center"> حاسبة الهـاند</IonTitle>
          <IonButtons slot="start"><IonButton onClick={() => setShowModal(true)}><IonIcon color="dark" icon={add} />  </IonButton></IonButtons>
          
          <IonModal isOpen={showModal}>
            <IonButtons slot="end">
            <IonButton color="medium" onClick={() => setShowModal(false)}>
            <IonIcon icon={close} /> 
        </IonButton>
        </IonButtons>
            <AddJawlah></AddJawlah>
          </IonModal>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonCard className="lana">
                <IonCol className="ion-align-self-center" ><h2 className="remove-whitespace">لنـا</h2></IonCol>
                <IonCol><h2 className="remove-whitespace">30 -</h2></IonCol>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="lahom">
                <IonCol className="ion-align-self-center lahom"><h2 className="remove-whitespace">لهـم</h2></IonCol>
                <IonCol><h2 className="remove-whitespace">300</h2></IonCol>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center">
            <IonCol>
              <IonCard className="currentRound">
                <IonCol className="ion-align-self-center"><h2 className="remove-whitespace">الجولة الحالية</h2></IonCol>
                <IonCol> <RadialChart
                  progress={1}
                  color="#3c71d0"
                /></IonCol>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="farq">
                <IonCol className="ion-align-self-center"><h2 className="remove-whitespace">الفرق</h2></IonCol>
                <IonCol><h2 className="farqValue">1270</h2></IonCol>
              </IonCard>
            </IonCol>

          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol className="ion-text-center">
              <IonCard className="khlos" color=''>
                <IonCol className="ion-align-self-center"><h2> الخلوص </h2></IonCol>
                <IonCol><h2 className="remove-whitespace">1</h2></IonCol>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="dabal" color=''>
                <IonCol className="ion-align-self-center"><h2>الدبل</h2></IonCol>
                <IonCol><h2 className="remove-whitespace">0</h2></IonCol>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="tasjilah">
                <IonCol className="ion-align-self-center"><h2> التسجيلة</h2></IonCol>
                <IonCol><h2 className="remove-whitespace">0</h2></IonCol>
               
      
                            
              </IonCard>
            </IonCol>
          </IonRow>
        
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Tab2;
