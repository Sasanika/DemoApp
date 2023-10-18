import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.rectangle, styles.third]} />
        <View style={[styles.rectangle, styles.second]} />
        <View style={[styles.rectangle, styles.first]} />
      </View>

      {/* Additional layer */}
      <View style={styles.overlay}>
        <Image
          source={require('../asset/illus1.png')} // Update the path to the asset folder
          style={styles.overlayImage}
        />
        <Text style={styles.overlayText}>
          Log in using your company credentials or create a new account.
          Once logged in, you'll land on the app's Dashboard.
        </Text>
        <TouchableOpacity
          style={styles.overlayButton}
          onPress={() => navigation.replace('Splash1')}
        >
          <Text style={styles.overlayButtonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43506C', // Change the background color to dark grey
  },
  rectangle: {
    flex: 1,
  },
  third: {
    backgroundColor: '#6394DD',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: 500,
  },
  second: {
    backgroundColor: '#4465DA',
    position: 'absolute',
    top: 0,
    right: '50%',
    width: '40%',
    height: 300,
  },
  first: {
    backgroundColor: '#042476',
    position: 'absolute',
    top: 0,
    right: '90%',
    width: '30%',
    height: 200,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  overlayText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  overlayButton: {
    backgroundColor: '#F03B3B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  overlayButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Splash;
