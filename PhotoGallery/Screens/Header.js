import React, { Component } from 'react';

import { View , StyleSheet , SafeAreaView,Text } from 'react-native';



export default class Header extends Component {
  render() {
    
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.Text}>{this.props.title}</Text>
        </View>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      height:50,
      //backgroundColor:"red",
      alignItems:"center",
      justifyContent:"center"
    },
    Text:{
         fontSize:21,
         alignItems:"center",
         justifyContent:"center",
         color:"black"

    }
  });
