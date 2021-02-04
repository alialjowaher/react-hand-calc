import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from '@ionic/react';
import "./AddJawlah.css"
// import useLocalStorage from 'react-hook-uselocalstorage';
// import { useIdb } from 'react-use-idb'
import { openDB, deleteDB, wrap, unwrap } from 'idb';




export const AddJawlah: React.FC = () => {
    const [winTeam, setwinTeam] = useState<string>('');
    const [generalWinType, setgeneralWinType] = useState<string>('')
    const [finalWinType, setfinalWinType] = useState<string>('')
    const [nazilCount, setNazilCount] = useState<number>(0)
    const [nazilTotal, setNazilTotal] = useState<number>(0)

    

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
            <IonSelect value={nazilCount}  okText="حسناً" cancelText="إلغاء" placeholder="اختر" onIonChange={e => setNazilCount(Number(e.detail.value))}>
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            {/* use pattern="[0-9]*"  to show only numbers keypad*/}
            <IonInput type="number" value={nazilTotal} pattern="[0-9]*" placeholder="ادخل المجموع" onIonChange={e => setNazilTotal(Number(e.detail.value))}></IonInput>
          </IonItem>
          </IonList>
          )
        }
   
      }
     
    }
    
    const winValues = [
      {'jawlahID':0,'winType':'khlos','winnerTeam':'','losserTeam':'','winnerValue':-30,'losserValue':0,'nazilCount':0,'nazilTotal':0,'isTasjilah':false},
      {'jawlahID':0,'winType':'khlosSafi','winnerTeam':'','losserTeam':'','winnerValue':-30,'losserValue':300,'nazilCount':0,'nazilTotal':0,'isTasjilah':false},
      {'jawlahID':0,'winType':'dabal','winnerTeam':'','losserTeam':'','winnerValue':-60,'losserValue':0,'nazilCount':0,'nazilTotal':0,'isTasjilah':false},
      {'jawlahID':0,'winType':'dabalSafi','winnerTeam':'','losserTeam':'','winnerValue':-60,'losserValue':600,'nazilCount':0,'nazilTotal':0,'isTasjilah':false},
      {'jawlahID':0,'winType':'tasjilahKhlos','winnerTeam':'','losserTeam':'','winnerValue':0,'losserValue':300,'nazilCount':0,'nazilTotal':0,'isTasjilah':true},
      {'jawlahID':0,'winType':'tasjilahdabal','winnerTeam':'','losserTeam':'','winnerValue':0,'losserValue':600,'nazilCount':0,'nazilTotal':0,'isTasjilah':true}
    ]
    
    const NazilValues = [
      {'nazil':1,'subTotal':200},
      {'nazil':2,'subTotal':100},
      {'nazil':3,'subTotal':0}
    ]
    
    
    function totalCalc(){
      const getNazil = NazilValues.filter(v => v.nazil === nazilCount);
      let losserVal;
      switch (finalWinType) {
        case 'khlos':
          losserVal  = (getNazil[0].subTotal + nazilTotal)
           break;
           case 'dabal':
             losserVal  = ((getNazil[0].subTotal + nazilTotal) * 2)
             break;
            } 
            
            return Number(losserVal) 
    }
          
    async function setWinValues(){
      const jawalhInfo = winValues.filter(value => value.winType === finalWinType);
        jawalhInfo[0].winnerTeam = (winTeam === 'lana')? 'lana':'lahom';
        jawalhInfo[0].losserTeam = (winTeam === 'lana')? 'lahom':'lana';
        jawalhInfo[0].nazilCount = nazilCount
        jawalhInfo[0].nazilTotal = nazilTotal
      if(nazilCount !== 0){
          let finalVal = totalCalc()
          jawalhInfo[0].losserValue = finalVal              
        }
        
      
      openDB('jawlatDB',1, {
        upgrade(db){
          db.createObjectStore('jawlat', { keyPath: 'id',autoIncrement: true})
        }
      })


      const db1 = await openDB('jawlatDB',1);
      db1.add('jawlat',jawalhInfo[0]);
      let values = await db1.getAll('jawlat')


      console.log(values);
      
      
      db1.close();
      

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
           <IonButton shape="round" size="large" onClick={setWinValues} expand="block">إضافـة جولـة</IonButton>
           </IonCol>
           <IonCol></IonCol>
          
         </IonRow>
        </IonGrid>
        </IonContent>
    );
};
export default AddJawlah;