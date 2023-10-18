import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const Splash2 = ({ navigation }) => {
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
          source={require('../asset/illus3.png')} // Update the path to the asset folder
          style={styles.overlayImage}
        />
        <Text style={styles.overlayText}>
          • Book a space for your team meetings, presentations, or brainstorming sessions.{'\n'}
          • Reserve equipment like projectors or whiteboards with just a few taps.{'\n'}
          • Sync your bookings with your personal calendar for better organization.{'\n'}
        </Text>
        <TouchableOpacity
          style={styles.overlayButton}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.overlayButtonText}>Share Your Space</Text>
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
    width: '70%',
    height: 700,
    transform: [{ rotate: '45deg' }],
  },
  second: {
    backgroundColor: '#4465DA',
    position: 'absolute',
    top: -20,
    right: 50,
    width: '80%',
    height: 400,
    transform: [{ rotate: '25deg' }],
  },
  first: {
    backgroundColor: '#042476',
    position: 'absolute',
    top: -70,
    right: 80,
    width: '60%',
    height: 600,
    transform: [{ rotate: '55deg' }],
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

export default Splash2;
