import React from 'react';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';

export default function VideoPlayer({fullscreenMode = "LANDSCAPE" ,onFullscreenUpdate , ...props}) {

   const setOrientation = async () => {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock[fullscreenMode]);
    }
    else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }
  
  const onFullScreen = () => {
      setOrientation();
     
     if(onFullscreenUpdate !== undefined){
         onFullscreenUpdate();
     }
  }
  
  return (
       <Video
          {...props}
          onFullscreenUpdate={onFullScreen}
        />
  );
}
