import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from '@ionic/react';
import "./AddJawlah.css"

export const AddJawlah: React.FC = () => {
    const [winTeam, setwinTeam] = useState<string>('');
    const [generalWinType, setgeneralWinType] = useState<string>('')
    const [finalWinType, setfinalWinType] = useState<string>('')
    const [nazilCount, setNazilCount] = useState<number>()
    const [nazilTotal, setNazilTotal] = useState<number>()
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

    function nazilandTotal() {
      switch(finalWinType) {
        case "khlos":
        case "dabal": {
          return(
            <IonList>
            <IonItem>
            <IonLabel>عدد النازليـن</IonLabel>
            <IonSelect value={nazilCount}  okText="حسناً" cancelText="إلغاء" placeholder="اختر" onIonChange={e => setNazilCount(e.detail.value)}>
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            {/* use pattern="[0-9]*"  to show only numbers keypad*/}
            <IonInput type="number" value={nazilTotal} pattern="[0-9]*" placeholder="ادخل المجموع" onIonChange={e => setNazilTotal(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          </IonList>
          )
        }
       case "khlosSafi":
       case "dabalSafi":
       case "tasjilahKhlos":
       case "tasjilahdabal": {
        //  setfinalWinType('')
         break
       }
       
      }
     
    }
   
    return (
        <IonContent className="addjawalhview">
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
          {/* <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{winTeam}</IonItem> */}
        </IonCol>

         </IonRow>
         <IonRow style={{margin:'10px'}}>
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
         {/* <IonItem>{generalWinType}</IonItem> */}
         </IonRow>
         <IonRow style={{margin:'10px'}}>

         {switchWin()}
          
        {nazilandTotal()}
         {/* <IonItem>{finalWinType}</IonItem> */}
         </IonRow>
         <IonRow>
           <IonCol></IonCol>
           <IonCol className="ion-align-self-center" size="10">
           <IonButton shape="round" size="large" expand="block">إضافـة جولـة</IonButton>
           </IonCol>
           <IonCol></IonCol>
          
         </IonRow>
        </IonGrid>
        </IonContent>
    );
};
export default AddJawlah;