import React , { useState , useEffect } from 'react';
import { Text, View , SafeAreaView , StyleSheet , Image , Button , ScrollView} from 'react-native';

import Header from '../Screens/Header'
import DropDown from '../Screens/DropDown'
import axios from 'axios';

 
  var Users=[]
 
   
  

  // Main FunctionalComponent name :  AlbumList
const AlbumList = (props) => {
 
  // Function to render Card ..Calling this in a main render function
    const  CardUi =() =>
    {
      return(
          <ScrollView>
         {
          UserAlbum && UserAlbum.map((item, index) => (
          <View key = {item.id} style={styles.Cardcontainer}>
                <View style={styles.Imagecontainer}>
                  <Image
                      style={{height:130,width:"100%"}}
                      source={{
                      uri: item.url,
                      }}/>
                
                </View>

                  <View style={styles.Albumcontainer}>
                
                      <Text numberOfLines={1}  style={[styles.Text,{fontSize:14,fontWeight:"bold",color:"black",width:"40%"}]}>{item.title}</Text>
                
                      <View style={styles.Textcontainer}>
                          <Text numberOfLines={1} style={styles.Text}>Harry</Text>
                          <Text style={styles.Text}>Harry29@gmail.com</Text>
                         
                      </View>

                      <View style={styles.Buttoncontainer}>
                          <Button
                              title="View Album"
                              color="orange"
                              numberOfLines={1}
                              onPress={() => {
                                  //Alert.alert('You tapped the Decrypt button!');
                                  NavigateToAlbumGallery();
                              }}/>    
                      </View>
                </View>
          </View>
        ))
        }
      </ScrollView> 
      )
    }

    const GetAlbumUserid = (value) =>
    {
      console.log(value)
      setAlbumUserId (value);
    }

  const GetAllUser = ()=>
  {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      //console.log(res.data)
      Users = [];
      Users = res.data.map(x => ({
      label: 'User '+x.id,
      value:  x.id,
      }))
      console.log(Users);
      allUserId(Users);
      
    })
    
    .catch(err => {
      console.log(error);
    });
  }

  const UserAlbumDeatils = ()=>
  {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => {
     // setuserAlbum(res.data.find(data => data.albumId === AlbumUserid));
      //AlbumDeatils = UserAlbum;
      //console.log(AlbumDeatils + "ddetet")
      //setuserAlbum(res.data);
      const FilterAlbumDeatils = res.data.filter(data => data.albumId === AlbumUserid);
      setuserAlbum(FilterAlbumDeatils);

    })
    
    .catch(err => {
      console.log(error);
    });
  }

  const NavigateToAlbumGallery=()=>{
    props.navigation.navigate('AlbumGalleryDeatils',{AlbumDeatils : UserAlbum});
  }

    // Manage Component State here
    const [AlbumUserid, setAlbumUserId] = useState('');
    const [AllUsers, allUserId] = useState([]);
    const [UserAlbum, setuserAlbum] = useState([]);


    useEffect(()=>
    {
      console.log("Use effect")
      GetAllUser();
    },[])

    useEffect(()=>
    {
      console.log("Use effect 2222")
      UserAlbumDeatils();
    },[AlbumUserid])

   //  Component main render function 
  return (
    <SafeAreaView style={styles.Container}>
        <Header title = "Album List"/> 
         <View style={{elevation:100,zIndex:100,flex:1}}>  
         <DropDown dropDownList = {AllUsers} clickMe={GetAlbumUserid}/> 
         <View style={{marginTop:4}}>
         {CardUi()} 
         </View> 
         </View> 
      
    </SafeAreaView>
    
      
    
  )
}

export default AlbumList;

const styles = StyleSheet.create({
    Container: {
      flex:1,
      width:"100%",
      //backgroundColor:"white"

      //backgroundColor:"red",
    },
    Text:{   
         fontSize:13,
         color:"grey",
    }, 
    Cardcontainer: {
        width:"100%",
        flex:0.4,
      //  backgroundColor:"blue",
        flexDirection:"row",
        
    },
    Imagecontainer: {
        height:"55%",
        width:"54%",
        marginLeft:16,
        marginTop:24,
        //backgroundColor:"yellow"
    },
    Albumcontainer: {
        //backgroundColor:"red",
        width:"100%",
        //height:"68%",
        marginTop:44
    },
    Textcontainer: {
        marginTop:10 ,
       // backgroundColor:"green"
    },
    Buttoncontainer: {
        marginTop:9,
        width:100,
        height:20
    },
  });
