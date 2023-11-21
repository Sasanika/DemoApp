import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const confirmBookings = [
  {
    BookingId: "1",
    Time: "9.30 AM",
    Date: "2023/08/26",
    RoomName: "Training Room",
    Purpose: "Training session",
  }
];

const getDataFromAsyncStorage = async() => {
  try {
    const value = await AsyncStorage.getItem('name');
      if (value !== null) {
         // We have data!!
         console.log(value);
      }
   } catch (error) {
        console.log(error);
 }
}

const onPress = () => console.log('pressed');

function Screen32(props) {
  getDataFromAsyncStorage()
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      
      <TouchableOpacity
        onPress={() => props.navigation.replace('BookNewSpace')} // Use navigation.replace here
        style={{ position: 'absolute', top: 15, left: 20, zIndex: 1 }}
      >
        <Icon name="arrow-left" size={30} color="red" />
      </TouchableOpacity>

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={[styles.container, { flexDirection: 'column' }]}>
          <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View
              style={[
                styles.container,
                {
                  flexDirection: 'row',
                  paddingTop: 30,
                },
              ]}
            >
              <View style={{ flex: 1, backgroundColor: '#D9D9D9', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, padding: 25 }}>
                <View>
                  {confirmBookings.map((booking) => (
                    <View key={booking.BookingId} style={styles.bookingContainer}>
                      <Text style={{ borderColor: 'black', borderBottomWidth: 1, paddingBottom: 4 }}>Booking ID: {booking.BookingId}</Text>
                      <Text style={{ borderColor: 'black', borderBottomWidth: 1, paddingBottom: 4 }}>Time: {booking.Time}</Text>
                      <Text style={{ borderColor: 'black', borderBottomWidth: 1, paddingBottom: 4 }}>Date: {booking.Date}</Text>
                      <Text style={{ borderColor: 'black', borderBottomWidth: 1, paddingBottom: 4 }}>Room Name: {booking.RoomName}</Text>
                      <Text style={{ borderColor: 'black', borderBottomWidth: 1, paddingBottom: 4 }}>Purpose: {booking.Purpose}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={{ flex: 1, backgroundColor: '#D9D9D9', borderTopRightRadius: 15, borderBottomRightRadius: 15, padding: 5 }}>
                <Image style={styles.img} source={require('../asset/illus6.png')} />
              </View>
            </View>
          </View>

          <View style={{ flex: 1, backgroundColor: 'white', padding: 25, alignItems: 'center', justifyContent: 'center' }}>
            {confirmBookings.map((booking, index) => (
              <View key={index} style={styles.bookingItem}>
                <Text>
                  <Text>{booking.RoomName} </Text>
                  for a
                  <Text> {booking.Purpose}</Text>
                  <Text> {booking.Date} </Text>
                  at
                  <Text> {booking.Time}</Text>
                </Text>
              </View>
            ))}

            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Confirm Booking</Text>
            </TouchableOpacity>

            <View>
              <Text style={{ top: 15, fontSize: 14 }}>Optional: </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('QRCode')}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Generate QR Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    top: 20,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 14,
    borderRadius: 20,
    margin: 10,
  },

  img: {
    width: 140,
    height: 120,
    right: 15,
    top: 30,
  },
});

export default Screen32;
