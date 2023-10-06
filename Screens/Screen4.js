import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Linking, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import 'react-native-gesture-handler';



function Screen4(props) {

  const [isFlashOn, setIsFlashOn] = useState(false);

  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occurred', err)
    );

    // Display a confirmation alert
    Alert.alert(
      'Booking Confirmed',
      'You have successfully checked in to the meeting room.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]
    );
  };

  const toggleFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
           
            <Text style={styles.textBold}>QR Code Scan</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={toggleFlash}
          >
            <Text style={styles.buttonText}>
              {isFlashOn ? 'Turn Off Flashlight' : 'Turn On Flashlight'}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    marginBottom: 30,
  },
  textBold: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    fontSize: 21,
    color: 'white',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Screen4;