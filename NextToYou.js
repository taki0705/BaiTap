import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";


const NextToYou=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
        <TouchableOpacity  onPress={()=> navigation.navigate('HomeScreen')}>
          <Image source={require('./assets/Iicon_Back.png')}/>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 22,marginLeft:100}}>Next to you</Text>
          </View>
          <View style={styles.menu}>
            <Image source={require('./assets/Maps.png')}/>
          </View>
        </View>
    );
};
const styles =StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 14,
        alignItems: 'flex-start',
      },
    header:{
        marginTop: 40,
        marginLeft: 24,
        alignItems: 'center',
        flexDirection:'row',
    },
    menu:{
        marginLeft:20,
        marginTop:20,
    }
});
export default NextToYou;