import React, { useState } from 'react';
import { IonCol, IonContent, IonGrid, IonItem, IonItemDivider, IonLabel, IonListHeader, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';


export const AddJawlah: React.FC = () => {
    const [winTeam, setwinTeam] = useState<string>('');
    const [generalWinType, setgeneralWinType] = useState<string>('')
    const [finalWinType, setfinalWinType] = useState<string>('')
    

    function switchWin() {
    switch(generalWinType){
        
        case "khlos":{
            
           return (
            <IonSegment id="khlos"  onIonChange={(e) => setfinalWinType(`${e.detail.value}`)}>
            <IonSegmentButton value="khlosSafi">
              <IonLabel>صافـي</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="khlos">
              <IonLabel>غير صافي</IonLabel>
            </IonSegmentButton>
            </IonSegment>
           )
         
            
        }
        case "dabal":{
            
            return(
                <IonSegment  onIonChange={(e) => setfinalWinType(`${e.detail.value}`)}>
                <IonSegmentButton  value="dabalSafi">
                  <IonLabel>صافـي</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="dabal">
                  <IonLabel>غير صافي</IonLabel>
                </IonSegmentButton>
                </IonSegment>
            )
        }
        case "tasjilah":{
            return(
                <IonSegment id="tasjilah" onIonChange={(e) => setfinalWinType(`${e.detail.value}`)}>
                <IonSegmentButton value="tasjilahKhlos">
                  <IonLabel>خلوص</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="tasjilahdabal">
                  <IonLabel>دبل</IonLabel>
                </IonSegmentButton>
                </IonSegment>
                
              
            )
        }
        
    }
    }
   
    return (
        <IonContent>
        <IonGrid>
        <IonRow>
        <IonCol>
        <IonRadioGroup value={winTeam} onIonChange={e => setwinTeam(e.detail.value)}>
            <IonListHeader>
              <IonLabel> الفريق الفائز</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>لنـا</IonLabel>
              <IonRadio slot="start" value="lana" />
            </IonItem>
            <IonItem>
              <IonLabel>لهـم</IonLabel>
              <IonRadio slot="start" value="lahom" />
            </IonItem>
          </IonRadioGroup>
          <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{winTeam}</IonItem>
        </IonCol>
         </IonRow>
         <IonRow>
         <IonSegment  id="winStatus" onIonChange={(e) => setgeneralWinType(`${e.detail.value}`)}>
          <IonSegmentButton value="khlos">
            <IonLabel>خلوص</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="dabal">
            <IonLabel>دبـل</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="tasjilah">
            <IonLabel>تسجيل</IonLabel>
          </IonSegmentButton>
        </IonSegment>
         <IonItem>{generalWinType}</IonItem>
         </IonRow>
         <IonRow>

         {switchWin()}
    
        

         
           
         
         <IonItem>{finalWinType}</IonItem>
         </IonRow>
        </IonGrid>
        </IonContent>
    );
};
export default AddJawlah;