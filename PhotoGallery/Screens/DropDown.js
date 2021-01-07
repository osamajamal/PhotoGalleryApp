import React , { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';



const DropDown = (props) => {
    
    const [country, setCountry] = useState('Select');
   // console.log(props.dropDownList)
  return (
//<View style={{}}>
    <DropDownPicker
    // items={[
    //     {label: 'USA', value: 'usa'},
    //     {label: 'UK', value: 'uk' },
    //     {label: 'France', value: 'france'},
    // ]}
   
    items = {props.dropDownList}
    defaultValue= {null}
    placeholder ="Filter Album"
    containerStyle={{height: 50}}
    style={{backgroundColor: '#fafafa',flex:1}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    showArrow ={true}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => {
        setCountry(item.value)
        {props.clickMe(item.value)}
    }}
        
/>
//</View>
 
  );
}

export default DropDown;