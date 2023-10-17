import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';

const meetingRooms = [
  { label: 'Open Workstation 1', value: 'open1', capacity: 50 },
  { label: 'Open Workstation 2', value: 'open2', capacity: 50 },
  { label: 'Open Workstation 3', value: 'open3', capacity: 50 },
  { label: 'Conference Room 1', value: 'conf1', capacity: 10 },
  { label: 'Conference Room 2', value: 'conf2', capacity: 20 },
  { label: 'Conference Room 3', value: 'conf3', capacity: 6 },
  { label: 'Coffee Bar Tables', value: 'coffee', capacity: 4 },
  { label: 'Quiet Study Area Tables', value: 'quiet', capacity: 1 },
  { label: 'Training Room', value: 'training', capacity: 40 },
  { label: 'Mini Meeting Room 1', value: 'mini1', capacity: 10 },
  { label: 'Mini Meeting Room 2', value: 'mini2', capacity: 5 },
];

const BookNewSpace = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedAttendees, setSelectedAttendees] = useState(2);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  useEffect(() => {
    // Enable Save button only when all required data is entered
    if (
      selectedDate &&
      selectedTime &&
      selectedAttendees
      // Add other conditions for required data
    ) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
  }, [selectedDate, selectedTime, selectedAttendees /* Add other dependencies */]);

  const handleSave = () => {
    // Perform save action here
    console.log('Save button clicked');
    // You can navigate to another screen using navigation.replace or other navigation functions here
    // Example: navigation.replace('Screen32');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../asset/illus5.png')} />
          </View>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <TextInput style={styles.input} placeholder="Enter the meeting title" />
          <TextInput style={styles.input} placeholder="Enter the purpose" />
          <TextInput style={styles.input} placeholder="Contact number or email" />
          <View style={styles.pickerContainer}>
            <Text>Select number of attendees:</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedAttendees}
              onValueChange={(itemValue) => setSelectedAttendees(itemValue)}
            >
              {Array.from({ length: 49 }, (_, i) => i + 2).map((num) => (
                <Picker.Item key={num} label={`${num} attendees`} value={num} />
              ))}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Text>Select a resource:</Text>
            <Picker style={styles.picker}>
              <Picker.Item label="Select a resource" value="select" />
              {meetingRooms
                .filter((room) => room.capacity >= selectedAttendees)
                .map((room) => (
                  <Picker.Item key={room.value} label={room.label} value={room.value} />
                ))}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Text>Select a date:</Text>
            <IconButton
              icon="calendar"
              iconColor={MD3Colors.error50}
              size={30}
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date !== undefined) {
                    setSelectedDate(date);
                  }
                }}
              />
            )}
          </View>
          <View style={styles.pickerContainer}>
            <Text>Select a time:</Text>
            <IconButton
              icon="clock"
              iconColor={MD3Colors.error50}
              size={30}
              onPress={() => setShowTimePicker(true)}
            />
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="default"
                onChange={(event, time) => {
                  setShowTimePicker(false);
                  if (time !== undefined) {
                    setSelectedTime(time);
                  }
                }}
              />
            )}
          </View>
          <Text style={styles.selectedDateText}>
            Selected Date: {selectedDate.toDateString()}
          </Text>
          <Text style={styles.selectedTimeText}>
            Selected Time: {selectedTime.toLocaleTimeString()}
          </Text>
          <View style={styles.saveButtonContainer}>

          <TouchableOpacity
    onPress={() => props.navigation.replace('Screen32')}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isSaveEnabled ? 'red' : 'gray',
      width: 150,
      padding: 15,
      justifyContent: 'center',
      borderRadius: 15,
    }}
    disabled={!isSaveEnabled}
  >
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Save</Text>
  </TouchableOpacity>
          
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

function Screen31(props) {
  console.log(props);
  return (
      
      <BookNewSpace navigation={props.navigation} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  saveButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectedTimeText: {
    fontSize: 16,
  },
  
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
  },
  pickerContainer: {
    marginBottom: 10,
  },
  // Add your other styles here
});

export default Screen31;
