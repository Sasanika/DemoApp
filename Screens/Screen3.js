import React, { useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

const initialBookings = [
  {
    BookingId: "1",
    Time: "9.30 AM",
    Date: "2023/08/26",
    RoomName: "Training Room",
    Purpose: "Training session",
  },
  {
    BookingId: "2",
    Time: "10.30 AM",
    Date: "2023/08/26",
    RoomName: "Cozy Cafe Table",
    Purpose: "A gathering",
  },
  {
    BookingId: "3",
    Time: "11.30 AM",
    Date: "2023/08/26",
    RoomName: "Open Workstation 1",
    Purpose: "Executive Suite",
  },
  {
    BookingId: "4",
    Time: "1.30 PM", // Corrected the time format
    Date: "2023/08/26",
    RoomName: "Conference room 1",
    Purpose: "Conference meeting room 1",
  },
  {
    BookingId: "5",
    Time: "3.30 PM", // Corrected the time format
    Date: "2023/08/26",
    RoomName: "Mini meeting room 1",
    Purpose: "Learning session",
  },
  {
    BookingId: "6",
    Time: "9.30 AM",
    Date: "2023/08/27",
    RoomName: "Quiet Study Area",
    Purpose: "Study time",
  },
  {
    BookingId: "7",
    Time: "9.30 AM",
    Date: "2023/08/28",
    RoomName: "Open Workstation 3",
    Purpose: "Scrum Meeting",
  },
  // Add more bookings as needed
];

function Screen3(props) {
  const [bookings, setBookings] = useState(initialBookings);

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.BookingId !== id);
    setBookings(updatedBookings);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 7, backgroundColor: 'white' }}>
        <TouchableOpacity style={styles.bookButton} onPress={() => props.navigation.replace('BookNewSpace')}>
          <IconButton icon="plus-circle" color="blue" size={30} />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../asset/illus4.png')} // Corrected the image source
          />
        </View>
        <ScrollView>
          <View style={styles.roomList}>
            {bookings.map((booking) => (
              <View key={booking.BookingId} style={styles.bookingItem}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleDeleteBooking(booking.BookingId)}>
                    <IconButton icon="delete" color="red" size={30} />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                  <Text><Text style={styles.redText}>Booking {booking.BookingId}: </Text>{booking.Time}</Text>
                  <Text><Text style={styles.redText}>Date: </Text>{booking.Date}</Text>
                  <Text style={styles.boldText}>{booking.RoomName}</Text>
                  <Text><Text style={styles.redText}>Purpose: </Text>{booking.Purpose}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  roomList: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bookingItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  redText: {
    color: 'red',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Screen3;
