import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { IconButton, MD3Colors, Searchbar } from 'react-native-paper';
import React from 'react';
import 'react-native-gesture-handler';

const meetingRooms = [
  {
    id: 1,
    name: "Conference Room A",
    photoUrl: '../asset/room1.jpg', // Use local image require statement
    description: "A spacious conference room for large meetings.",
  },
  {
    id: 2,
    name: "Meeting Room B",
    photoUrl: '../asset/room2.jpg', // Use local image require statement
    description: "A luxurious suite for high-profile meetings.",
  },
  {
    id: 3,
    name: "Executive Suite",
    photoUrl: '../asset/room3.jpg', // Use local image require statement
    description: "A spacious conference room for large meetings.",
  },
  {
    id: 4,
    name: "Collaboration Corner",
    photoUrl: '../asset/room4.jpg', // Use local image require statement
    description: "A casual space for brainstorming and collaboration.",
  },
  {
    id: 5,
    name: "Training Room",
    photoUrl: '../asset/room5.jpg', // Use local image require statement
    description: "Equipped with technology for interactive training sessions.",
  },
  {
    id: 6,
    name: "Quiet Room",
    photoUrl: '../asset/room6.jpg', // Use local image require statement
    description: "A serene space for focused individual work.",
  },
  {
    id: 7,
    name: "Innovation Hub",
    photoUrl: '../asset/room7.jpg', // Use local image require statement
    description: "An open area designed to foster creativity and innovation.",
  },
  
  
  
  // Add more rooms as needed
];

// Helper function to map photoUrls to require statements
const getRoomImage = (photoUrl) => {
  switch (photoUrl) {
    case '../asset/room1.jpg':
      return require('../asset/room1.jpg');
    case '../asset/room2.jpg':
      return require('../asset/room2.jpg');
    case '../asset/room3.jpg':
      return require('../asset/room3.jpg');
    case '../asset/room4.jpg':
        return require('../asset/room4.jpg');
    case '../asset/room5.jpg':
        return require('../asset/room5.jpg');
    case '../asset/room6.jpg':
        return require('../asset/room6.jpg'); 
    case '../asset/room7.jpg':
        return require('../asset/room7.jpg');   
    
    default:
      return null;
  }
};




function Screen1(props) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const filteredRooms = meetingRooms.filter(room => {
    const searchTerm = searchQuery.toLowerCase();
    return room.name.toLowerCase().includes(searchTerm) || room.description.toLowerCase().includes(searchTerm);
  });

  return (
    <View style={styles.container}>
      
       
        
      
      <Searchbar
          placeholder="Discovere Spaces"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
      <ScrollView>
        <View style={styles.roomList}>
          {filteredRooms.map(room => (
            <View key={room.id} style={styles.roomItem}>
              <Image source={getRoomImage(room.photoUrl)} style={styles.roomPhoto} />
              <View>
                <Text style={styles.roomName}>{room.name}</Text>
                <Text style={styles.roomDescription}>{room.description}</Text>
              </View>
            </View>
          ))}
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  filterOptions: {
    marginBottom: 20,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  suggestions: {},
  suggestionsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  roomList: {
    marginTop: 10,
  },
  roomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black', // Changed shadow color to black
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1, // Adjusted shadow opacity
    shadowRadius: 3,
    elevation: 5, // Added elevation for Android shadows
  },
  
  roomPhoto: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 16,
    width: 210,
    color: 'gray',
  },
});

export default Screen1;