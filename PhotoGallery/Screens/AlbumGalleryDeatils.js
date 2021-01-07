import React, { useState , useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
  } from 'react-native';

  import Header from '../Screens/Header'


  const AlbumGalleryDeatils = (props) => {

    const { AlbumDeatils } = props.route.params;

    const  PhotoGallery =() =>
    {
      return(
          <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1
              }}>
              <TouchableOpacity onPress={() => SelectPhotoFromGallery(item.url)}>
                <Image
                  style={styles.imageThumbnail}
                  source={{uri: item.url}}
                />
              </TouchableOpacity>  
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      )
    }

    const  SelectPhotoFromGallery =(imageUrl) =>
    {
      setSelectImage(imageUrl)
    }

    const [dataSource, setDataSource] = useState([]);
    const [selectImage, setSelectImage] = useState();
  
    useEffect(() => {
        setSelectImage(AlbumDeatils[0].url)
        setDataSource(AlbumDeatils);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header title = "Album Details"/> 
            <View style={styles.galleryMainContainer}>
                <View style={styles.selectImageContainer}>
                    <Image
                        style={{flex:1,width:"100%"}}
                        source={{
                        uri: selectImage,
                        }}/> 
                  
                </View>
                <View style={styles.galleryChildContainer}>
                    <Text style={styles.text}>Photo Gallery</Text>
                {PhotoGallery()}  
                </View>

            </View>
        </SafeAreaView>
      );
    };
    export default AlbumGalleryDeatils;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width:"100%",
          backgroundColor: 'white',
        },
        imageThumbnail: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 114,
         
        },
        galleryMainContainer : {
            flex:1,
            width:"100%",
        },
        selectImageContainer : {
            flex:0.4,
            width:"100%"
        },
        galleryChildContainer : {
            flex:1,width:"100%",marginTop:1
        },
        text: {
            textAlign:"center",textAlignVertical:"center",fontSize:16,fontWeight:"bold"
        },


      });