import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import stack navigator
// import AppNavigator from './routes';

// import tab navigator
// import TabNavigator from './routes';

// import drawer navigator
// import DrawerNavigator from './routes';

// import multiple navigator
import MultipleNavigator from './routes';

export default function App() {
  return (

      // stack navigator
      // <AppNavigator />

      // tab navigator
      // <TabNavigator />

      // drawer navigator
      // <DrawerNavigator />

      // multiple navigator
      <MultipleNavigator />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
