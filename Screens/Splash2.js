import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

function Splash2(props) {
    console.log(props);
  return (
    <View>
      <Text>Book a space for your team meetings, presentations, or brainstorming sessions.
            Reserve equipment like projectors or whiteboards with just a few taps.
            Sync your bookings with your personal calendar for better organization.</Text>
      

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Home')}>
          <Text>Share Your Space</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

});

export default Splash2;