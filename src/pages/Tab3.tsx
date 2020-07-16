import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <p>
            This is the cross platform port of my single page web app for tracking sea monster hunting guild quest in
            BDO.
          </p>
          <p>
            You could find the origin spa <a href="http://bologs.gp02a.com/tools/smh-timer">here</a>, and the github
            page for this project <a href="https://github.com/GP02A/smh-ionic">here</a>.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
