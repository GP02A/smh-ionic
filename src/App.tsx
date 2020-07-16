import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, listOutline, informationCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [channel, setChannel] = useState('');
  const [size, setSize] = useState('notpick');
  const [sizetimer, setSizeTimer] = useState(0);
  const [nexttimerId, setNextimerId] = useState(1);
  const [timers, setTimers] = useState([]);
  //addlite
  const [channellite, setChannelLite] = useState('');
  const [sizelite, setSizeLite] = useState('notpick');
  const [sizetimerlite, setSizeTimerLite] = useState(0);
  // const [timerslite, setTimersLite] = useState([]);

  const handleChannelChange = (x) => {
    setChannel(x);
  };

  const handleSizeChange = (x) => {
    setSize(x);
    setSizeTimer(() => {
      if (x === 'small') {
        return 4 * 60 * 60;
      } else if (x === 'medium') {
        return 5 * 60 * 60;
      } else if (x === 'large') {
        return 6 * 60 * 60;
      } else if (x === 'xlarge') {
        return 7 * 60 * 60;
      }
    });
  };

  const handleAdd = () => {
    if (channel !== '' && size !== 'notpick') {
      if (nexttimerId === 1) {
        let newtimers = [{ id: nexttimerId, channel: channel, size: size, sizetime: sizetimer }];
        setTimers(newtimers);
        setNextimerId(nexttimerId + 1);
        setChannel('');
        setSize('notpick');
        setSizeTimer(0);
      } else {
        let newtimers = [...timers, { id: nexttimerId, channel: channel, size: size, sizetime: sizetimer }];
        setTimers(newtimers);
        setNextimerId(nexttimerId + 1);
        setChannel('');
        setSize('notpick');
        setSizeTimer(0);
      }
    } else {
      alert('Please enter both channel and size info');
    }
    // console.log(timers);
  };

  const handleChannelChangeLite = (x) => {
    setChannelLite(x);
  };

  const handleSizeChangeLite = (x) => {
    setSizeLite(x);
    setSizeTimerLite(() => {
      if (x === 'small') {
        return 4 * 60 * 60;
      } else if (x === 'medium') {
        return 5 * 60 * 60;
      } else if (x === 'large') {
        return 6 * 60 * 60;
      } else if (x === 'xlarge') {
        return 7 * 60 * 60;
      }
    });
  };

  const handleAddLite = () => {
    if (channellite !== '' && sizelite !== 'notpick') {
      if (nexttimerId === 1) {
        let newtimerslite = [{ id: nexttimerId, channel: channellite, size: sizelite, sizetime: sizetimerlite }];
        setTimers(newtimerslite);
        setNextimerId(nexttimerId + 1);
        setChannelLite('');
        setSizeLite('notpick');
        setSizeTimerLite(0);
      } else {
        let newtimers = [...timers, { id: nexttimerId, channel: channellite, size: sizelite, sizetime: sizetimerlite }];
        setTimers(newtimers);
        setNextimerId(nexttimerId + 1);
        setChannelLite('');
        setSizeLite('notpick');
        setSizeTimerLite(0);
      }
    } else {
      alert('Please enter both channel and size info');
    }
    // console.log(timers);
  };

  const handleDeleteItem = (x) => {
    console.log('delete timer id:' + x);
    setTimers([...timers.filter((timer) => timer.id !== x)]);
  };

  return (
    <IonApp>
      <IonReactRouter basename="/spa/smh-ionic">
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/tab1"
              render={(props) => (
                <Tab1
                  timers={timers}
                  nexttimerId={nexttimerId}
                  channellite={channellite}
                  sizelite={sizelite}
                  onDeleteItem={handleDeleteItem}
                  onChannelChangeLite={handleChannelChangeLite}
                  onSizeChangeLite={handleSizeChangeLite}
                  onAddLite={handleAddLite}
                />
              )}
              exact={true}
            />
            <Route
              path="/tab2"
              render={(props) => (
                <Tab2
                  channel={channel}
                  size={size}
                  onChannelChange={handleChannelChange}
                  onSizeChange={handleSizeChange}
                  onAdd={handleAdd}
                />
              )}
              exact={true}
            />
            <Route path="/tab3" component={Tab3} />
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={listOutline} />
              <IonLabel>Main</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={addCircleOutline} />
              <IonLabel>Add</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={informationCircleOutline} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
