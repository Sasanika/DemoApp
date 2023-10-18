import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


const Splash0 = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: '#042476' }} />
      <View style={{ flex: 2, backgroundColor: '#042476', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../asset/AppLogo.png')} style={{ width: 135, height: 100 }} 
          resizeMode="cover" />
      </View>
      <View style={{ flex: 1, backgroundColor: '#042476', justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 5, padding: 15, color:'white', fontWeight:'bold' }}>Powered By</Text>
          <Image source={require('../asset/CompanyLogo.png')} style={{ width: 150, height: 25 }} 
            resizeMode="cover"  />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash0;
