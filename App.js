import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator,Platform,SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './src/screens/Details';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Thin':require('./assets/fonts/Poppins-Thin.ttf')
  });
  if(!loaded){
    return (
      <View style={[styles.container, styles.horizontal]}>
 
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  
    )
  }
  else{
    return (
      <>
      
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="light"/>
      </>
      
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  droidSafeArea: {
    flex: 1,
    
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
}); 
