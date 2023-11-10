
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";


export default Screen1 = (props) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <ScrollView>
        <View style={{ flexDirection: "row",marginTop:55}}>
          <View style={{margin:15}}>
            <Image
              style={{ width: 90, height: 90, borderRadius: 50 }}
              source={require("./Image/daniel.jpeg")}
            />
          </View>
          <View style={{ }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 500,marginTop:25 }}> Daniel Ancuta
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}> Basic level</Text>
            <Text style={{ color: "white", fontSize: 10 ,marginLeft:10}}>0 points</Text>
          </View>
        </View>
        {/* <Second /> */}
        <View style={Styles.arrange}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => props.navigation.navigate("Screen2")}
          >
            <Text > Invite Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            
          <Text style={Styles.buttontwo}>
              <Image
                style={{
                  width: 18,
                  height: 18,
                  textAlign: "center",
                  marginLeft: 4,
                }}
                source={require("./Image/upgrade.png")}
              />
               Upgrade to VIP
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={Styles.Text}>3 minutes left </Text>
      
        <View>
          <Text style={{ fontSize: 30, color: "white",marginLeft:5 }}> Account</Text>
          <Text style={{ fontSize: 13, color: "white",marginLeft:15 }}>
           Manage your account
          </Text>
        </View>
        <View style={[Styles.Space, Styles.try]}>
        <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/user.png")}
            />
            Personal Info
          </Text>
          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/security.png")}
            />
            Account Security
          </Text>
          <Text style={Styles.Text}>
            
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/Wallet.png")}
            />
            Wallet
          </Text>
          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/booking.png")}
            />
            Bookings
          </Text>
          <Text style={Styles.Text}>
            
            <Image
              style={{ width:15, height: 15 }}
              source={require("./Image/guest.png")}
            />GuestList
            
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/favourite.png")}
            />
            Favourites
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/reviews.png")}
            />
            Reviews
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/rewards.png")}
            />
            Rewards
          </Text>
        </View>

        <View>
          <Text style={{ color: "white", fontSize: 20, marginLeft:25}}>
            Support Center
          </Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 26 }}>
           Need help? Get in touch with us{" "}
          </Text>
        </View>
        <View style={Styles.try}>
          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/support.png")}
            />
            Support Center
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/mail.png")}
            />
            Write us
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/call.png")}
            />
            Call Us
          </Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, marginLeft: 15 }}>
            
            App Setting
          </Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 23 }}>
            
            Manage global app settings
          </Text>
        </View>
        <View style={Styles.try}>
          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/about.png")}
            />
            About THUMP
          </Text>

          <Text style={Styles.Text}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./Image/setting.png")}
            />
            Settings
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: 'black',
    fontSize: 10,
    // display:'inline-block',
    flexDirection: 'row',
    // justifContent:'center',
  },
  Text: {
    color: 'white',
    font: 10,
    
    margin:15,
    fontSize: 15,
  },
  // Space: {
  //   // margin:3,
  //   marginBottom: 30
  // },

  arrange: {
    flexDirection: "row",
    margin: 7,
    // justifyContent:'center',
    // alignContent:'center'
  },
  try: {
    backgroundColor: "#191717",
    margin: 25,
  },
  button: {
    backgroundColor: "#5DADE2",
    color: "#F9E79F",
    fontSize: 12,
    height: 31,
    width: 115,
    textAlign: "center",
    marginBottom: 10,
    padding: 5,
    margin: 10,
    borderRadius: 7,
  },
  buttontwo: {
    backgroundColor: "#F7DC6F",
    color: "black",
    fontSize: 12,
    height: 30,
    width: 140,
    textAlign: "center",
    marginTop: 10,
    padding: 2,
    margin: 5,
    borderRadius: 7,
  },
});
