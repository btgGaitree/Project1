import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, marginBottom } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import Screen3 from './Screen3';
//  import Screen3 from './Screen3';
 import { Button, Actionsheet, useDisclose, NativeBaseProvider } from "native-base";


const DatePicker = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (

    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={{ fontSize: 15, flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* <Image style={{ width: 15, height: 15, marginLeft: 5, marginTop: 10 }} source={require('./Image/cal2.png')}></Image> */}
          {/* <Text style={{ padding: 10, color: '#454545' }}>Select a date</Text> */}
          

          <Image style={{ width: 30, height: 30 }} source={require('./Image/cal2.png')} />

<TextInput placeholderTextColor={'grey'} style={{ fontSize: 13, marginLeft: 68 }} placeholder="Select a date" />


        </View>
      </TouchableOpacity>

      <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm}
        onCancel={hideDatePicker} />
    </View>


  )
};
// *****************************




function Screen2 () {
const{
  isOpen,
onOpen,
onClose
} = useDisclose();
 

  return (

     <View>

    <ScrollView>
     
      <LinearGradient colors={['black', '#5B2C6F', 'black']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

        
       <View >
        <TouchableOpacity
                style={[Styles.Searchbar, { marginTop: 80,marginRight:20, marginLeft: 20 ,marginRight:20}]}>
                <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 20, height: 20, marginTop: 15 ,marginRight:20}} source={require('./Image/search.png')} />
            <TextInput  placeholderTextColor={'grey'}
            style={[Styles.text ,{flexWrap:'wrap',marginLeft:10}]}
              placeholder=' search for party by name , type or venue ' />
          </View>

        </TouchableOpacity>
        </View>
        <View>

          {/* --------------------------------------------DATE------------------------ */}
           <View
            style={[Styles.Searchbar, { marginLeft: 20 }]}>
             

            <View style={{ flexDirection: 'row' }}>
            <Text style={{ borderTopWidth: 1 }}>{DatePicker()}</Text>
              </View> 
          </View>

        </View>
   {/* --------------------------------------------DATE------------------------ */}
        <View>
          <TouchableOpacity
            style={[Styles.Searchbar, { marginLeft: 20, backgroundColor: '#8E44AD' }]}
          >
            <Text style={{ textAlign: 'center', margin: 11, fontSize: 14}}> SEARCH </Text>
          </TouchableOpacity>

        </View>


        <View>
          <Text style={{ fontSize: 17, fontWeight: 23, marginTop: 10, marginLeft: 2,color:'white' }}> Events I'm invited to</Text>

          <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 3 ,color:'white'}}> Events where you were invited  {"  "}</Text>
        </View>
        <Text style={Styles.view}> View all</Text>
        
        <ScrollView horizontal={true} >
        <View style={{ flex: 2, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text> {"       "}</Text>

          <View style={{}}>
          
            <Image Style={[Styles.img,{ marginLeft:13,borderRadius:20}]} source={require('./Image/img1.jpeg')} 
            />
              <View style={{position:'absolute', marginRight:146,marginHorizontal:240,marginTop:10}}>
            <Image  source={require('./Image/heart.png')}/>
            </View>
              <View  style={{position:'absolute', marginTop:146,marginLeft:10}}>
                <Text style={{fontWeight:20, fontSize:14,color:'white'}}>Event Name</Text>
              <Text style={{fontSize:10,color:'white'}}>January 1,2024 - 6:00pm</Text>
               
                </View>
              <View style={{position:'absolute',marginRight:146,marginHorizontal:240, marginVertical:150 }}>
                    <Image style={{width:20 ,height:20, borderRadius:50}} source={require('./Image/daniel.jpeg')}/>
                    </View>
                    <View   style={{position:'absolute',marginRight:150,marginBottom:1,marginHorizontal:215, marginVertical:150 }}>
                    <Image style={{width:20 ,height:20, borderRadius:50,marginRight:30}} source={require('./Image/gaitree_icon.jpg')}/>
                  </View>
              


            </View>
            <Text> {"       "}</Text>
            <Image source={require('./Image/img4.jpeg')} />
            <Text> {"       "}</Text>
            <Image Style={Styles.img} source={require('./Image/img10.jpeg')} />
          </View>
        </ScrollView>



        <Text style={{ fontSize: 17, fontWeight: 23, marginTop: 20,color:'white' }}>
          {"  "}
          Highly anticipated events
        </Text>

        <Text style={{ fontSize: 13, margin: 2 ,color:'white'}}>
          {"  "}
          Most anticipated events based on user preferences</Text>

<View style={{flexDirection:'row'}}>
     <TouchableOpacity style={Styles.buttonstyles}  >
             <Image style={{ width: 15, height: 15, marginLeft: 15, marginTop: 6 }} source={require('./Image/sort.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6 ,color:'white'}}> sort </Text>
           
            </TouchableOpacity>

         <TouchableOpacity onPress={onOpen} style={Styles.buttonstyles}  >
             <Image style={{ width: 15, height: 15, marginLeft: 15, marginTop: 6 }} source={require('./Image/filter.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6 ,color:'white'}}> Filter </Text>
           
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.buttonstyles,{width:110}]}  >
             <Image style={{ width: 15, height: 15, marginLeft: 12, marginTop: 6 ,}} source={require('./Image/map.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6 ,marginLeft:6,color:'white'}}>VIEW ON MAP </Text>
            </TouchableOpacity>
            </View>


        <Text style={Styles.view}> View all</Text>
        <View style={{ flexDirection: 'row',marginLeft:1,marginTop: 4,borderRadius:10}}>
          <ScrollView horizontal={true}>
            <Text> {"       "}</Text>
            <Image Style={{ marginLeft:10}} source={require('./Image/img10.jpeg')} />

            <View  style={{ marginTop:120,marginRight:70,position:'absolute'}}>
                <Text style={{fontWeight:20, fontSize:14,color:'white', marginLeft:70,marginTop:20}}>Event Name</Text>
              <Text style={{fontSize:10,color:'white',marginLeft:70}}>March 4,2024 - 7:00pm</Text>
              </View>
          
              <View style={{position:'absolute',marginLeft:300,marginTop:155,marginRight:10}}>
                    <Image style={{width:20 ,height:20, borderRadius:50}} source={require('./Image/daniel.jpeg')}/>
                    </View>
                    <View   style={{position:'absolute',marginRight:150,marginBottom:1,marginHorizontal:250, marginVertical:157 }}>
                    <Image style={{width:20 ,height:20, borderRadius:50,marginLeft:25,marginBottom:3}} source={require('./Image/gaitree_icon.jpg')}/>
                  </View> 
            <Text> {"       "}</Text>

            <View style={{position:'absolute' ,marginRight:149,marginHorizontal:300,marginTop:10}}>
            <Image  source={require('./Image/heart.png')}/>
            </View>

            


            <Image Style={{ height: 0, width: 30, borderRadius:20 }} source={require('./Image/img1.jpeg')} />
            <Text> {"       "}</Text>
            <Image Style={{  borderRadius: 8 }} source={require('./Image/img4.jpeg')} />
          </ScrollView>
        </View>

      </LinearGradient>

    </ScrollView>

<View >
<Actionsheet isOpen={isOpen} onClose={onClose}>



      <Actionsheet.Content >
        <View >
        <Text style={{fontSize:23, fontWeight:500,color:'purple' ,marginTop:'10'}}>Actionsheet</Text>
        </View>
        
      <View style={{flexDirection:'row',margin:10}}>
           <Image style={{ width: 30, height: 30 }} source={require('./Image/googlephoto.png')} />
              <Actionsheet.Item marginTop='-15px' marginRight={'2px'} >Go to Photos</Actionsheet.Item>
     </View>
        <View style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 23, height:30}} source={require('./Image/folder.png')} />
          <Actionsheet.Item    marginTop='-19px'  marginRight='-2px'> create folder</Actionsheet.Item>
        </View>
        <View   style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 30, height: 30, }} source={require('./Image/play.png')} />
          <Actionsheet.Item   marginTop='-15px'  marginRight={'2px'}> Play</Actionsheet.Item>
        </View>

        <View   style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 30, height: 30, }} source={require('./Image/fav.png')} />
          <Actionsheet.Item  marginTop='-15px' marginRight={'2px'}> Favourite</Actionsheet.Item>
        </View>

        <View  style={{flexDirection:'row',margin:10}}>
          <Image style={{ width: 25, height: 22 }} source={require('./Image/cancel.png')} />
          <Actionsheet.Item   marginTop='-19px' marginRight={'2px'}> Cancel</Actionsheet.Item>

        </View>

      </Actionsheet.Content>
    </Actionsheet>
</View>






    </View>

  )
};

export default () => {
  return (
    <NativeBaseProvider>
       <View>
     
      <Screen2/>
      </View>
 </NativeBaseProvider>
  );
};




const Styles = StyleSheet.create({
  Searchbar: {
    fontSize: 10,

    width: 320,
    height: 50,
    borderColor: 'grey'
    , borderRadius: 10,
    borderWidth: 1,
    // color: 'white',
    backgroundColor: "#191717",


  },
  // image: {
  //   flexDirection: 'row',

  // },
  img: {
    height: 10, width: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',

  },
  text: {
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 13
  },
  view: {
    textAlign: 'right',
    margin: 4,
    textDecorationLine: 'underline',
    marginLeft:2,
    color: '#9B59B6'
  },
  buttonstyles: {
    flexDirection: 'row', backgroundColor: '#191717', width: 85,
    height: 27,
    borderRadius: 4, marginLeft: 10,
    margin: 10

  },
  
}

);


