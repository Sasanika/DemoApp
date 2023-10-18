import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Splash0 from './Screens/Splash0';
import Splash from './Screens/Splash';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Home from './Screens/Home';
import Splash1 from './Screens/Splash1';
import Splash2 from './Screens/Splash2';
import Screen4 from './Screens/Screen4';
import Screen5 from './Screens/Screen5';
import Screen6 from './Screens/Screen6';
import Screen7 from './Screens/Screen7';
import Screen71 from './Screens/Screen71';
import Screen31 from './Screens/Screen31';
import Screen32 from './Screens/Screen32';
import Screen33 from './Screens/Screen33';
import Screen61 from './Screens/Screen61';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const FirstStackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name='HelpAndSupport' component={Screen7} options={{ title: 'Help & Support' }} />
    <Stack.Screen name='TermsAndServices' component={Screen71} options={{ title: 'Terms & Services' }} />
  </Stack.Navigator>
);

const SecondStackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name='MyBookings' component={Screen3} options={{ title: 'My Bookings' }} />
    <Stack.Screen name='BookNewSpace' component={Screen31} options={{ title: 'Book a New Space' }} />
    <Stack.Screen name='BookingConfirm' component={Screen32} options={{ title: 'Booking Confirm' }} />
    <Stack.Screen name='QRCode' component={Screen33} options={{ title: 'QR Code' }} />
  </Stack.Navigator>
);

const ThirdStackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name='MyProfile' component={Screen6} options={{ title: 'My Profile' }} />
    <Stack.Screen name='EditInfo' component={Screen61} options={{ title: 'Edit Info' }} />
  </Stack.Navigator>
);

const DrawerRoutes = () => (
  <Drawer.Navigator initialRouteName='ShareSpace'>
    <Drawer.Screen name='ShareSpace' component={Home} />
    <Drawer.Screen name='Search' component={Screen1} options={{ title: 'Search' }} />
    <Drawer.Screen name='Notifications' component={Screen2} options={{ title: 'Notifications' }} />
    <Drawer.Screen name='MyBookings' component={SecondStackRoutes} options={{ title: 'My Bookings' }} />
    <Drawer.Screen name='QRCodeScan' component={Screen4} options={{ title: 'QR Code Scan' }} />
    <Drawer.Screen name='Settings' component={Screen5} options={{ title: 'Settings' }} />
    <Drawer.Screen name='Profile' component={ThirdStackRoutes} options={{ title: 'My Profile' }} />
    <Drawer.Screen name='Support' component={FirstStackRoutes} options={{ title: 'Help & Support' }} />
  </Drawer.Navigator>
);

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading resources)
    // Replace this with your actual loading logic
    setTimeout(() => {
      setAppIsReady(true);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <NavigationContainer>
      {appIsReady ? (
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Splash1' component={Splash1} />
          <Stack.Screen name='Splash2' component={Splash2} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={DrawerRoutes} />
        </Stack.Navigator>
      ) : (
        <Splash0 />
      )}
    </NavigationContainer>
  );
};

export default App;
