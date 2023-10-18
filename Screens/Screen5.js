import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import 'react-native-gesture-handler';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false); // Set to false initially

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Implement logic to update notification preferences in your app.
  };

  const handleSignOut = () => {
    // Implement logic to sign the user out of the app.
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ margin: 20, fontWeight: 'bold' }}>
          Toggle notifications on or off to stay updated with the latest news and updates from our app.
          When notifications are enabled, you'll receive timely alerts about new content and important announcements.
        </Text>
        <ToggleSwitch
          isOn={notificationsEnabled}
          onColor="gray"
          offColor="red"
          label="Notifications"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="large"
          onToggle={toggleNotifications}
        />
        <Text style={{ margin: 20, fontWeight: 'bold' }}>
          Signing out will log you out of your account and remove your access to the app.
          You can sign in again later to continue using our services.
        </Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Screen5(props) {
  return (
    <Setting />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 3,
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 150,
    padding: 12,
  },
  signOutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Screen5;
