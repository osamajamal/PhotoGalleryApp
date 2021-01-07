import React, { Component } from 'react';

import { View ,ImageBackground,Text,Image,StyleSheet,Animated} from 'react-native';

export default class Splash extends Component {
    componentDidMount()
    {
        setTimeout(() => 
        {
         this.props.navigation.replace('AlbumList');
        } , 1500);
    }
     render() {
       return (
           <View style={styles.Conatineer}>
                  <ImageBackground source={require('..//Assests/Images/GradientImg.jpg')} style={styles.BgImg}>
                      <Image source={require('..//Assests/Images/Logo.png')} 
                        style={{width:190,height:190}}>
                      </Image>
                      <Text style={styles.Text}>Photo Gallery</Text>
                  </ImageBackground>
           </View> 
       )
     }
   }
   const styles = StyleSheet.create({
    Conatineer:
    {
        flex:1,width:"100%"
    },
    BgImg:
    {
        flex:1,width:"100%",overflow: 'hidden',alignItems:"center",justifyContent:"center"
    },
   
    Text:
    {
        color:"lightgrey",fontSize:24,fontWeight:"bold"
    }
   });    