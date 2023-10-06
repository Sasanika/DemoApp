import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../asset/dp.jpg')} // Update with the actual profile photo
          style={styles.profilePhoto}
        />
        <Text style={styles.username}>Welcome Back! Alice.</Text>
      </View>
      <View style={styles.notificationIcon}>
      
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
          {/* Upcoming Bookings Component */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Set flexDirection to 'column'
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#042476',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 80,
    marginBottom: 10,
  },
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  contentContainer: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row', // Set flexDirection to 'row'
  },
  section: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
});

export default Home;