import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
const Respond= ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <ImageBackground source={require('./assets/imgFlowers1.png')} style={styles.imageBackground}>
      <View style={styles.vector}>
      <TouchableOpacity   onPress={() => navigation.navigate('HomeScreen')} > 
        <Image source={require('./assets/iconBack.png')} />
        </TouchableOpacity >
        <Image style={{marginLeft:300}} source={require('./assets/iconShare.png')} />
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={styles.aderson}>
          <Image style={{width:32,height:32}} source={require('./assets/Ava.png')} />
          <Text style={{ color:'white'}} >Aderson G.</Text>
          <Image source={require('./assets/verify.png')} />
          </View>
          <Text style={{ color:'white',marginTop:260,marginLeft:140}}>Until 26.09</Text>
          </View>

          </ImageBackground>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:25}}>
          <Text style={{width:200,fontSize:26,color:'#313131',fontWeight:'bold'}}>
          Go for a walk 
              and feed the dog
          </Text>
        <Image source={require('./assets/Icon_Like.png')} />
          </View>
          <Text style={{marginLeft:26,width:275,marginTop:20,fontSize:16}}>
          Leaving for a week, French Bulldog Wilfred needs help feeding twice a day
and walk from 26 to 30 September. 
I bought food, it will be easy.
          </Text>

          <View  style={styles.categories}>
                <Image source={require('./assets/iconWallet.png')}/>
                <Text style={{fontSize:14,fontWeight:600}}>Reward 34$</Text>
    
              
                </View>

                <View style={styles.categories}>
                <Image source={require('./assets/iconGeo.png')}/>
              
                <Text  style={{fontSize:14,fontWeight:600}}>3 HEARLD</Text>
               <Text style={{fontSize:13,color:'#31313180'}}>400m From you</Text>
             
                </View >
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                <Image style={{marginTop:20,marginRight:20}} source={require('./assets/Icon_Chat.png')}/>
                <TouchableOpacity style={styles.purpleButton}>
      <Text style={styles.buttonText}>Respond</Text>
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
  },
  imageBackground:{
    width:'100%',
    height:397,
    borderRadius:'20%',
  },
  vector:{
    marginTop:62,
    flexDirection:'row',
    marginLeft:24,
    alignItems:'center'
  },
  aderson:{
    gap:5,  
    borderColor:'white',
    height:30,
    borderRadius:999,
    borderColor: '#white', // Light gray border color
    flexDirection: 'row',
    marginTop:260,
    marginLeft:20,
    alignItems: 'center',
  },
  categories:{
    marginTop:20,
    marginLeft:10,
    gap:10,
    alignItems:'center',
    flexDirection:'row',
  },
  purpleButton:{
    backgroundColor: 'purple',
    borderRadius: 5,
    width:251,
    height:60,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Respond;
