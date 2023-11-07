import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


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

<TextInput style={{ fontSize: 15, marginLeft: 68 }} placeholder="Select a date" />


        </View>
      </TouchableOpacity>

      <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm}
        onCancel={hideDatePicker} />
    </View>


  )
};


export default Screen2 = () => {

 

  return (



    <ScrollView>
     
      <LinearGradient colors={['black', '#5B2C6F', 'black']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

        
       <View>
        <TouchableOpacity
                style={[Styles.Searchbar, { marginTop: 100, marginLeft: 20 }]}>
                <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 20, height: 20, marginTop: 15 }} source={require('./Image/search.png')} />
            <TextInput style={Styles.text}
              placeholder=' search for party by name , type or venue ' />
          </View>

        </TouchableOpacity>
        </View>
        <View>

          
           <View
            style={[Styles.Searchbar, { marginLeft: 20 }]}>
             

            <View style={{ flexDirection: 'row' }}>
            <Text style={{ borderTopWidth: 1 }}>{DatePicker()}</Text>
              {/* <Image style={{ width: 30, height: 30 }} source={require('./Image/cal2.png')} /> */}

           
              </View> 

           

          </View>

        </View>

        <View>
          <TouchableOpacity
            style={[Styles.Searchbar, { marginLeft: 20, backgroundColor: '#8E44AD' }]}
          >
            <Text style={{ textAlign: 'center', margin: 11, fontSize: 14 }}> SEARCH </Text>
          </TouchableOpacity>

        </View>


        <View>
          <Text style={{ fontSize: 17, fontWeight: 23, marginTop: 10, marginLeft: 2 }}> Events I'm invited to</Text>

          <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 3 }}> Events where you were invited  {"  "}</Text>
        </View>
        <Text style={Styles.view}> View all</Text>
        
        <ScrollView horizontal={true} >
          <View style={{ flex: 2, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text> {"       "}</Text>
            <Image Style={Styles.img} source={require('./Image/img1.jpeg')} />
            <Text> {"       "}</Text>
            <Image source={require('./Image/img4.jpeg')} />
            <Text> {"       "}</Text>
            <Image Style={Styles.img} source={require('./Image/img10.jpeg')} />
          </View>
        </ScrollView>



        <Text style={{ fontSize: 17, fontWeight: 23, marginTop: 20 }}>
          {"  "}
          Highly anticipated events
        </Text>

        <Text style={{ fontSize: 13, margin: 2 }}>
          {"  "}
          Most anticipated events based on user preferences</Text>


        <View style={{ flexDirection: 'row', marginLeft: 13 }}>
          <View style={Styles.buttonstyles}>
            <Image style={{ width: 15, height: 15, marginLeft: 15, marginTop: 6 }} source={require('./Image/sort.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6 }}> SORT</Text>
          </View>

          <View style={Styles.buttonstyles}>
            <Image style={{ width: 15, height: 15, marginLeft: 15, marginTop: 6 }} source={require('./Image/filter.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6 }}> Filter</Text>
          </View>
          <View style={[Styles.buttonstyles, { width: 110 }]}>
            <Image style={{ width: 15, height: 15, marginLeft: 15, marginTop: 6 }} source={require('./Image/map.png')} />
            <Text style={{ fontSize: 10, alignItems: 'center', marginTop: 6, }}> View ON MAP</Text>
          </View>

        </View>



        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <ScrollView horizontal={true}>
            <Text> {"       "}</Text>
            <Image Style={{ height: 0, width: 0, borderRadius: 8 }} source={require('./Image/img10.jpeg')} />
            <Text> {"       "}</Text>
            <Image Style={{ height: 0, width: 30, borderRadius: 8 }} source={require('./Image/img1.jpeg')} />
            <Text> {"       "}</Text>
            <Image Style={{ height: 0, width: 0, borderRadius: 8 }} source={require('./Image/img4.jpeg')} />
          </ScrollView>
        </View>

      </LinearGradient>

    </ScrollView>

  )
};



const Styles = StyleSheet.create({
  Searchbar: {
    fontSize: 14,

    width: 350,
    height: 50,
    borderColor: 'grey'
    , borderRadius: 4,
    borderWidth: 1,
    color: 'white',
    backgroundColor: "#191717",


  },
  // image: {
  //   flexDirection: 'row',

  // },
  img: {
    height: 10, width: 10, borderRadius: 8,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',

  },
  text: {
    textAlign: 'center',
    marginLeft: 20,
    fontSize: 15
  },
  view: {
    textAlign: 'right',
    margin: 4,
    textDecorationLine: 'underline',
    color: '#9B59B6'
  },
  buttonstyles: {
    flexDirection: 'row', backgroundColor: '#191717', width: 85,
    height: 27,
    borderRadius: 4, marginLeft: 10,
    margin: 10

  }
}

);


