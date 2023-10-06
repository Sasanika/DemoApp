import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

function Screen31(props) {
    console.log(props);
  return (
    <View>
      <Text>Screen31</Text>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Screen32')}>
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

export default Screen31;