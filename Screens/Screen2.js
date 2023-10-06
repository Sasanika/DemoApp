import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

function Screen2({ notifications, clearAllNotifications }) {
  return (
    <View style={styles.container}>
      
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.notificationItem}>
          <Image source={item.profilePhoto} style={styles.profilePhoto} />
          <View>
            <Text>{item.content}</Text>
            <Text>{item.timestamp}</Text>
          </View>
        </View>
      )}
    />
    <TouchableOpacity
      onPress={() => {
        // Handle the "Clear All" action here
        clearAllNotifications();
      }}
      style={styles.clearButton}
    >
      <Text style={styles.clearButtonText}> Clear All</Text>
    </TouchableOpacity>
</View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  clearButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  clearButtonText: {
    color: '#F03B3B',
    fontWeight: 'bold',
    fontSize: 18 // Adjust the color as needed
  },
});

export default Screen2;