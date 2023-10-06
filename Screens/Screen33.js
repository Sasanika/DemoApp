import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

function Screen33(props) {
    console.log(props);
  return (
    <View>
      <Text>Screen33</Text>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Screen34')}>
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

export default Screen33;