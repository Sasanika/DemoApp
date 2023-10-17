import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';


const confirmBookings = [
  {
    BookingId : "1",
    Time : "9.30 AM",
    Date : "2023/08/26",
    RoomName : "Training Room",
    Purpose : "Training sesion",
  }];

  const onPress = () => console.log('pressed');




  const ConfirmBook = (props) => {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        
  
        <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
        style={[
          styles.container,
          {
            
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'white',padding: 20}}>
        <View
        style={[
          styles.container,
          {
            
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: '#D9D9D9', borderTopLeftRadius:15, borderBottomLeftRadius:15,padding:20,}}>
        <View>
        {confirmBookings.map((booking) => (
          <View key={booking.BookingId} style={styles.bookingContainer}>
            <Text style={{borderColor:'black', borderBottomWidth: 1,paddingBottom:4}}>Booking ID: {booking.BookingId}</Text>
            <Text style={{borderColor:'black', borderBottomWidth: 1,paddingBottom:4}}>Time: {booking.Time}</Text>
            <Text style={{borderColor:'black', borderBottomWidth: 1,paddingBottom:4}}>Date: {booking.Date}</Text>
            <Text style={{borderColor:'black', borderBottomWidth: 1,paddingBottom:4}}>Room Name: {booking.RoomName}</Text>
            <Text style={{borderColor:'black', borderBottomWidth: 1,paddingBottom:4}}>Purpose: {booking.Purpose}</Text>
          </View>
        ))}
      </View>
        </View>
        
        <View style={{flex: 1, backgroundColor: '#D9D9D9',borderTopRightRadius:15, borderBottomRightRadius:15, padding:5}}>
        <Image
          style={styles.img}
          source={require('../asset/illus6.png')}
        />
        </View>
      </View>
        </View>
  
        <View style={{flex: 1, backgroundColor: 'white', padding:25, alignItems:'center', justifyContent:'center' }}>
          
        {confirmBookings.map((booking, index) => (
        <View key={index} style={styles.bookingItem}>
          <Text><Text>{booking.RoomName} </Text> 
             for a 
            <Text> {booking.Purpose}</Text>
            <Text> {booking.Date} </Text>
             at 
            <Text> {booking.Time}</Text> 
            </Text>
            
          </View>
          ))}
  
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Confirm Booking</Text>
        </TouchableOpacity>
  
        <View><Text style={{top: 15, fontSize:14,}}>Optional: </Text></View>
  
        
  
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('Screen33')}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Generate QR Code</Text>
        </TouchableOpacity>
  
  
          
        </View>
        
      </View>
        </View>
      </View>
    );
  };
  




function Screen32(props) {
    
  return (
    <ConfirmBook navigation={props.navigation}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    top:20,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 14,
    borderRadius:20,
    margin: 10,
   
  },
  
  img: {
    width: 140,
    height: 120,
    right:15,  
    top:30,
  },
  
});

export default Screen32;