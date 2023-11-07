import React from "react";
import { Button, Actionsheet, useDisclose, Text, Box, Center, NativeBaseProvider } from "native-base";
// import { Image } from "native-base";
import { ScrollView, Image, StyleSheet, View } from "react-native";

const Screen3 = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return <Center>
    <Button style={{ backgroundColor: '#191717', position: 'absolute' }} onPress={onOpen}></Button>
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Text fontSize=" 27px" color="purple.300" > Action Sheet</Text>
        <Box w="5%" h={60} px={4} justifyContent="center">
          <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.200"
          }}>
       </Text>
        </Box>



      <View style={{flexDirection:'row',margin:10}}>
           <Image style={{ width: 30, height: 30 }} source={require('./Image/googlephoto.png')} />
              <Actionsheet.Item marginTop='-15px' >Go to Photos</Actionsheet.Item>
     </View>
        <View style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 30, height:30}} source={require('./Image/folder.png')} />
          <Actionsheet.Item    marginTop='-15px' fontSize='15px'> create folder</Actionsheet.Item>
        </View>
        <View   style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 30, height: 30, }} source={require('./Image/play.png')} />
          <Actionsheet.Item   marginTop='-15px'> Play</Actionsheet.Item>
        </View>

        <View   style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 30, height: 30, }} source={require('./Image/fav.png')} />
          <Actionsheet.Item  marginTop='-15px'> Favourite</Actionsheet.Item>
        </View>

        <View  style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 25, height: 25 }} source={require('./Image/cancel.png')} />
          <Actionsheet.Item   marginTop='-15px'> Cancel</Actionsheet.Item>

        </View>







      </Actionsheet.Content>
    </Actionsheet>

  </Center>


}

export default Screen = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Screen3 />
      </Center>
    </NativeBaseProvider>
  );
};
