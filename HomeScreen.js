import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, TextInput, Image, Text, FlatList, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/iconSearch.png')} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image style={{ marginLeft: 182 }} source={require('./assets/Icon_Filter.png')} />
      </View>
      <View style={styles.header2}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Next To You</Text>
        <TouchableOpacity  onPress={()=> navigation.navigate('NextToYou')}>
        <Text style={{ marginLeft: 125, color: '#989898', fontSize: 18 }}>On the map </Text>
        </TouchableOpacity> 
        <Image source={require('./assets/iconMore.png')} />
      </View>
        <View style={styles.menu}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Respond')} >
          <ImageBackground source={require('./assets/imgDogCard.png')} style={styles.imageBackground}>
            <View style={{justifyContent:'space-between',flexDirection:'row',margin:15}}>
          <Text style={{ color:'white'}}>Until 26.09</Text>
          <Image source={require('./assets/Vector11.png')} />
          </View>
          <View style={styles.aderson}>
          <Image source={require('./assets/Ava.png')} />
          <Text style={{ color:'white'}} >Aderson G.</Text>
          <Image source={require('./assets/verify.png')} />
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <View style={{marginTop:20, width: 240,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ width: 130,fontWeight:'bold',color:'#313131',fontSize:16,}}>Go for a walk
and feed the dog</Text>
            <Image source={require('./assets/Vector1.png')}/>
          </View>
        </View>

        <View style={styles.Footer}>
            <View style={{marginTop:20, width: 340,flexDirection:'row', alignItems: 'center',}}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
              Categories
            </Text>
            <Text  style={{ marginLeft: 170, color: '#989898', fontSize: 18,paddingRight:6 }} >See all</Text>
            <Image source={require('./assets/iconMore.png')} />
            </View>
            <View>
                <View  style={styles.categories}>
                <Image source={require('./assets/Icon_Moving.png')}/>
                <View>
                <Text>Moving and Things</Text>
                <Text>24 Task</Text>
                </View> 
                <Image style={{marginLeft:80}} source={require('./assets/iconMore.png')} />
                </View>

                <View style={styles.categories}>
                <Image source={require('./assets/Icon_House.png')}/>
                <View>
                <Text>Help around the house</Text>
                <Text>5 Task</Text>
                </View> 
                <Image  style={{marginLeft:60}} source={require('./assets/iconMore.png')} />
                </View>
            </View>
            <View style={styles.Menufooter}>
              <TouchableOpacity>
             <Image source={require('./assets/iconMenuList.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('./assets/iconMenuHeart.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('./assets/iconAdd.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('./assets/iconMenuChat.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('./assets/iconMenuUser.png')} />
             </TouchableOpacity>
            </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 14,
    alignItems: 'flex-start',
    padding: 5,
    marginTop: 10,
  },
  header: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    paddingLeft: 10,
    fontSize: 18,
  },
  header2: {
    marginLeft: 26,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    width: 240,
    height: 230, 
    resizeMode: 'cover', 
  },
 menu:{
    marginLeft:36,
    marginTop:20,
 },
  aderson:{
    gap:5,  
    with:100,   
    borderColor:'white',
    height:30,
    borderRadius:999,
    borderColor: '#white', // Light gray border color
    flexDirection: 'row',
    marginTop:130,
    marginLeft:20,
    alignItems: 'center',
  },
  Footer:{
   marginLeft:26,
   marginTop:40,
  },
  categories:{
    marginTop:20,
    marginLeft:10,
    gap:10,
    alignItems:'center',
    flexDirection:'row',
  },
  Menufooter:{
    marginTop:20,
    gap:30,
    marginLeft:26,
    flexDirection: 'row',
    alignItems:'center',
  }
});

export default HomeScreen;
