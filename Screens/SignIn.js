import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { doc, addDoc, collection } from "firebase/firestore"; 
import {db} from "..//config/config.jsx"
import { authentication } from '..//config/config.jsx';

const SignIn = (props) => {

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const onChangeUserName = (userName) => {
    setUserName(userName);
  }

  const onChangePassword = (password) => {
    setPassword(password);
  }

  const onPressSignIn = () => {

    addDoc(collection(db, "users"), {
      userName: userName,
      password: password
    });
    props.navigation.replace('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.rectanglesContainer}>
        <View style={[styles.rectangle, styles.fourth]} />
        <View style={[styles.rectangle, styles.third]} />
        <View style={[styles.rectangle, styles.second]} />
        <View style={[styles.rectangle, styles.first]} />
      </View>

      {/* Additional layer */}
      <View style={styles.overlay}>
        
        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          style={styles.input}
          value={userName}
          onChangeText={onChangeUserName}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
        />
        
        
        <TouchableOpacity style={styles.overlayButton} onPress={onPressSignIn}>
          <Text style={styles.overlayButtonText}>Login to Your Account</Text>
        </TouchableOpacity>

        <Image
          source={require('../asset/CompanyLogo.png')} // Update the path to the asset folder
          style={styles.overlayImage}
        />

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#042476',
  },
  rectanglesContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  rectangle: {
    position: 'absolute',
  },
  fourth: {
    backgroundColor: '#EF484C',
    width: 120,
    height: 120,
    left: 0,
  },
  third: {
    backgroundColor: '#43506C',
    width: 180,
    height: 180,
    bottom: 0,
  },
  second: {
    backgroundColor: '#EF484C',
    width: 70,
    height: 70,
    right: 0,
  },
  first: {
    backgroundColor: '#43506C',
    width: 80,
    height: 80,
    left: 50,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: 250,
    height: 50,
    marginBottom: 10,
    marginTop: 25,
  },
  input:{
    width: '80%',
    height: 40,
    backgroundColor: '#042476',
    borderBottomColor: '#89CFF0', // This sets the color to white
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
  ,
  
  overlayButton: {
    backgroundColor: '#F03B3B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  overlayButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayText: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 14,
    color: 'white',
    bottom: -130,
  },
});

export default SignIn;
