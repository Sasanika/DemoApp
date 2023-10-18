import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, MD3Colors, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

const MyProfile = (props) => {
  // State to hold user information
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    department: 'Engineering',
    jobTitle: 'Software Developer',
  });

  const handleSaveButtonPress = () => {
    console.log('Save button pressed');
    // Add your saving logic here
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../asset/dp.jpg')} />
            <View style={styles.cameraIconContainer}>
              
            </View>
          </View>
          <View style={styles.textInputContainer}>
  <Text style={styles.infoText}>
    <Text style={styles.boldText}>Username:</Text> {userData.username}
  </Text>
  <Text style={styles.infoText}>
    <Text style={styles.boldText}>Password:</Text> {userData.password}
  </Text>
  <Text style={styles.infoText}>
    <Text style={styles.boldText}>Workspace Email Address:</Text> {userData.email}
  </Text>
  <Text style={styles.infoText}>
    <Text style={styles.boldText}>Department Name:</Text> {userData.department}
  </Text>
  <Text style={styles.infoText}>
    <Text style={styles.boldText}>Job Title:</Text> {userData.jobTitle}
  </Text>
</View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => props.navigation.replace('Screen61')}
          >
            <Text style={styles.editButtonText}>Edit Details</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </PaperProvider>
  );
};


function Screen6(props) {
  return (
    <MyProfile navigation={props.navigation} />
  );
}

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
  infoText: {
    marginBottom: 10,
    fontSize: 16,
    borderBottomColor: 'gray',  // Change this to your desired color
    borderBottomWidth: 2,       // Change this to your desired border width
    fontSize: 16,
    marginBottom: 10,
    paddingVertical: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'red',
  },
  editButton: {
    marginLeft: 90,
    marginRight:90,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Screen6;