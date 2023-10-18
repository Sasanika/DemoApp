import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const Splash1 = ({ navigation }) => {
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
          source={require('../asset/illus2.png')} // Update the path to the asset folder
          style={styles.overlayImage}
        />
        <Text style={styles.overlayText}>
          • Browse through the available resources on the Dashboard.{'\n'}
          • Use the Search Bar and Filters to find the perfect space.{'\n'}
          • Select the desired resource and proceed to book.{'\n'}
        </Text>
        <TouchableOpacity
          style={styles.overlayButton}
          onPress={() => navigation.replace('Splash2')}
        >
          <Text style={styles.overlayButtonText}>It's Easy to Use</Text>
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
    height: 240,
    transform: [{ rotate: '45deg' }],
  },
  second: {
    backgroundColor: '#4465DA',
    position: 'absolute',
    top: -20,
    right: 50,
    width: '40%',
    height: 270,
    transform: [{ rotate: '25deg' }],
  },
  first: {
    backgroundColor: '#042476',
    position: 'absolute',
    top: -70,
    right: 80,
    width: '40%',
    height: 200,
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

export default Splash1;
