
import {  Text, View, StyleSheet,Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './file/Screen'; 

import Screen2 from './file/Second';
// import Screen3 from './file/Screen3';

const Stack =createNativeStackNavigator();


  export default App=()=> {
  return (
  <NavigationContainer>
     <Stack.Navigator
      screenOptions={{ headerShown: false }}
     >  

     <Stack.Screen name=" First" component={Screen1}/> 
     <Stack.Screen name="Screen2" component={Screen2}/> 
     {/* <Stack.Screen name="Screen3" component={Screen3}/>  */}
    

    </Stack.Navigator>
   </NavigationContainer>

  )}


     
  