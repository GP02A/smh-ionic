import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import NewQuest from '../components/NewQuest';

const Tab2 = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Add New Quest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add New Quest</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NewQuest
          channel={props.channel}
          size={props.size}
          onChannelChange={props.onChannelChange}
          onSizeChange={props.onSizeChange}
          onAdd={props.onAdd}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
