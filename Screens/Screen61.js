import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, MD3Colors, TextInput, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Screen61(props) {
    const [text, setText] = useState('');
  
    const handleSaveButtonPress = () => {
      console.log('Save button pressed');
      // Add your saving logic here
    };
  
    return (
      <PaperProvider>
        <View style={styles.container}>
        <TouchableOpacity
        onPress={() => props.navigation.replace('MyProfile')} // Use navigation.replace here
        style={{ position: 'absolute', top: 15, left: 20, zIndex: 1 }}
      >
        <Icon name="arrow-left" size={30} color="red" />
      </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../asset/dp.jpg')} />
              <View style={styles.cameraIconContainer}>
                <IconButton
                  icon="camera"
                  size={38}
                  iconColor={MD3Colors.error50}
                  style={styles.cameraIcon}
                  onPress={() => console.log('Camera icon pressed')}
                />
              </View>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                label="Username"
                backgroundColor="white"
                value={text}
                onChangeText={text => setText(text)}
                theme={{
                  colors: {
                    primary: 'red', // Change the color of the label
                  },
                }}
              />
              <TextInput
                label="Workspace Email Address"
                backgroundColor="white"
                value={text}
                onChangeText={text => setText(text)}
                secureTextEntry
                theme={{
                  colors: {
                    primary: 'red', // Change the color of the label
                  },
                }}
              />
              <TextInput
                label="Department Name"
                backgroundColor="white"
                value={text}
                onChangeText={text => setText(text)}
                theme={{
                  colors: {
                    primary: 'red', // Change the color of the label
                  },
                }}
              />
              <TextInput
                label="Job Title"
                backgroundColor="white"
                value={text}
                onChangeText={text => setText(text)}
                theme={{
                  colors: {
                    primary: 'red', // Change the color of the label
                  },
                }}
              />
              <TextInput
                label="Job Title"
                backgroundColor="white"
                value={text}
                onChangeText={text => setText(text)}
                theme={{
                  colors: {
                    primary: 'red', // Change the color of the label
                  },
                }}
              />
              
              <Image style={styles.img} source={require('../asset/illus3.png')} />
              
              
              {/* Add more text inputs */}
            </View>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveButtonPress}
            >
              <Text style={styles.saveButtonText}>Save Details</Text>
            </TouchableOpacity>
            
          </ScrollView>
        </View>
      </PaperProvider>
    );
  };
  





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    imageContainer: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    img: {
      width: 150,
      height: 150,
      padding: 30,
      margin: 30,
    },
    cameraIconContainer: {
      position: 'absolute',
      right: 80,
      bottom: 0,
    },
    textInputContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    saveButton: {
      marginVertical: 15,
      marginHorizontal:90,
      marginBottom:30,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 5,
    },
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

export default Screen61;