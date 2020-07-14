import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonIcon,
  IonModal,
  IonButton,
  IonAlert,
  IonButtons,
  IonText,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './Tab1.css';
import SmhqListItem from '../components/SmhqListItem';
import NewQuestLite from '../components/NewQuestLite';

const Tab1 = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const preAddTab1 = () => {
    if (props.channellite !== '' && props.size !== 'notpicklite') {
      props.onAddLite();
      setShowModal(false);
    } else {
      // alert('Please enter both channel and size info');
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>SMH Tracker</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)} color="primary">
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SMH Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader>
            <h3 style={{ width: '100%', textAlign: 'center' }}>Quests accepted</h3>
          </IonListHeader>
          {props.timers.length === 0 && (
            <p style={{ margin: '1rem' }}>
              <IonText color="warning">
                You can add new timer either by using the quick add button on top-right of this view or the add tabs.
              </IonText>
            </p>
          )}
          {props.timers.map((timer) => (
            <SmhqListItem key={timer.id} value={timer} onDeleteItem={props.onDeleteItem} />
          ))}
        </IonList>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Add New Quest</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <NewQuestLite
              channellite={props.channellite}
              sizelite={props.sizelite}
              onChannelChangeLite={props.onChannelChangeLite}
              onSizeChangeLite={props.onSizeChangeLite}
              onAddLite={preAddTab1}
            />
          </IonContent>
        </IonModal>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          header={'Alert'}
          // subHeader={'Subtitle'}
          message={'Please enter both channel and size info!'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
