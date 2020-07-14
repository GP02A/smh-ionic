import React, { useState } from 'react';
import {
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton,
  IonAlert,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const NewQuestLite = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  // useEffect(() => {
  //   console.log('channel have changed to: ' + props.channellite);
  // }, [props.channellite]);

  // useEffect(() => {
  //   console.log('quest size have changed to: ' + props.sizelite);
  // }, [props.sizelite]);

  const preAdd = () => {
    if (props.channel !== '' && props.size !== 'notpick') {
      props.onAddLite();
    } else {
      // alert('Please enter both channel and size info');
      setShowAlert(true);
    }
  };

  return (
    <div>
      <IonList className="ion-padding">
        <IonItemDivider>Please enter channel and pick a quest size.</IonItemDivider>

        <IonItem>
          <IonLabel position="floating">Channel</IonLabel>
          <IonInput
            value={props.channellite}
            onIonChange={(e) => {
              props.onChannelChangeLite(e.detail.value);
            }}
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Quest Size</IonLabel>
          <IonSelect
            interface="popover"
            value={props.sizelite}
            onIonChange={(e) => {
              props.onSizeChangeLite(e.detail.value);
            }}
          >
            <IonSelectOption value="notpick" disabled>
              Pick GQ Size
            </IonSelectOption>
            <IonSelectOption value="small">Small</IonSelectOption>
            <IonSelectOption value="medium">Medium</IonSelectOption>
            <IonSelectOption value="large">Large</IonSelectOption>
            <IonSelectOption value="xlarge">Xlarge</IonSelectOption>
          </IonSelect>
        </IonItem>
        <div className="ion-padding">
          <IonButton fill="outline" expand="block" onClick={preAdd}>
            <IonIcon slot="start" icon={addOutline} />
            ADD
          </IonButton>
        </div>
      </IonList>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={'Alert'}
        // subHeader={'Subtitle'}
        message={'Please enter both channel and size info!'}
        buttons={['OK']}
      />
    </div>
  );
};
export default NewQuestLite;
