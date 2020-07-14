import React, { useEffect, useState, useRef } from 'react';
import { IonItem, IonPopover, IonBadge, IonLabel, IonList } from '@ionic/react';

const SmhqListItem = (props) => {
  const mounted = useRef(false);
  let timer;
  let run;

  const [remaining, setRemaining] = useState(props.value.sizetime);
  const [showPopover, setShowPopover] = useState({
    open: false,
    event: undefined,
  });

  useEffect(() => {
    mounted.current = true;
    // console.log('hit useeffect and set mounted.current to true:' + mounted.current);
    // console.log('props of item id:' + props.value.id + 'have change!');
    countdown();

    return () => {
      mounted.current = false;
      // console.log('hit return of useeffect!' + mounted.current);
      // console.log('props of item id:' + props.value.id + 'have been deleted!');
      clearInterval(run);
    };
  }, []);

  const countdown = () => {
    timer = remaining;
    // console.log(timer);

    run = setInterval(() => {
      if (timer > 0) {
        timer--;

        if (mounted.current) {
          setRemaining(timer);
        } else {
          clearInterval(run);
        }
        // console.log(timer);
        return timer;
      } else {
        clearInterval(run);
        if (mounted.current) {
          setRemaining(timer);
        }
      }
    }, 1000);
  };

  return (
    <IonItem button onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })} detail={false}>
      <IonLabel color="primary" position="fixed" slot="start" style={{ marginRight: '10px' }}>
        {props.value.channel}
      </IonLabel>
      <IonLabel>{Math.floor(remaining / 60) + ':' + (remaining % 60)}</IonLabel>
      <IonBadge color="primary" slot="end" style={{ marginLeft: '10px' }}>
        {props.value.size}
      </IonBadge>
      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={(e) => {
          // console.log('popover delete clicked' + mounted.current);
          if (mounted.current) {
            setShowPopover({ open: false, event: undefined });
          }
        }}
      >
        <IonList>
          <IonItem>Channel:{props.value.channel}</IonItem>
          <IonItem>Size: {props.value.size}</IonItem>
          <IonItem>Remaining(min:sec): {Math.floor(remaining / 60) + ':' + (remaining % 60)}</IonItem>
          <IonItem
            color="danger"
            button
            onClick={() => {
              props.onDeleteItem(props.value.id);
            }}
          >
            Delete
          </IonItem>
        </IonList>
      </IonPopover>
    </IonItem>
  );
};

export default SmhqListItem;
