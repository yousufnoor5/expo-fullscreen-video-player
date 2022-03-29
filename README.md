# expo-fullscreen-video-player
An expo video player component that can be rotated to full screen landscape mode.

# Installation
```
npm i expo-fullscreen-video-player
```

# How to use
-> Import Video player component from expo-fullscreen-video-player
-> expo-fullscreen-video-player supports all the props that [Expo-av](https://docs.expo.dev/versions/latest/sdk/video/) supports.
-> One extra prop is 'fullscreenMode', by default its set to 'LANDSCAPE'. Possible values are : <br />

LANDSCAPE (string) - Any landscape orientation.<br />

LANDSCAPE_LEFT (string) - Left landscape only.<br />

LANDSCAPE_RIGHT (string) - Right landscape only.<br />

# Example

```JSX
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import VideoPlayer from 'expo-fullscreen-video-player';

export default function App() {

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      
       <VideoPlayer
       
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          resizeMode="cover"
          shouldPlay
          fullscreenMode = "LANDSCAPE"
          useNativeControls
          style={{ width: Dimensions.get('window').width, height: 200 }}
          
        />
      
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
