import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
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

function FirstStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Screen7'
        component={Screen7}
        options={{ title: 'Help & Support' }}
      />
      <Stack.Screen
        name='Screen71'
        component={Screen71}
        options={{ title: 'Terms & Services' }}
      />
    </Stack.Navigator>
  );
}

function SecondStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Screen3' component={Screen3} options={{ title: 'My Bookings' }} />
      <Stack.Screen
        name='Screen31'
        component={Screen31}
        options={{ title: 'Book a New Space' }}
      />
      <Stack.Screen
        name='Screen32'
        component={Screen32}
        options={{ title: 'Booking Confirm' }}
      />
      <Stack.Screen name='Screen33' component={Screen33} options={{ title: 'QR Code' }} />
      
    </Stack.Navigator>
  );
}


function ThirdStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Screen6' component={Screen6} options={{ title: 'My Profile' }} />
      <Stack.Screen
        name='Screen61'
        component={Screen61}
        options={{ title: 'Edit Info' }}
      />
    </Stack.Navigator>
  );
}



function DraweRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Screen1' component={Screen1} options={{ title: 'Search' }} />
      <Drawer.Screen
        name='Screen2'
        component={Screen2}
        options={{ title: 'Notifications' }}
      />
      <Drawer.Screen 
        name='Screen3' 
        component={SecondStackRoutes}
        options={{ title: 'My Bookings' }}
      />
      <Drawer.Screen
        name='Screen4'
        component={Screen4}
        options={{ title: 'QR Code Scan' }}
      />
      <Drawer.Screen name='Screen5' component={Screen5} options={{ title: 'Settings' }} />
      <Drawer.Screen name='Screen6' 
        component={ThirdStackRoutes} 
        options={{ title: 'My Profile' }} 
        />
      <Drawer.Screen
        name='Screen7'
        component={FirstStackRoutes}
        options={{ title: 'Help & Support' }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Splash1' component={Splash1} />
        <Stack.Screen name='Splash2' component={Splash2} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={DraweRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
