import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

function Splash(props) {
    console.log(props);
  return (
    <View>
      <Text>Log in using your company credentials or create a new account.Once logged in, you'll land on the app's Dashboard.</Text>
      

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Splash1')}>
          <Text>Let's Get Started</Text>
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

export default Splash;