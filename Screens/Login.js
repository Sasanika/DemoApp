import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Login() {
  
    return (
      <View>
        <Text> Login </Text>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Home')}>
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


export default Login
