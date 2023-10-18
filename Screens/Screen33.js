import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  Button,
  Platform,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

const Screen33 = () => {
  const [QRCodeText, setQRCodeText] = useState('default');
  const qrCodeRef = useRef(null);
  const viewShotRef = useRef(null);

  const handleDownloadQRCode = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          alert('Permission denied');
          return;
        }
      }
      await viewShotRef.current.capture().then(async (uri) => {
        const path = RNFS.PicturesDirectoryPath + `/${QRCodeText}.png`;
        await RNFS.moveFile(uri, path);
        await RNFS.scanFile(path);
        alert('QR code has been downloaded successfully');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1.0 }}>
        <QRCode
          ref={qrCodeRef}
          value={QRCodeText} // Use QRCodeText instead of QRCode
          size={200}
          color='black'
          backgroundColor='white'
        />
      </ViewShot>
      <TextInput
        style={{ backgroundColor: 'lightgray', width: '90%', margin: 30 }}
        onChangeText={(text) => setQRCodeText(text)} // Update state variable
      />
      <Button title="Download QR Code" onPress={handleDownloadQRCode} />
    </View>
  );
};

export default Screen33;
