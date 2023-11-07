
import {  Text, View,Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import Screen1 from './file/Screen'; 

import Screen2 from './file/Second';



import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack =createNativeStackNavigator();


  export default App=()=> {
  return (
  <NavigationContainer>
     <Stack.Navigator
      screenOptions={{ headerShown: false }}
     >  

     <Stack.Screen name=" First" component={Screen1}/> 
     <Stack.Screen name="Screen2" component={Screen2}/> 
     

    </Stack.Navigator>
   </NavigationContainer>

  )}

     

     