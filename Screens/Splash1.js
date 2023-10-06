import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

function Splash1(props) {
    console.log(props);
  return (
    <View>
      <Text>Browse through the available resources on the Dashboard.
            Use the Search Bar and Filters to find the perfect space.
            Select the desired resource and proceed to book.</Text>
      

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Splash2')}>
          <Text>It's easy to use</Text>
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

export default Splash1;